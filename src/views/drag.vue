<template>
<div>
  <header>
    <button class="btn" @click="copy">复制</button>
    <button class="btn" @click="clip">裁剪</button>
    <button class="btn" @click="del">删除</button>
    <button class="btn" @click="toJson">toJSON</button>
    <button class="btn" @click="toSVG">toSVG</button>
    <button class="btn" @click="toSVGLocal">SVG保存到本地</button>
    <button class="btn" type="button" ref="reback" id="reback" disabled @click="clearCanvasAndLoadCanvas">回退历史</button>
    <!-- <button class="btn" type="button" id="redo" disabled >撤销</button> -->

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
      mouseImgPos:{}, // 鼠标拖拽相对图片的位置
      dataCanvasJson:[],
      rebackNum: 0
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
          this.canvasDataChange();
          
  },
  created() {
  },
  methods: {
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
//     var canvas = new fabric.Canvas('canvas');
// canvas.loadFromJSON(）
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
    },
    //存储到 localStorage
    getDataToLoacl(data){
      // localStorage.setItem('data', data);
      this.dataCanvasJson.push(data);
      this.rebackNum +=1;
      this.$refs.reback.disabled=false;
      console.log('操作步骤'+this.rebackNum);
      console.log('数组长度'+this.dataCanvasJson.length);
    },
    //清除画布 在加载 loacl数据
    clearCanvasAndLoadCanvas(){
      let _self = this;
      // if(this.dataCanvasJson.length == 0){
      //   this.canvas.clear();
      //   this.rebackNum == 0;
      //   this.$refs.reback.disabled=true;
      // }
      // if(this.dataCanvasJson.length >0){
      //   this.$refs.reback.disabled=false;
      //   this.dataCanvasJson.pop();
      //   console.log(this.dataCanvasJson.length);
      //   this.canvas.loadFromJSON(this.dataCanvasJson[this.dataCanvasJson.length -1]);
      // } 
      console.log('操作步骤长度'+this.rebackNum);
      if(this.rebackNum == 0){
        this.canvas.clear();
        this.rebackNum == 0;
        this.$refs.reback.disabled=true;
      }
      if(this.rebackNum >0){
        this.$refs.reback.disabled=false;
        this.canvas.clear();
        this.rebackNum -=1 ;
        this.canvas.loadFromJSON(this.dataCanvasJson[this.rebackNum]);
      }     
    },
    canvasDataChange(){
      let _self = this;
      this.canvas.on('object:modified', function(){
          _self.getDataToLoacl(JSON.stringify(_self.canvas.toJSON()))
      });
      this.canvas.on('object:added', function(){
          _self.getDataToLoacl(JSON.stringify(_self.canvas.toJSON()))
      });
      this.canvas.on('object:removed', function(){
          _self.getDataToLoacl(JSON.stringify(_self.canvas.toJSON()))
      });
      this.canvas.on('object:rotating', function(){
          _self.getDataToLoacl(JSON.stringify(_self.canvas.toJSON()))
      });
    },
  }
};
</script>
