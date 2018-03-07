<template>
<div>
  <header>
    <button class="btn" @click="copy">复制</button>
  </header>
  <div class="contain">
    <div class="leftBar" ref="getLeftBarWidth">
      <img :src="imgInstance[0].pic" draggable="true" id="dragImg" @dragstart="dragstart($event)" @dragend="dragend($event)" />
    </div>   
      <canvas ref="canvas" class="canvas"  width="600" id="canvas"  height="400" @drop="drop($event)" @dragover="dragover($event)" ></canvas>
  </div>
  </div>
  
</template>
<style scoped>
.contain{
  display: flex;
}
.btn{
  line-height: 30px;
  min-width: 60px;
}
.leftBar{
  width: 400px;
  height: 400px;
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
      canvas:"",
      leftBar:{},  //左侧宽高
      canvasPos:{}, //canvas 宽高
      mouseImgPos:{} // 鼠标拖拽相对图片的位置
    };
  },
  mounted() {
    //绘制画布
          this.canvas = new fabric.Canvas('canvas');
          this.leftBar={
            width:this.$refs.getLeftBarWidth.offsetWidth,
            height:this.$refs.getLeftBarWidth.offsetHeight
          };
          this.canvasPos={
            width:this.$refs.canvas.offsetWidth,
            height:this.$refs.canvas.offsetHeight
          };
          
  },
  created() {
      this.updateImg();
  },
  methods: {
    updateImg(){
    },
    dragstart(ev){
      /*拖拽开始*/
      ev.dataTransfer.setData("url",ev.target.src);
      this.mouseImgPos={
        x: ev.offsetX,
        y: ev.offsetY
      }
    },
    dragend(ev){
      /*拖拽结束*/
      console.log('我放下图片了');
      let url = ev.path[0].currentSrc;
      // let url = ev.dataTransfer.getData("url");
      let  canvas = this.canvas;
      console.log(ev.offsetX);
      if(ev.offsetX > this.leftBar.width && ev.offsetX < (this.leftBar.width+this.canvasPos.width)){
        this.cover(url,ev, canvas);
      }
    },
    cover(url,ev, canvas){
      // var canvas = new fabric.Canvas('canvas');
      let _self = this;
      return new fabric.Image.fromURL(url, function(oImg){
          oImg.left = ev.offsetX -  _self.leftBar.width - _self.mouseImgPos.x ;
          oImg.top = ev.offsetY - _self.mouseImgPos.y;
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
    },
    paste(_clipboard){
        // clone again, so you can do multiple copies.
        let canvas = this.canvas;
        _clipboard.clone(function(clonedObj) {
            canvas.discardActiveObject();
            clonedObj.set({
                left: clonedObj.left + 20,
                top: clonedObj.top + 20,
                evented: true,
            });
            if (clonedObj.type === 'activeSelection') {
                // active selection needs a reference to the canvas.
                clonedObj.canvas = canvas;
                clonedObj.forEachObject(function(obj) {
                    canvas.add(obj);
                });
                // this should solve the unselectability
                clonedObj.setCoords();
            } else {
                canvas.add(clonedObj);
            }
            _clipboard.top += 10;
            _clipboard.left += 10;
            canvas.setActiveObject(clonedObj);
            // canvas.requestRenderAll();
        });
    }, 
    copy(){
       let canvas = this.canvas;
       var _self = this;
        canvas.getActiveObject().clone(function(cloned){
            // let _clipboard = cloned;
              _self.paste(cloned);
            
        })
    },
  }
};
</script>
