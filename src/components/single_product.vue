<template>
<div class="m-singp">
     <div class="wrap">
        <div class="search-box">
                <input type="text" v-model="keywords" class="search" placeholder="请输入">
                <span class="btn" @click="searchPdts">筛选</span>
        </div>
     <div class="container"> 
        <div class="waterfall" ref="getLeftBarWidth"> 
            <div class="pin" v-for="item in searchResult"  draggable="true" @dragstart="dragstart($event)" @dragend="dragend($event,item.paletteId)"> 
              <!-- <span @click="collection">收藏</span> -->
                <span class="del" @click="delCase((item.paletteId))" v-if="type=='jigsaw'"><img src="@/assets/icon/del.png" alt=""></span>
                <img :src="item.thumb" > 
                <p>1 convallis timestamp</p> 
            </div> 
        
        </div> 
        </div>
    </div>
</div>
 
</template>
<script>
	import {search} from "@/api/image"
//import Vue from "vue";
var vm = {};
import { caseBasic,del } from "@/api/case";
export default {
  props: ["list", "type"],
  data() {
    return {
      leftBar: {}, //左侧宽高
      canvasPos: {}, //canvas 宽高
      mouseImgPos: {}, // 鼠标拖拽相对图片的位置
      keywords:"",
      searchResult:null
    };
  },
  created(){
  	
  },
  mounted() {
    this.drawObj();
    vm = this;
  },
  methods: {
  	searchPdts:function(){
  		let name = this.$store.getters.images.currentClass.name;
  		search("k="+this.keywords+"&c="+((name == "" || name == undefined) ? "": name))
  		.then((res)=>{
					this.searchResult = res.data;
//					console.log(res.data)
				},(err)=>{
					
				})
  	},
    /**@augments
     * function 收藏图片到个人中心
     */
    collection() {
      console.log(1);
      // 判断是否登陆 无 跳登陆注册   添加收藏夹 或者取消收藏
    },

    dragstart(ev) {
      /*拖拽开始*/
      ev.dataTransfer.setData("url", ev.target.src);
      ev.dataTransfer.setData("id", ev.target.id);
      let url = ev.dataTransfer.getData("url");
      this.mouseImgPos = {
        x: ev.offsetX,
        y: ev.offsetY
      };
    },
    dragend(ev, paletteId) {
      /*拖拽结束*/
      let url = ev.path[0].currentSrc;
      let imgId = ev.path[0].id + new Date().getTime();
      // this.$emit('childMethod','childParam');
      //第一个参数名为调用的方法名，第二个参数为需要传递的参数
      let pos = {
        left: 10,
        top: 10,
        width: 100,
        height: 100,
        angle: 0
      };
      if (ev.clientX > this.canvasPos.x && ev.clientX < this.canvasPos.r) {
        if (this.type == "jigsaw") {
          //vm.$store.state.fabricObj.canvas.loadFromJSON(obj);
           vm.getCaseBasic(paletteId); //获取案例基础信息
          return;
        }
        vm.cover(url, ev, canvas);
      }
    },
    cover(url, ev, canvas) {
      var _this = this;
      //- _this.mouseImgPos.y
      new fabric.Image.fromURL(url, function(oImg) {
        oImg.left = ev.clientX - _this.canvasPos.x - _this.mouseImgPos.x;
        oImg.top = ev.clientY - _this.canvasPos.y - _this.mouseImgPos.y;
        oImg.scale(1);
        _this.$store.state.fabricObj.canvas.add(oImg);
        setTimeout(function() {
          _this.fabricAction.bindSeletUnSelectEvent(oImg, _this);
        }, 50);
      });
    },
    drop(ev) {
      ev.preventDefault();
    },
    drawObj() {
      this.leftBar = {
        width: this.$refs.getLeftBarWidth.offsetWidth,
        height: this.$refs.getLeftBarWidth.offsetHeight
      };
      this.canvasPos = {
        x: document.querySelector("canvas").getBoundingClientRect().left,
        y: document.querySelector("canvas").getBoundingClientRect().top,
        w: document.querySelector("canvas").getBoundingClientRect().width,
        h: document.querySelector("canvas").getBoundingClientRect().height,
        l: document.querySelector("canvas").getBoundingClientRect().left,
        t: document.querySelector("canvas").getBoundingClientRect().top,
        r: document.querySelector("canvas").getBoundingClientRect().right,
        b: document.querySelector("canvas").getBoundingClientRect().bottom
      };
    },
    getCaseBasic(paletteId) {
      var _this = this;
      caseBasic(paletteId).then(
        function(res) {
          _this.$emit('setCaseBasic',res.data);
        },
        function(err) {
        }
      );
    },
    delCase(paletteId){
        del(paletteId);
        this.$emit('refrashList');
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.m-singp {
  background: #f5f5f5;
  .wrap {
    max-width: 1440;
    padding: 48px 0;
    margin: 0 auto;
    .search-box {
      margin: 0 20px;
      overflow: hidden;
      .search {
        float: left;
        width: 70%;
        border-radius: 4px;
        border: #d9d9d9 1px solid;
        line-height: 20px;
        padding: 10px;
        float: left;
      }
      .btn {
        float: left;
        padding: 9px 16px;
        border-radius: 4px;
        background: #fff;
        border: #ccc 1px solid;
        margin-left: 10px;
        cursor:pointer
      }
    }
    .container {
      max-width: 1440px;
      margin: 20px auto;
      .waterfall {
        column-count: 3;
        column-width: 4em;
        column-gap: 1em;
        .pin {
          position: relative;
          .del {
            position: absolute;
            right:10px;
            bottom:10px;
            width:20px;
            cursor: pointer;
            display: inline-block;
            img {
              width:100%;
            }
          }
          padding: 1em;
          margin: 0 0.125em 1em;
          -moz-page-break-inside: avoid;
          -webkit-column-break-inside: avoid;
          break-inside: avoid;
          background: white;
          -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
            0 1px 2px 0 rgba(0, 0, 0, 0.24);
          -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
            0 1px 2px 0 rgba(0, 0, 0, 0.24);
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
            0 1px 2px 0 rgba(0, 0, 0, 0.24);
          img {
            width: 100%;
            padding-bottom: 1em;
            margin-bottom: 0.5em;
            border-bottom: 1px solid #cccccc;
          }
          span {
            position: absolute;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>


