<template>
  <div class="pageIndex">
     <m-head></m-head>
    <div class="container">
      <div class="leftBar">
        <m-lfbar></m-lfbar>
      </div>
      <div class="wrap">
            <div class="bar-nav" >
                <div class="optin-box" :class=" optionSelect ? 'select' : '' ">
                    <span id="filter" class="optionElem">
                    <img src="@/assets/icon/filter.png">
                </span>
                <span id="cut" class="optionElem" @click="cut()">
                    <img src="@/assets/icon/cut.png">
                </span>
                <span id="copy" class="optionElem" @click="clone()">
                    <img src="@/assets/icon/copy.png">
                </span>
                <span id="lock" class="optionElem" @click="lock()">
                    <img :src="unclock?'http://ovfllimsi.bkt.clouddn.com/lockOpen.png':'http://ovfllimsi.bkt.clouddn.com/lockClose.png'">
                </span>
                <span id="del" class="optionElem" @click="del()">
                    <img src="@/assets/icon/del.png">
                </span>
                </div>
                <div class="cutOptin" id="cutOptin" :class=" cutSelect ? 'select' : '' ">
                <span id="cancle" class="optionElem" @click="cutCancle()">
                    <img src="@/assets/icon/cancle.png">
                </span>
                <span id="sure" class="optionElem" @click="cutSure()">
                    <img src="@/assets/icon/sure.png">
                </span>
                </div>
            </div>
           <canvas id="canvas" width='761' height='589'></canvas>
            <img :src="item.pic" :id="item.key" class="imgPrev" v-for="item in imgInstance">
      </div>
    </div>
  </div>
</template>
<style>
.container {
  overflow: hidden;
}
.container .leftBar {
  width: 400px;
  float: left;
}
.imgPrev {
  display: none;
}
.wrap {
  float: left;
  width: 800px;
  margin-left: 20px;
  border: #eee 1px solid;
  height: 1000px;
}
.bar-nav {
  /* display: none; */
  background: #eee;
  padding: 10px;
  height: 30px;
}
.optin-box {
  display: none;
}
.cutOptin {
  display: none;
}
.select {
  display: block;
}
.optin-box span {
  display: inline-block;
  width: 25px;
  margin-right: 20px;
  cursor: pointer;
}
.optin-box span:first-child {
  margin-left: 50px;
}
.optin-box span img,
.cutOptin span img {
  display: inline-block;
  float: left;
  width: 100%;
}

.cutOptin span {
  display: inline-block;
  width: 25px;
  margin-right: 20px;
  cursor: pointer;
}
</style>
<script>
import mHead from "@/components/head";
import mLfbar from "@/components/leftBar";
export default {
  components: { mHead, mLfbar },
  data() {
    return {
      canvas: "",
      imgInstanceObj: {}, //图片剪辑对象
      _clipboard: "", //剪贴对象
      optionSelect: false, //
      cutSelect: false, //是否进行剪切操作
      unclock: true,
      imgInstance: [
        {
          key: "img1",
          pic: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
          position: { left: 100, top: 100, width: 200, height: 198, angle: 10 }
        },
        {
          key: "img2",
          pic: "http://ovfllimsi.bkt.clouddn.com/fabricPic2.jpeg",
          position: { left: 400, top: 200, width: 200, height: 198, angle: 10 }
        }
      ],
      cutRect: {
        el: "",
        object: "",
        lastActive: "",
        object1: "",
        object2: "",
        cntObj: "",
        selection_object_left: "",
        selection_object_top: ""
      }
    };
  },
  mounted() {
    //绘制画布
    this.updateImg();
  },
  created() {},
  methods: {
    updateImg() {
      var _this = this;
      this.canvas = this.fabricAction.createCanvas("canvas");

      //初始化可编辑图片
      this.imgInstance.forEach(function(k, i) {
        _this.imgInstanceObj[
          "instance" + k.key
        ] = _this.fabricAction.createFabricObj(k.key, k.position);
        setTimeout(function() {
          _this.canvas.add(_this.imgInstanceObj["instance" + k.key]);
          _this.fabricAction.bindSeletUnSelectEvent(
            _this.imgInstanceObj["instance" + k.key],
            _this
          );
        }, 100);
      });
    },

    clone() {
      var _this = this;
      var timestamp = Date.parse(new Date());
      _this.fabricAction.Copy(this);
      setTimeout(function() {
        _this.fabricAction.Paste(_this);
        return;
      }, 5);
    },
    del() {
      var el = this.canvas.getActiveObject();
      this.canvas.remove(el);
    },

    // startCrop() {
    //   var _this = this;
    //   this.canvas.remove(this.cutRect.el);
    //   if (this.canvas.getActiveObject()) {
    //     this.cutRect.object = this.canvas.getActiveObject();

    //     if (this.cutRect.lastActive !== this.cutRect.object) {
    //       console.log("different object");
    //     } else {
    //       console.log("same object");
    //     }
    //     if (
    //       this.cutRect.lastActive &&
    //       this.cutRect.lastActive !== this.cutRect.object
    //     ) {
    //       this.cutRect.lastActive.clipTo = null;
    //     }

    //     this.cutRect.el = new fabric.Rect({
    //       fill: "rgba(0,0,0,0.3)",
    //       originX: "left",
    //       originY: "top",
    //       stroke: "#ccc",
    //       strokeDashArray: [2, 2],
    //       opacity: 1,
    //       width: 1,
    //       height: 1,
    //       borderColor: "#36fd00",
    //       cornerColor: "green",
    //       hasRotatingPoint: false
    //     });
    //     this.cutRect.el.left = this.canvas.getActiveObject().left;
    //     this.cutRect.selection_object_left = this.canvas.getActiveObject().left;
    //     this.cutRect.selection_object_top = this.canvas.getActiveObject().top;
    //     this.cutRect.el.top = this.canvas.getActiveObject().top;
    //     this.cutRect.el.width =
    //     this.canvas.getActiveObject().width *
    //     this.canvas.getActiveObject().scaleX;
    //     this.cutRect.el.height =
    //     this.canvas.getActiveObject().height *
    //     this.canvas.getActiveObject().scaleY;
    //     this.canvas.add(this.cutRect.el);
    //     this.canvas.setActiveObject(this.cutRect.el);
    //   } else {
    //     alert("Please select an object or layer");
    //   }
    // },
    // crop() {
    //   var _this = this;
    //   var left = this.cutRect.el.left - this.cutRect.object.left;
    //   var top = this.cutRect.el.top - this.cutRect.object.top;
    //   left *= 1;
    //   top *= 1;
    //   var width = this.cutRect.el.width * 1;
    //   var height = this.cutRect.el.height * 1;
    //   this.cutRect.object.clipTo = function(ctx) {
    //     ctx.rect(
    //       -(_this.cutRect.el.width / 2) + left,
    //       -(_this.cutRect.el.height / 2) + top,
    //       parseInt(width * _this.cutRect.el.scaleX),
    //       parseInt(_this.cutRect.el.scaleY * height)
    //     );
    //   };
    //   this.canvas.remove(this.canvas.getActiveObject());
    //   this.cutRect.lastActive = this.cutRect.object;
    //   this.canvas.renderAll();
    // },
    cut() {
      this.optionSelect = false;
      this.cutSelect = true;
      this.fabricAction.startCrop(this);
    },
    cutCancle() {
      this.canvas.remove(this.cutRect.el);
    },
    cutSure() {
      this.optionSelect = true;
      this.cutSelect = false;
      this.fabricAction.crop(this);
    },
    lock() {
      if (this.unclock) {
        this.canvas.getActiveObject().lockMovementX = true;
        this.canvas.getActiveObject().lockMovementY = true;
        this.canvas.getActiveObject().lockRotation = true;
        this.canvas.getActiveObject().lockScalingX = true;
        this.canvas.getActiveObject().lockScalingY = true;
        this.unclock = false;
        return;
      }
      this.canvas.getActiveObject().lockMovementX = false;
      this.canvas.getActiveObject().lockMovementY = false;
      this.canvas.getActiveObject().lockRotation = false;
      this.canvas.getActiveObject().lockScalingX = false;
      this.canvas.getActiveObject().lockScalingY = false;
      this.unclock = true;
    }
  }
};
</script>
