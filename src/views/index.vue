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
                    <img src="@/assets/icon/filter.png" @click="showFilters">
                    <div class="filter-list-c" v-show="showFilterList">
                    		亮度<input type="range" max="1" min="-1" @input="changeBright" step="0.01"   v-model="lightnum"  />
						          	<span>{{lightnum}}</span><br />
						          	对比度<input type="range" max="1" min="-1" @input="changeContrast" step="0.01"   v-model="contrastnum"  />
						          	<span>{{contrastnum}}</span><br />
						          	饱和度<input type="range" max="1" min="-1" @input="changeSaturationnum" step="0.01"   v-model="saturationnum"  />
						          	<span>{{saturationnum}}</span><br />
						          	清晰度<input type="range" max="1" min="0" @input="changeBlurnum" step="0.01"   v-model="blurnum"  />
						          	<span>{{blurnum}}</span><br />
						          	透明度<input type="range" max="100" min="0" @input="changeOpacity" step="0.01"   v-model="opacitynum"  />
						          	<span>{{opacitynum}}</span><br />
                    </div>	
                </span>
                <span id="cut" class="optionElem" @click="cut()">
                    <img src="@/assets/icon/cut.png">
                </span>
                <span id="copy" class="optionElem" @click="clone()">
                    <img src="@/assets/icon/copy.png">
                </span>
                <span id="lock" class="optionElem">
                    <img src="@/assets/icon/lockOpen.png">
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
  position: relative;
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
.filter-list-c{
	width:300px;
	height:200px;
	position: absolute;
	background: #fff;
	top:30px;
	border:1px solid #ccc;
	z-index: 999;
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
      showFilterList:false,
      lightnum:0,
      contrastnum:0,
      saturationnum:0,
      blurnum:0,
      colornum:0,
      opacitynum:0,
      filter:fabric.Image.filters,
      imgInstance: [
        {
          key: "img1",
          pic: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
          position: { left: 100, top: 100, width: 200, height: 198, angle: 10 }
        },
        {
          key: "img2",
          pic: "../../static/2.jpg",
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
      this.canvas = this.createCanvas("canvas");

      //初始化可编辑图片
      this.imgInstance.forEach(function(k, i) {
        _this.imgInstanceObj["instance" + k.key] = _this.createFabricObj(
          k.key,
          k.position
        );
        setTimeout(function() {
          _this.canvas.add(_this.imgInstanceObj["instance" + k.key]);
          _this.bindSeletUnSelectEvent(
            _this.imgInstanceObj["instance" + k.key]
          );
        }, 100);
      });
    },
    createFabricObj(imgId, pos) {
      var dom = document.getElementById(imgId);
      return new fabric.Image(dom, {
        //设置图片在canvas中的位置和样子
        left: pos.left,
        top: pos.top,
        width: pos.width,
        height: pos.height,
        angle: pos.angle
      });
    },
    createCanvas(canvasId) {
      return new fabric.Canvas(canvasId); //声明画布
    },
    Copy() {
      var _this = this;
      this.canvas.getActiveObject().clone(function(cloned) {
        _this._clipboard = cloned;
      });
    },
    Paste() {
      var _this = this;
      // clone again, so you can do multiple copies.
      this._clipboard.clone(function(clonedObj) {
        _this.canvas.discardActiveObject();
        clonedObj.set({
          left: clonedObj.left + 50,
          top: clonedObj.top + 50,
          evented: true
        });
        if (clonedObj.type === "activeSelection") {
          // active selection needs a reference to the canvas.
          clonedObj.canvas = this.canvas;
          clonedObj.forEachObject(function(obj) {
            this.canvas.add(obj);
          });
          // this should solve the unselectability
          clonedObj.setCoords();
        } else {
          _this.canvas.add(clonedObj);
        }
        _this._clipboard.top += 30;
        _this._clipboard.left += 30;
        _this.canvas.setActiveObject(clonedObj);
        _this.canvas.requestRenderAll();
        _this.bindSeletUnSelectEvent(clonedObj);
        _this.optionSelect = true;
      });
    },
    clone() {
      var _this = this;
      var timestamp = Date.parse(new Date());
      _this.Copy();
      setTimeout(function() {
        _this.Paste();
        return;
      }, 5);
    },
    del() {
      var el = this.canvas.getActiveObject();
      this.canvas.remove(el);
    },
    bindSeletUnSelectEvent(imgObj) {
      var _this = this;
      imgObj
        .on("selected", function(options) {
          // option.style.display = "block";
          _this.optionSelect = true;
        })
        .on("deselected", function(options) {
          // option.style.display = "none";
          _this.optionSelect = false;
        });
    },
    startCrop() {
      var _this = this;
      this.canvas.remove(this.cutRect.el);
      if (this.canvas.getActiveObject()) {
        this.cutRect.object = this.canvas.getActiveObject();

        if (this.cutRect.lastActive !== this.cutRect.object) {
          console.log("different object");
        } else {
          console.log("same object");
        }
        if (
          this.cutRect.lastActive &&
          this.cutRect.lastActive !== this.cutRect.object
        ) {
          this.cutRect.lastActive.clipTo = null;
        }

        this.cutRect.el = new fabric.Rect({
          fill: "rgba(0,0,0,0.3)",
          originX: "left",
          originY: "top",
          stroke: "#ccc",
          strokeDashArray: [2, 2],
          opacity: 1,
          width: 1,
          height: 1,
          borderColor: "#36fd00",
          cornerColor: "green",
          hasRotatingPoint: false
        });
        this.cutRect.el.left = this.canvas.getActiveObject().left;
        this.cutRect.selection_object_left = this.canvas.getActiveObject().left;
        this.cutRect.selection_object_top = this.canvas.getActiveObject().top;
        this.cutRect.el.top = this.canvas.getActiveObject().top;
        this.cutRect.el.width =
          this.canvas.getActiveObject().width *
          this.canvas.getActiveObject().scaleX;
        this.cutRect.el.height =
          this.canvas.getActiveObject().height *
          this.canvas.getActiveObject().scaleY;
        this.canvas.add(this.cutRect.el);
        this.canvas.setActiveObject(this.cutRect.el);

        var layer = document.getElementById("#layers");
        // for (var i = 0; i < $("#layers li").size(); i++) {
        //   this.canvas.item(i).selectable = false;
        // }
      } else {
        alert("Please select an object or layer");
      }
    },
    crop() {
      var _this=this;
      var left = this.cutRect.el.left - this.cutRect.object.left;
      var top = this.cutRect.el.top - this.cutRect.object.top;
      left *= 1;
      top *= 1;
      var width = this.cutRect.el.width * 1;
      var height = this.cutRect.el.height * 1;
      this.cutRect.object.clipTo = function(ctx) {
        ctx.rect(
          -(_this.cutRect.el.width / 2) + left,
          -(_this.cutRect.el.height / 2) + top,
          parseInt(width * _this.cutRect.el.scaleX),
          parseInt(_this.cutRect.el.scaleY * height)
        );
      };
      // for (var i = 0; i < $("#layers li").size(); i++) {
      //   this.canvas.item(i).selectable = true;
      // }
      // disabled = true;

      this.canvas.remove(this.canvas.getActiveObject());
      this.cutRect.lastActive = this.cutRect.object;
      this.canvas.renderAll();
    },
    cut() {
      this.optionSelect = false;
      this.cutSelect = true;
      this.startCrop();
    },
    cutCancle() {
      this.canvas.remove(this.cutRect.el);
    },
    cutSure() {
      this.optionSelect = true;
      this.cutSelect = false;
      this.crop();
    },
    showFilters:function(){
    	if(this.showFilterList){
    		this.showFilterList = false;
    	}else{
    		this.showFilterList = true;
    	}
    },
    getObject:function(){
    		var obj = this.canvas.getActiveObject();
    		return obj;
    	},
    	changeOpacity:function(){
    		var obj = this.getObject();
    		obj.opacity = parseFloat(1-this.opacitynum/100)
    		this.canvas.renderAll();
    	},
    	changeBlurnum:function(){
    		var obj = this.getObject();
    		obj.filters[3] = new this.filter.Blur({
					blur: parseFloat(this.blurnum)
				})
    		obj.applyFilters();
    		this.canvas.renderAll();
    	},
    	changeSaturationnum:function(){
    		var obj = this.getObject();
    		obj.filters[2] = new this.filter.Saturation({
					saturation: parseFloat(this.saturationnum)
				})
    		obj.applyFilters();
    		this.canvas.renderAll();
    	},
    	changeContrast:function(){
    		var obj = this.getObject();
    		obj.filters[1] = new this.filter.Contrast({
					contrast: parseFloat(this.contrastnum)
				})
    		obj.applyFilters();
    		this.canvas.renderAll();
    	},
    	changeBright:function(){
    		var obj = this.getObject();
    		obj.filters[0] = new this.filter.Brightness({
					brightness: parseFloat(this.lightnum)
				})
    		obj.applyFilters();
    		this.canvas.renderAll();
			},
			applyFilterValue:function(index, prop, value) {
		    var obj = this.canvas.getActiveObject();
		    if (obj.filters[index]) {
		      obj.filters[index][prop] = value;
		      obj.applyFilters();
		      this.canvas.renderAll();
		    }
		 	},
		 	applyFilter:function(index, filter) {
				var obj = canvas.getActiveObject();
				obj.filters[index] = filter;
				obj.applyFilters();
				canvas.renderAll();
			}
  }
};
</script>
