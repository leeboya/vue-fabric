<template>
<div>
  <header>
    <button class="btn" @click="copy">复制</button>
    <button class="btn" @click="clip">裁剪</button>
    <button class="btn" @click="del">删除</button>
    <button class="btn" @click="toJson">toJSON</button>
    <button class="btn" @click="toSVG">toSVG</button>
    <button class="btn" @click="toSVGLocal">SVG保存到本地</button>

  </header>
  <div class="contain">
    <div class="leftBar" ref="getLeftBarWidth">
      <div class="imgBox" ref="imgBox">
        <span class="floatText" ref="floatText" @click="imgToCanvas($event)">到画布</span>
        <img :src="imgInstance[0].pic" draggable="true"   @dragstart="dragstart($event)" @dragend="dragend($event)" />
      </div>
      
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
.imgBox{
  position: relative;
  width:200px;
  height: 198px;
}
.floatText{
  position: absolute;
  right: 0;
  display: none;
   /* opacity: 0; */
   cursor: pointer;
  background: deeppink;
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
    let _self = this;
          this.canvas = new fabric.Canvas('canvas');
          this.leftBar={
            width:this.$refs.getLeftBarWidth.offsetWidth,
            height:this.$refs.getLeftBarWidth.offsetHeight
          };
          this.canvasPos={
            width:this.$refs.canvas.offsetWidth,
            height:this.$refs.canvas.offsetHeight
          };
          this.$refs.imgBox.onmouseover = function(e){
            e.preventDefault()
            _self.$refs.floatText.style.display = 'block';
            // _self.$refs.floatText.style.opacity = '1';
          }
          this.$refs.imgBox.onmouseout = function(e){
            e.preventDefault()
            _self.$refs.floatText.style.display = 'none';
            // _self.$refs.floatText.style.opacity = '0';
          }

          /**@augments
           * mouse:down :鼠标按下时
                  mouse:move :鼠标移动时
                  mouse:up :鼠标抬起时
                  after:render :画布重绘后
                  object:selected:对象被选中
                  object:moving:对象移动
                  object:rotating:对象被旋转
                  object:added:对象被加入
                  object:removed对象被移除
                  fabric 组合
                  var group = new fabric.Group([要组合的对象, 要组合的对象], {
                      组合对象的公用属性
                  })
                  canvas.add(group);
                  组合对象的单个对象修改
                  group.item(0).set({
                    属性修改
                  })
           */
          this.canvas.on('mouse:down', function(options) {
            
              console.log(options.e.clientX, options.e.clientY)
          })
          
  },
  created() {
  },
  methods: {
    getCanvasImg(){
      if(this.canvas.getActiveObject()){
        this.canvas.on('mouse:down', function(options) {
          console.log(options.e.clientX, options.e.clientY)
        })
      }
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
      let url = ev.path[0].currentSrc;
      let  canvas = this.canvas;
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
            _clipboard.top += 20;
            _clipboard.left += 20;
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
    clip(){
     },
    del() {
      var el = this.canvas.getActiveObject();
      this.canvas.remove(el);
    },
    toJson(){
      alert(JSON.stringify(this.canvas.toJSON()));
      console.log(JSON.stringify(this.canvas.toJSON()));
    },
    toSVG(){
      alert(this.canvas.toSVG());
    },
    //把JSON字符串恢复到Canvas上，loadFromJSON()：
    toSVGLocal(){
      let fso;
        try { 
          fso=new ActiveXObject("Scripting.FileSystemObject"); 

        } catch (e) { 
          alert("当前浏览器不支持");
          return;
        } 
        alert("方法已执行2");
        var f1 = fso.createtextfile("D:\\1.svg", true);
        f1.write(this.canvas.toSVG());  
        f1.close();
    },
    imgToCanvas(e){
      // console.log(e.nextElementSibling)
      console.log(this.$refs)
    }
  }
};
</script>
