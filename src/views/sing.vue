<template>
  <div class="p-index">
        <div class="product-list" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
            <top-bar></top-bar>
            <guide></guide>
            <single-product :list="productList" :type="listType"></single-product>
        </div>
        <div class="jigsaw" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
            <div class="top-bar"></div>
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
export default {
  data() {
    return {
      listType: "sing",
      productList: [
        {
          pic:
            "//img.hb.aicdn.com/4332c424f2db2c5d3e4dd6011175f9a3f33790f293bf4-xjwwf0_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/4aeaf5c16002988db3fc89e3608a18ca540e806728c5c7-9I7wRn_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/5e9504beda02770814d7d3f501b3a69804e0d66d13273-5YG3rM_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/f468b05081e3bd7f92dbd0c69dab287d8c7fc1182a1f8d-Pot2uw_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/0f1ff2f20f70172a6383755951e025876fd261689f8ae-KF0mpy_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/451dd19402c8d945a5bd55c220bbf449afc2ab3e7bf56-NYBQEq_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/aad203ac19f420aa8e9a8a9b5e706fc22d866cb998301-iHLn1o_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/c8e7207653816cbdcc58e263c0a26b3f5799a97f22a038-P62d9T_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/4332c424f2db2c5d3e4dd6011175f9a3f33790f293bf4-xjwwf0_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/4aeaf5c16002988db3fc89e3608a18ca540e806728c5c7-9I7wRn_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/5e9504beda02770814d7d3f501b3a69804e0d66d13273-5YG3rM_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/f468b05081e3bd7f92dbd0c69dab287d8c7fc1182a1f8d-Pot2uw_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/0f1ff2f20f70172a6383755951e025876fd261689f8ae-KF0mpy_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/451dd19402c8d945a5bd55c220bbf449afc2ab3e7bf56-NYBQEq_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/aad203ac19f420aa8e9a8a9b5e706fc22d866cb998301-iHLn1o_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/c8e7207653816cbdcc58e263c0a26b3f5799a97f22a038-P62d9T_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/c8e7207653816cbdcc58e263c0a26b3f5799a97f22a038-P62d9T_/fw/480"
        },
        {
          pic:
            "//img.hb.aicdn.com/4332c424f2db2c5d3e4dd6011175f9a3f33790f293bf4-xjwwf0_/fw/480"
        }
      ],
      config:{
          canvasState             : [],
          currentStateIndex       : -1,
          redoStatus              : false, //撤销状态
          undoStatus              : false,  // 重做状态
          undoFinishedStatus      : 1,
          redoFinishedStatus      : 1,
          undoButton              : this.$refs.undo,
          redoButton              : this.$refs.redo,
      },
      canvasObj:{
        "objects": [
        {
        "type": "image", 
        "version": "2.1.0", 
        "originX": "left", 
        "originY": "top", 
        "left": 100, 
        "top": 100, 
        "width": 200, 
        "height": 198, 
        "fill": "rgb(0,0,0)", 
        "stroke": null, 
        "strokeWidth": 0, 
        "strokeDashArray": null, 
        "strokeLineCap": "butt", 
        "strokeLineJoin": "miter", 
        "strokeMiterLimit": 10, 
        "scaleX": 1, 
        "scaleY": 1, 
        "angle": 10, 
        "flipX": false, 
        "flipY": false, 
        "opacity": 1, 
        "shadow": null, 
        "visible": true, 
        "clipTo": null, 
        "backgroundColor": "", 
        "fillRule": "nonzero", 
        "paintFirst": "fill", 
        "globalCompositeOperation": "source-over", 
        "transformMatrix": null, 
        "skewX": 0, 
        "skewY": 0, 
        "crossOrigin": "", 
        "cropX": 0, 
        "cropY": 0, 
        "src": "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg", 
        "filters": [ ]
        }, 
        {
        "type": "image", 
        "version": "2.1.0", 
        "originX": "left", 
        "originY": "top", 
        "left": 400, 
        "top": 200, 
        "width": 200, 
        "height": 198, 
        "fill": "rgb(0,0,0)", 
        "stroke": null, 
        "strokeWidth": 0, 
        "strokeDashArray": null, 
        "strokeLineCap": "butt", 
        "strokeLineJoin": "miter", 
        "strokeMiterLimit": 10, 
        "scaleX": 1, 
        "scaleY": 1, 
        "angle": 10, 
        "flipX": false, 
        "flipY": false, 
        "opacity": 1, 
        "shadow": null, 
        "visible": true, 
        "clipTo": null, 
        "backgroundColor": "", 
        "fillRule": "nonzero", 
        "paintFirst": "fill", 
        "globalCompositeOperation": "source-over", 
        "transformMatrix": null, 
        "skewX": 0, 
        "skewY": 0, 
        "crossOrigin": "", 
        "cropX": 0, 
        "cropY": 0, 
        "src": "http://localhost:9090/static/2.jpg", 
        "filters": [ ]
        }, 
        {
        "type": "image", 
        "version": "2.1.0", 
        "originX": "left", 
        "originY": "top", 
        "left": 533, 
        "top": -62, 
        "width": 200, 
        "height": 198, 
        "fill": "rgb(0,0,0)", 
        "stroke": null, 
        "strokeWidth": 0, 
        "strokeDashArray": null, 
        "strokeLineCap": "butt", 
        "strokeLineJoin": "miter", 
        "strokeMiterLimit": 10, 
        "scaleX": 1, 
        "scaleY": 1, 
        "angle": 0, 
        "flipX": false, 
        "flipY": false, 
        "opacity": 1, 
        "shadow": null, 
        "visible": true, 
        "clipTo": null, 
        "backgroundColor": "", 
        "fillRule": "nonzero", 
        "paintFirst": "fill", 
        "globalCompositeOperation": "source-over", 
        "transformMatrix": null, 
        "skewX": 0, 
        "skewY": 0, 
        "crossOrigin": "", 
        "cropX": 0, 
        "cropY": 0, 
        "src": "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg", 
        "filters": [ ]
        }, 
        {
        "type": "image", 
        "version": "2.1.0", 
        "originX": "left", 
        "originY": "top", 
        "left": 150, 
        "top": 150, 
        "width": 200, 
        "height": 198, 
        "fill": "rgb(0,0,0)", 
        "stroke": null, 
        "strokeWidth": 0, 
        "strokeDashArray": null, 
        "strokeLineCap": "butt", 
        "strokeLineJoin": "miter", 
        "strokeMiterLimit": 10, 
        "scaleX": 1, 
        "scaleY": 1, 
        "angle": 10, 
        "flipX": false, 
        "flipY": false, 
        "opacity": 1, 
        "shadow": null, 
        "visible": true, 
        "clipTo": null, 
        "backgroundColor": "", 
        "fillRule": "nonzero", 
        "paintFirst": "fill", 
        "globalCompositeOperation": "source-over", 
        "transformMatrix": null, 
        "skewX": 0, 
        "skewY": 0, 
        "crossOrigin": "", 
        "cropX": 0, 
        "cropY": 0, 
        "src": "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg", 
        "filters": [ ]
        }, 
        {
        "type": "image", 
        "version": "2.1.0", 
        "originX": "left", 
        "originY": "top", 
        "left": 200, 
        "top": 200, 
        "width": 200, 
        "height": 198, 
        "fill": "rgb(0,0,0)", 
        "stroke": null, 
        "strokeWidth": 0, 
        "strokeDashArray": null, 
        "strokeLineCap": "butt", 
        "strokeLineJoin": "miter", 
        "strokeMiterLimit": 10, 
        "scaleX": 1, 
        "scaleY": 1, 
        "angle": 10, 
        "flipX": false, 
        "flipY": false, 
        "opacity": 1, 
        "shadow": null, 
        "visible": true, 
        "clipTo": null, 
        "backgroundColor": "", 
        "fillRule": "nonzero", 
        "paintFirst": "fill", 
        "globalCompositeOperation": "source-over", 
        "transformMatrix": null, 
        "skewX": 0, 
        "skewY": 0, 
        "crossOrigin": "", 
        "cropX": 0, 
        "cropY": 0, 
        "src": "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg", 
        "filters": [ ]
        }
        ]
        },
 
   
    };
  },
  components: { topBar, guide, singleProduct ,optionNav},
  mounted() {
    this.$store.commit("setCurrentNav", "sing");
     //绘制画布
    this.updateImg();
    //监听canvas 事件
    this.canvasDataChange();
    //初始化的canvas对象事件绑定
    setTimeout( ()=> {
        this.firstBindEvent();
    },300)
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
      if ( _self.config.undoStatus == false && _self.config.redoStatus == false) {
        var jsonData = _self.$store.state.fabricObj.canvas.toJSON();
        var canvasAsJson = JSON.stringify(jsonData);
        if (_self.config.currentStateIndex <_self.config.canvasState.length - 1) {
          var indexToBeInserted =  _self.config.currentStateIndex + 1;
          _self.config.canvasState[indexToBeInserted] = canvasAsJson;
          var numberOfElementsToRetain = indexToBeInserted + 1;
         _self.config.canvasState =_self.config.canvasState.splice(
            0, numberOfElementsToRetain);
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
        float:left;
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
}
</style>


