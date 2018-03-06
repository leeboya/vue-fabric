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
.filter-list-c {
  position: absolute;
  background: #fff;
  top: 20px;
  right:10px;
  border: 1px solid #eee;
  z-index: 999;
  padding:20px 20px 30px 20px;
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
      },
      lock(){
        this.fabricAction.lockOption(this);
      }

  }
};
</script>
