<template>
  <div class="m-lfbar">
    <div class="leftBar">
      <img :src="imgInstance[0].pic" draggable="true" id="dragImg" @dragstart="dragstart($event)" @dragend="dragend($event)" />
    </div>
    <!-- <div class="rigth-canvas">
      <canvas class="canvas"  width="600" id="canvas"  height="600" @drop="drop($event)" ></canvas>
    </div> -->
  </div>
</template>

<style scoped>
.contain{
  display: flex;
}
.m-lfbar {
 height: 1000px;
 border:#eee 1px solid;
 padding:10px;
}
.leftBar{
  width: 200px;
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
  props: ['canvas', 'imgInstanceNew'],
  data() {
    return {
      imgInstance: [
        {
          key: "img1",
          pic: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
          position: { left: 100, top: 100, width: 200, height: 198, angle: 10 }
        }
      ],
      
    };
  },
  mounted() {
    //绘制画布
         console.log(this.imgInstanceNew)
    
  },
  created() {
  },
  methods: { 
    dragstart(ev){
      /*拖拽开始*/
      console.log('鼠标拖拽点在图片的位置');
      ev.dataTransfer.setData("url",ev.target.src);
      ev.dataTransfer.setData("id",ev.target.id);
      let url = ev.dataTransfer.getData("url");
    },
    dragend(ev){
      /*拖拽结束*/
     
      let url = ev.path[0].currentSrc;
      let imgId = ev.path[0].id + new Date().getTime();
      // this.$emit('childMethod','childParam'); 
      //第一个参数名为调用的方法名，第二个参数为需要传递的参数
      let pos = {
        left:10,
        top:10,
        width: 100,
        height: 100,
        angle: 0
      }
      let  canvas = this.canvas;
      if(ev.offsetX > 300){
        // this.$emit('newImage', imgId, pos);
        this.imgInstanceNew.push({
          key:imgId,
          pic:url,
          position: pos
        })
        var imgObj = this.cover(url, ev, canvas);
        setTimeout(()=>{
            this.fabricAction.bindSeletUnSelectEvent(imgObj, this);
        },50)
      
       
        
      }
    },
    cover(url, ev, canvas){
       return new fabric.Image.fromURL(url, function(oImg){
            oImg.left = 10;
            oImg.top = 10;
            oImg.scale(1);
            canvas.add(oImg);
        })
        
    },
    drop(ev){
      // ev.preventDefault();
    }
  }
};
</script>

