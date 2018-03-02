<template>
  <div class="pageIndex">
     <m-head></m-head>
    <div class="container">
      <div class="leftBar">
        <m-lfbar></m-lfbar>
      </div>
      <div class="wrap">
            <div class="bar-nav">
                <div class="optin-box">
                    <span id="filter" class="optionElem">
                    <img src="@/assets/icon/filter.png">
                </span>
                <span id="cut" class="optionElem">
                    <img src="@/assets/icon/cut.png">
                </span>
                <span id="copy" class="optionElem">
                    <img src="@/assets/icon/copy.png">
                </span>
                <span id="lock" class="optionElem">
                    <img src="@/assets/icon/lockOpen.png">
                </span>
                <span id="del" class="optionElem">
                    <img src="@/assets/icon/del.png">
                </span>
                </div>
                <div class="cutOptin" id="cutOptin">
                <span id="cancle" class="optionElem">
                    <img src="@/assets/icon/cancle.png">
                </span>
                <span id="sure" class="optionElem">
                    <img src="@/assets/icon/sure.png">
                </span>
                </div>
            </div>
           <canvas id="canvas" width='761' height='589'></canvas>
            <img src="@/assets/pro/pic1.jpeg" id="img1" class="img1">
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
.img1 {
  display: none;
}
.wrap {
  float: left;
  width: 1000px;
  margin-left: 20px;
  border: #eee 1px solid;
  height: 1000px;
}
.bar-nav {
    /* display: none; */
    background: #eee;
    padding:10px;
    
    
}
.optin-box  span {
    display: inline-block;
    width:25px;
    margin-right:20px;
    cursor: pointer;
}
.optin-box  span:first-child{
    margin-left:50px;
}
.optin-box  span img ,.cutOptin span img {
    display: inline-block;
    float:left;
    width:100%;
}
.cutOptin{
  display: none;
}
.cutOptin span  {
    display: inline-block;
    width:25px;
    margin-right:20px;
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
      imgInstance1: ""
    };
  },
  mounted() {
    this.canvas = this.createCanvas("canvas");
    this.imgInstance1 = this.createFabricObj("img1");
    setTimeout(() => {
      this.canvas.add(this.imgInstance1);
    }, 50);
  },
  created() {},
  methods: {
    createFabricObj(imgId) {
      var dom = document.getElementById(imgId);
      return new fabric.Image(dom, {
        //设置图片在canvas中的位置和样子
        left: 100,
        top: 100,
        width: 200,
        height: 198,
        angle: 10
      });
    },
    createCanvas(canvasId) {
      return new fabric.Canvas(canvasId); //声明画布
    }
  }
};
</script>
