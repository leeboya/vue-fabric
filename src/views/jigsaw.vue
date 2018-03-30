  <template>
    <div class="p-index">
        <div class="product-list" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
              <top-bar></top-bar>
              <single-product :list="productList" :type="listType" @setCaseBasic="getCaseBasic"></single-product>
        </div>
        <div class="jigsaw" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
              <div class="top-bar">
                  <el-button type="text" @click="open" class="creare-case">{{this.caseBasic.title}}</el-button>
              </div>
                <div class="cut-optin" id="cutOptin" :class=" $store.state.fabricObj.cutSelect ? 'select' : '' "> 
                  <span id="cancle" class="optionElem" @click="cutCancle()"> <img src="@/assets/icon/cancle.png" /> </span> 
                  <span id="sure" class="optionElem" @click="cutSure()"> <img src="@/assets/icon/sure.png" /> </span> 
                </div> 
              
              <div class="black-board">
                <option-nav :config="config"></option-nav>
                <canvas id="canvas" width='861' height='589'></canvas>
              </div>
          </div>
    </div>
  </template>
  <script>
import topBar from "@/components/top_bar";
import guide from "@/components/guide";
import singleProduct from "@/components/single_product";
import optionNav from "@/components/option_nav";
import {
  create,
  list,
  save,
  del,
  update,
  caseBasic,
  casedetails
} from "@/api/case";
export default {
  components: { topBar, guide, singleProduct, optionNav },
  data() {
    return {
      listType: "jigsaw",
      imgInstanceObj: {}, //图片剪辑对象
      showFilterList: false,
      lightnum: 0,
      contrastnum: 0,
      saturationnum: 0,
      blurnum: 0,
      colornum: 0,
      opacitynum: 0,
      filter: fabric.Image.filters,
      cutRect: {
        el: "",
        object: "",
        lastActive: "",
        object1: "",
        object2: "",
        cntObj: "",
        selection_object_left: "",
        selection_object_top: ""
      },
      config: {
        canvasState: [],
        currentStateIndex: -1,
        redoStatus: false, //撤销状态
        undoStatus: false, // 重做状态
        undoFinishedStatus: 1,
        redoFinishedStatus: 1,
        undoButton: this.$refs.undo,
        redoButton: this.$refs.redo
      },
      productList: [],

      caseBasic: {
        description: "",
        isEditable: "",
        isEditable: "",
        isPrivate: "",
        memberId: "",
        refId: "",
        thumb: "",
        title: "未命名"
      }
    };
  },
  mounted() {
    this.$store.commit("setCurrentNav", "jigsaw");
    //绘制画布
    this.updateImg();
    //监听canvas 事件
    this.canvasDataChange();
    //初始化的canvas对象事件绑定
    setTimeout(() => {
      this.firstBindEvent();
    }, 300);
    //console.log(JSON.stringify(canvas.toJSON()));

    this.getCaseList("00001"); //获取案例列表
  },

  methods: {
    updateImg() {
      this.$store.commit("setCanvas", this.fabricAction.createCanvas("canvas"));
      // this.$store.state.fabricObj.canvas.loadFromJSON(this.canvasObj);
    },
    firstBindEvent() {
      var _this = this;
      _this.$store.state.fabricObj.canvas.getObjects().forEach(function(k, i) {
        _this.fabricAction.bindSeletUnSelectEvent(k, _this);
      });
    },
    // canvas操作事件监听
    canvasDataChange() {
      let _self = this;
      this.$store.state.fabricObj.canvas.on("object:modified", function() {
        _self.updateCanvasState();
      });
      this.$store.state.fabricObj.canvas.on("object:added", function() {
        _self.updateCanvasState();
      });
      this.$store.state.fabricObj.canvas.on("object:removed", function() {
        _self.updateCanvasState();
      });
      this.$store.state.fabricObj.canvas.on("object:rotating", function() {
        _self.updateCanvasState();
      });
    },
    updateCanvasState() {
      var _self = this;
      if (
        _self.config.undoStatus == false &&
        _self.config.redoStatus == false
      ) {
        var jsonData = _self.$store.state.fabricObj.canvas.toJSON();
        var canvasAsJson = JSON.stringify(jsonData);
        if (
          _self.config.currentStateIndex <
          _self.config.canvasState.length - 1
        ) {
          var indexToBeInserted = _self.config.currentStateIndex + 1;
          _self.config.canvasState[indexToBeInserted] = canvasAsJson;
          var numberOfElementsToRetain = indexToBeInserted + 1;
          _self.config.canvasState = _self.config.canvasState.splice(
            0,
            numberOfElementsToRetain
          );
        }
        _self.config.currentStateIndex = _self.config.canvasState.length - 1;
      }
    },
    open() {
      var html = [
        '  <div class="case-basic">',
        '     <div class="name-box">',
        '      <input class="case-name" id="caseTitle" value="' +
          this.caseBasic.title +
          '" />',
        "      </div>",
        "      <div>",
        "         <select><option>简约</option></select>",
        "         <select><option>客厅</option></select>",
        "      </div>",
        "     <div class='memo-box'><textarea id='caseMemo' class='area'>" +
          this.caseBasic.description +
          "</textarea></div>",
        "  </div>"
      ].join("");
      this.$alert(html, {
        dangerouslyUseHTMLString: true
      })
        .then(() => {
          this.caseBasic.title = document.getElementById("caseTitle").value;
          this.caseBasic.description = document.getElementById(
            "caseMemo"
          ).value;
          if (!this.caseBasic.paletteId) {
            this.createCase({
              description: this.caseBasic.description, //描述
              isEditable: 0, //是否可以修改
              isPrivate: 0, //是否私有
              memberId: "00001", //会员ID
              refId: "a001", //引用ID
              thumb: "", // 缩略图url
              title: this.caseBasic.title //案例主题或者名称吧
            });
          } else {
            this.saveData({
              caseMO: {
                data: JSON.stringify(
                  this.$store.state.fabricObj.canvas.toJSON()
                ),
                paletteId: this.caseBasic.paletteId,
                time: Date.parse(new Date())
              },
              palette: this.caseBasic
            });
          }

          // this.$message({
          //   type: "success",
          //   message: "创建成功!"
          // });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已经取消"
          });
        });
    },
    createCase(params) {
      var _this = this;
      create(params).then(
        function(res) {},
        function(err) {
          //					console.log(err)
        }
      );
    },

    /**@augments
     * fucntion 转为图片并下载到本地
     */
    canvasToImage() {
      var MIME_TYPE = "image/png";
      //转换成base64
      var imgURL = this.$store.state.fabricObj.canvas.toDataURL(MIME_TYPE); //创建一个a链接，模拟点击下载
      var dlLink = document.createElement("a");
      var filename = "个人画板_" + new Date().getTime() + ".png";
      dlLink.download = filename;
      dlLink.href = imgURL;
      dlLink.dataset.downloadurl = [
        MIME_TYPE,
        dlLink.download,
        dlLink.href
      ].join(":");
      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);
    },

    /**@augments
     * fucntion 转为图片并下载到本地
     */
    canvasToImage() {
      var MIME_TYPE = "image/png";
      //转换成base64
      var imgURL = this.$store.state.fabricObj.canvas.toDataURL(MIME_TYPE); //创建一个a链接，模拟点击下载
      var dlLink = document.createElement("a");
      var filename = "个人画板_" + new Date().getTime() + ".png";
      dlLink.download = filename;
      dlLink.href = imgURL;
      dlLink.dataset.downloadurl = [
        MIME_TYPE,
        dlLink.download,
        dlLink.href
      ].join(":");
      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);
    },
    getCaseList(memberId) {
      var _this = this;
      list(memberId).then(
        function(res) {
          _this.productList = res.data;
        },
        function(err) {
          //					console.log(err)
        }
      );
    },
    getCaseBasic(data) {
      this.caseBasic = data;

      this.getCaseDetails(data.paletteId);
    },
    getCaseDetails(paletteId) {
      var _this = this;

      casedetails(paletteId).then(
        function(res) {
          _this.$store.state.fabricObj.canvas.loadFromJSON(
            eval("(" + res.data.data + ")")
          );
        },
        function(err) {
          //					console.log(err)
        }
      );
    },
    saveData(params) {
      let _this = this;
      save(params).then(
        function(res) {},
        function(err) {
          //					console.log(err)
        }
      );
    }
  }
};
</script>
  <style rel="stylesheet/scss" lang="scss">
/* @import url('../styles/test.scss'); */
.p-index {
  position: relative;
  overflow: hidden;
  background: #000;

  .product-list {
    background: #fff;
    &.open {
      width: 36%;
      float: left;
    }
  }

  .jigsaw {
    display: none;
    position: relative;
    .top-bar {
      background: #363738;
      height: 64px;
      .creare-case {
        margin-left: 40px;
        text-decoration: none;
      }
    }
    .bar-nav {
      background: #eee;
      padding: 10px;
      height: 30px;
      position: relative;
    }
    .optin-box {
      // display: none;
      position: relative;
      span {
        display: inline-block;
        width: 25px;
        margin-right: 20px;
        vertical-align: middle;
        &.option-special {
          width: 40px;
        }
        cursor: pointer;
        img {
          display: inline-block;
          float: left;
          width: 100%;
        }
      }
      .action {
        width: 220px;
        position: absolute;
        background-color: #eee;
        padding: 4px;
        top: 10px;
        left: 450px;
        border: #ccc 1px solid;
        display: none;
        &.select {
          display: block;
        }
        span {
          display: inline-block;
          img {
            width: 25px;
          }
        }
      }
    }
    .cut-optin {
      display: none;
      position: absolute;
      left: 100px;
      background: #fff;
      padding: 2px 10px;
      border: #eee 1px solid;
      span {
        display: inline-block;
        width: 25px;
        margin-right: 20px;
        cursor: pointer;
        img {
          display: inline-block;
          float: left;
          width: 100%;
        }
      }
    }
    .select {
      display: block;
    }

    &.open {
      display: block;
      float: left;
      width: 64%;
    }
    .top-bar {
      background: #363738;
      height: 64px;
    }
    .black-board {
      width: 860px;
      height: 1000px;
      background: #fff;
      position: fixed;
      left: 36%;
      margin-left: 80px;
      top: 100px;
    }
  }
}
.case-basic {
  .name-box {
    margin-bottom: 10px;
  }
  .case-name {
    width: 366px;
    border: #eee 1px solid;
    padding: 2px 10px;
    line-height: 20px;
  }
  select {
    width: 182px;
    margin-right: 10px;
    border: #eee 1px solid;
  }
  .memo-box {
    margin-top: 10px;
    textarea {
      width: 386px;
      height: 60px;
      border: #eee 1px solid;
    }
  }
}
</style>
