<template>
  <div class="p-index">
        <div class="product-list" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
            <top-bar></top-bar>
            <guide></guide>
            <single-product :list="productList" :type="listType"></single-product>
        </div>
        <div class="jigsaw" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
            <div class="top-bar">
                <el-button type="text" @click="open" class="creare-case">未命名案例</el-button>
            </div>
            <div class="opton"></div>
            <div class="black-board">
             <option-nav :config="config"></option-nav>
              <canvas id="canvas" width='761' height='589'></canvas>
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
  data() {
    return {
      listType: "sing",
      productList: [
        {
          pic:
            "http://m4.cdn.imeijian.cn/categoryImg-10002.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m4.cdn.imeijian.cn/categoryImg-10004.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m4.cdn.imeijian.cn/categoryImg-10012.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m4.cdn.imeijian.cn/categoryImg-10009.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m4.cdn.imeijian.cn/categoryImg-10003.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m4.cdn.imeijian.cn/categoryImg-10005.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m1.cdn.imeijian.cn/8dd88ad5c373b5296e7f6a722532c343.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m1.cdn.imeijian.cn/4bd5609e6a7b2e5241dfa94f5a46103b.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m1.cdn.imeijian.cn/2f0ce5e3aca9512bcaa3808253894ad0.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m1.cdn.imeijian.cn/e7f04ea47698663d3bbfbfac6c3a7ac2.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m1.cdn.imeijian.cn/01764dbb45e867654f2ffea75905a00d.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m1.cdn.imeijian.cn/9803a7ca868fccaa97f0eb3467ac5cbd.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m1.cdn.imeijian.cn/e143d3c6c5445a31e898ae89bfaab6e5_M_685630.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m1.cdn.imeijian.cn/2820dc152aa916d17df24f4afee340b6.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m1.cdn.imeijian.cn/b3fdc58086f8d77da428ebd3183f88d5.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m1.cdn.imeijian.cn/669b139694989c3edb30fc039cd478b6.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m1.cdn.imeijian.cn/83a521cde2fde15343c8b67640e1264d.png?x-oss-process=style/300wh_j"
        },
        {
          pic:
            "http://m1.cdn.imeijian.cn/9311e12d6f29953e9652b89f64c8c030.png?x-oss-process=style/300wh_j"
        }
      ],
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
      canvasObj: {
        objects: [
          {
            type: "image",
            version: "2.1.0",
            originX: "left",
            originY: "top",
            left: 100,
            top: 100,
            width: 200,
            height: 198,
            fill: "rgb(0,0,0)",
            stroke: null,
            strokeWidth: 0,
            strokeDashArray: null,
            strokeLineCap: "butt",
            strokeLineJoin: "miter",
            strokeMiterLimit: 10,
            scaleX: 1,
            scaleY: 1,
            angle: 10,
            flipX: false,
            flipY: false,
            opacity: 1,
            shadow: null,
            visible: true,
            clipTo: null,
            backgroundColor: "",
            fillRule: "nonzero",
            paintFirst: "fill",
            globalCompositeOperation: "source-over",
            transformMatrix: null,
            skewX: 0,
            skewY: 0,
            crossOrigin: "",
            cropX: 0,
            cropY: 0,
            src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
            filters: []
          },
          {
            type: "image",
            version: "2.1.0",
            originX: "left",
            originY: "top",
            left: 400,
            top: 200,
            width: 200,
            height: 198,
            fill: "rgb(0,0,0)",
            stroke: null,
            strokeWidth: 0,
            strokeDashArray: null,
            strokeLineCap: "butt",
            strokeLineJoin: "miter",
            strokeMiterLimit: 10,
            scaleX: 1,
            scaleY: 1,
            angle: 10,
            flipX: false,
            flipY: false,
            opacity: 1,
            shadow: null,
            visible: true,
            clipTo: null,
            backgroundColor: "",
            fillRule: "nonzero",
            paintFirst: "fill",
            globalCompositeOperation: "source-over",
            transformMatrix: null,
            skewX: 0,
            skewY: 0,
            crossOrigin: "",
            cropX: 0,
            cropY: 0,
            src: "http://localhost:9090/static/2.jpg",
            filters: []
          },
          {
            type: "image",
            version: "2.1.0",
            originX: "left",
            originY: "top",
            left: 533,
            top: -62,
            width: 200,
            height: 198,
            fill: "rgb(0,0,0)",
            stroke: null,
            strokeWidth: 0,
            strokeDashArray: null,
            strokeLineCap: "butt",
            strokeLineJoin: "miter",
            strokeMiterLimit: 10,
            scaleX: 1,
            scaleY: 1,
            angle: 0,
            flipX: false,
            flipY: false,
            opacity: 1,
            shadow: null,
            visible: true,
            clipTo: null,
            backgroundColor: "",
            fillRule: "nonzero",
            paintFirst: "fill",
            globalCompositeOperation: "source-over",
            transformMatrix: null,
            skewX: 0,
            skewY: 0,
            crossOrigin: "",
            cropX: 0,
            cropY: 0,
            src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
            filters: []
          },
          {
            type: "image",
            version: "2.1.0",
            originX: "left",
            originY: "top",
            left: 150,
            top: 150,
            width: 200,
            height: 198,
            fill: "rgb(0,0,0)",
            stroke: null,
            strokeWidth: 0,
            strokeDashArray: null,
            strokeLineCap: "butt",
            strokeLineJoin: "miter",
            strokeMiterLimit: 10,
            scaleX: 1,
            scaleY: 1,
            angle: 10,
            flipX: false,
            flipY: false,
            opacity: 1,
            shadow: null,
            visible: true,
            clipTo: null,
            backgroundColor: "",
            fillRule: "nonzero",
            paintFirst: "fill",
            globalCompositeOperation: "source-over",
            transformMatrix: null,
            skewX: 0,
            skewY: 0,
            crossOrigin: "",
            cropX: 0,
            cropY: 0,
            src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
            filters: []
          },
          {
            type: "image",
            version: "2.1.0",
            originX: "left",
            originY: "top",
            left: 200,
            top: 200,
            width: 200,
            height: 198,
            fill: "rgb(0,0,0)",
            stroke: null,
            strokeWidth: 0,
            strokeDashArray: null,
            strokeLineCap: "butt",
            strokeLineJoin: "miter",
            strokeMiterLimit: 10,
            scaleX: 1,
            scaleY: 1,
            angle: 10,
            flipX: false,
            flipY: false,
            opacity: 1,
            shadow: null,
            visible: true,
            clipTo: null,
            backgroundColor: "",
            fillRule: "nonzero",
            paintFirst: "fill",
            globalCompositeOperation: "source-over",
            transformMatrix: null,
            skewX: 0,
            skewY: 0,
            crossOrigin: "",
            cropX: 0,
            cropY: 0,
            src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
            filters: []
          }
        ]
      }
    };
  },
  components: { topBar, guide, singleProduct, optionNav },
  mounted() {
    this.$store.commit("setCurrentNav", "sing");
    //绘制画布
    this.updateImg();
    //监听canvas 事件
    this.canvasDataChange();
    // this.createCase({
    //   description: "这是测试的", //描述
    //   isEditable: 0, //是否可以修改
    //   isPrivate: 0, //是否私有
    //   memberId: "00001", //会员ID
    //   refId: "a001", //引用ID
    //   thumb: "", // 缩略图url
    //   title: "第一条案例" //案例主题或者名称吧
    // }); 
    //创建案例

    // this.saveData({
    //   caseMO: {
    //     data: "string",
    //     paletteId: "string",
    //     time: "2018-03-28T10:57:41.682Z"
    //   },
    //   palette: {
    //     modificationNumber: 0,
    //     createBy: null,
    //     createDate: null,
    //     updateBy: null,
    //     updateDate: null,
    //     delFlag: 0,
    //     paletteId: "978904609705238530",
    //     refId: "a001",
    //     memberId: "00001",
    //     title: "第一条案例",
    //     thumb: "",
    //     description: "这是测试的",
    //     isPrivate: 0,
    //     dataId: null,
    //     isEditable: 0
    //   }
    // });

    // this.updateCase("978901410936070145", {
    //   createBy: "string",
    //   createDate: "2018-03-28T11:18:26.72226Z",
    //   dataId: "string",
    //   delFlag: 0,
    //   description: "string",
    //   id: 0,
    //   isEditable: 0,
    //   isPrivate: 0,
    //   memberId: "string",
    //   modificationNumber: 0,
    //   paletteId: "string",
    //   refId: "string",
    //   thumb: "string",
    //   title: "string",
    //   updateBy: "string",
    //   updateDate: "2018-03-28T11:18:26.796Z"
    // });
    // this.getCaseList("00001");
    // this.delCase("978898061348118530");
    // this.getCaseBasic("978907450553475073"); //获取案例基础信息

    // this.getCaseDetails("978904609705238530");
    //初始化的canvas对象事件绑定
    setTimeout(() => {
      this.firstBindEvent();
    }, 300);
  },
  methods: {
    updateImg() {
      this.$store.commit("setCanvas", this.fabricAction.createCanvas("canvas"));
      //this.$store.state.fabricObj.canvas.loadFromJSON(this.canvasObj);
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
    // 历史记录

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

         _self.config.canvasState =_self.config.canvasState.splice(
            0, numberOfElementsToRetain);
        }else{
          _self.config.canvasState.push(canvasAsJson);
        } 
        _self.config.currentStateIndex = _self.config.canvasState.length - 1;
      }
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
    open() {
      var html=['  <div class="case-basic">',
                '   <div class="name-box">',
                '    <input class="case-name" value="未命名" />',
                '    </div>',
                '      <select><option>简约</option><option>北欧</option></select>',
                '      <select><option>客厅</option><option>卧室</option></select>',
                '      <div></div>',
                '     </div>',
                '    </div>',
                '   </div>',
                '  </div>'].join("");
    this.$alert(html, {
          dangerouslyUseHTMLString: true
        });
      
    },
    createCase(params) {
      let _this = this;
      create(params).then(
        function(res) {},
        function(err) {
          //					console.log(err)
        }
      );
    },
    getCaseList(memberId) {
      let _this = this;
      list(memberId).then(
        function(res) {},
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
    },
    delCase(paletteId) {
      let _this = this;
      del(paletteId).then(
        function(res) {},
        function(err) {
          //					console.log(err)
        }
      );
    },
    updateCase(paletteId, params) {
      let _this = this;
      update(paletteId, params).then(
        function(res) {},
        function(err) {
          //					console.log(err)
        }
      );
    },
    getCaseBasic(paletteId) {
      let _this = this;
      caseBasic(paletteId).then(
        function(res) {},
        function(err) {
          //					console.log(err)
        }
      );
    },
    getCaseDetails(paletteId) {
      let _this = this;
      casedetails(paletteId).then(
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
        float: left;
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
      width: 800px;
      height: 1000px;
      background: #fff;
      position: fixed;
      left: 36%;
      margin-left: 80px;
      top: 100px;
    }
  }
  .creare-case{
    margin-left:40px;
    text-decoration: none;
    
  }
}
.case-basic {
  .name-box{
    margin-bottom:10px;
  }
  .case-name {
    width:366px;
    border:#eee 1px solid;
    padding:2px 10px;
    line-height: 20px;
  }
  select{
    width:182px;
    margin-right:10px;
  }
}
</style>


