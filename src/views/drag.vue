<template>
  <div class="contain">
    <div class="leftBar">
      <img :src="imgInstance[0].pic" draggable="true" id="dragImg" @dragstart="dragstart($event)" @dragend="dragend($event)" />
    </div>
    <!-- <div class="rigth-canvas"> -->
    
      <canvas class="canvas"  width="600" id="canvas"  height="600" @drop="drop($event)" @dragover="dragover($event)" ></canvas>
    <!-- </div> -->
  </div>
  
</template>
<style scoped>
.contain{
  display: flex;
}
.leftBar{
  width: 400px;
  height: 600px;
  /* background:#ccc; */
  border:1px solid red;
}
.canvas{
    border: 1px solid red;
}
</style>
<script>

export default {
  data() {
    return {
      imgInstance: [
        {
          key: "img1",
          pic: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
          position: { left: 100, top: 100, width: 200, height: 198, angle: 10 }
        }
      ],
      canvas:null
    };
  },
  mounted() {
    //绘制画布
          
    
  },
  created() {
      this.updateImg();
  },
  methods: {
    updateImg(){
      // this.canvas = new fabric.Canvas('canvas');
    },
    dragstart(ev){
      /*拖拽开始*/
      // console.log('鼠标拖拽点在图片的位置');
      ev.dataTransfer.setData("url",ev.target.src);
      // let url = ev.dataTransfer.getData("url");
    },
    dragend(ev){
      /*拖拽结束*/
      console.log('我放下图片了');
      let url = ev.path[0].currentSrc;
      // let url = ev.dataTransfer.getData("url");
      // console.log(ev.offsetX);
      let canvas = this.canvas;
      // var canvas = new fabric.Canvas('canvas');
      if(ev.offsetX > 300){
        this.cover(url,ev, canvas);
      }
    },
    cover(url,ev, canvas){
      // var canvas = new fabric.Canvas('canvas');
      // let _self = this;
      // var  canvas = this.canvas;
      console.log(canvas)
      new fabric.Image.fromURL(url, function(oImg){
            oImg.left = 10;
            oImg.top = 10;
            oImg.scale(1);
            canvas.add(oImg);
        })
        
    },
    drop(ev){
      // console.log('拖拽元素进入目标元素头上，同时鼠标松开的时候');
      ev.preventDefault();
    },
    dragover(ev){
      // console.log('拖拽元素在目标元素头上移动的时候');
      ev.preventDefault();
    }
  }
};
</script>
