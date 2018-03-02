<template>
  <div class="pageIndex">
     <m-head></m-head>
    <div class="container">
      <div class="leftBar">
        <m-lfbar></m-lfbar>
      </div>
      <div class="wrap">
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
