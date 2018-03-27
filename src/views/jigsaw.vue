<template>
  <div class="p-index">
      <div class="product-list" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
            <top-bar></top-bar>
            <single-product :list="productList" :type="listType"></single-product>
      </div>
      <div class="jigsaw" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
           
              <div class="cut-optin" id="cutOptin" :class=" $store.state.fabricObj.cutSelect ? 'select' : '' "> 
                <span id="cancle" class="optionElem" @click="cutCancle()"> <img src="@/assets/icon/cancle.png" /> </span> 
                <span id="sure" class="optionElem" @click="cutSure()"> <img src="@/assets/icon/sure.png" /> </span> 
              </div> 
              </div>
            <div class="black-board">
              <option-nav></option-nav>
              <canvas id="canvas" width='761' height='589'></canvas>
            </div>
        </div>
  </div>
</template>
<script>
import topBar from "@/components/top_bar";
import guide from "@/components/guide";
import singleProduct from "@/components/single_product";
import optionNav from "@/components/option_nav";
export default {
  components: { topBar, guide, singleProduct ,optionNav},
  data() {
    return {
      listType: "jigsaw",
      imgInstanceObj: {}, //图片剪辑对象
      showFilterList: false,
      lightnum: 0,
      contrastnum: 0,
      saturationnum: 0,
      blurnum: 0,
      colornum: 0,
      opacitynum: 0,
      filter: fabric.Image.filters,
      cutRect: {
        el: "",
        object: "",
        lastActive: "",
        object1: "",
        object2: "",
        cntObj: "",
        selection_object_left: "",
        selection_object_top: ""
      },
      config: {
        canvasState: [],
        currentStateIndex: -1,
        redoStatus: false, //撤销状态
        undoStatus: false, // 重做状态
        undoFinishedStatus: 1,
        redoFinishedStatus: 1,
        undoButton: this.$refs.undo,
        redoButton: this.$refs.redo
      },
      productList: [
        {
          pic:
            "http://m3.cdn.imeijian.cn/302628909d744bdfdb3dd7c29f6009a0.jpeg?x-oss-process=style/500w",
          obj: {
            objects: [
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 100,
                top: 100,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 400,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://localhost:9090/static/2.jpg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 533,
                top: -62,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 0,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 150,
                top: 150,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 200,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              }
            ]
          }
        },
        {
          pic:
            "http://m3.cdn.imeijian.cn/db44e836f1dec0dc6b4bc2b3f9a17734.jpeg?x-oss-process=style/500w",
          obj: {
            objects: [
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 100,
                top: 100,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 400,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://localhost:9090/static/2.jpg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 533,
                top: -62,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 0,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 150,
                top: 150,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 200,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              }
            ]
          }
        },
        {
          pic:
            "http://m3.cdn.imeijian.cn/843730cd2dc2889f79efc518cb4ce10b.jpeg?x-oss-process=style/500w",
          obj: {
            objects: [
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 100,
                top: 100,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 400,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://localhost:9090/static/2.jpg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 533,
                top: -62,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 0,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 150,
                top: 150,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 200,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              }
            ]
          }
        },
        {
          pic:
            "http://m3.cdn.imeijian.cn/1d32ad87470dc6af95f45fe1aad76e0e.jpeg?x-oss-process=style/500w",
          obj: {
            objects: [
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 100,
                top: 100,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 400,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://localhost:9090/static/2.jpg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 533,
                top: -62,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 0,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 150,
                top: 150,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 200,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              }
            ]
          }
        },
        {
          pic:
            "http://m3.cdn.imeijian.cn/4484b80b6a07854578b78fa86949eff1.jpeg?x-oss-process=style/500w",
          obj: {
            objects: [
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 100,
                top: 100,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 400,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://localhost:9090/static/2.jpg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 533,
                top: -62,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 0,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 150,
                top: 150,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 200,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              }
            ]
          }
        },
        {
          pic:
            "http://m3.cdn.imeijian.cn/7807c916d171faecf503fe20ba07e6f6.jpeg?x-oss-process=style/500w",
          obj: {
            objects: [
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 100,
                top: 100,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 400,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://localhost:9090/static/2.jpg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 533,
                top: -62,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 0,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 150,
                top: 150,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 200,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              }
            ]
          }
        },
        {
          pic:
            "http://m3.cdn.imeijian.cn/302628909d744bdfdb3dd7c29f6009a0.jpeg?x-oss-process=style/500w",
          obj: {
            objects: [
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 100,
                top: 100,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 400,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://localhost:9090/static/2.jpg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 533,
                top: -62,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 0,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 150,
                top: 150,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 200,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              }
            ]
          }
        },
        {
          pic:
            "http://m3.cdn.imeijian.cn/db44e836f1dec0dc6b4bc2b3f9a17734.jpeg?x-oss-process=style/500w",
          obj: {
            objects: [
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 100,
                top: 100,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 400,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://localhost:9090/static/2.jpg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 533,
                top: -62,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 0,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 150,
                top: 150,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 200,
                top: 200,
                width: 200,
                height: 198,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                strokeMiterLimit: 10,
                scaleX: 1,
                scaleY: 1,
                angle: 10,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                clipTo: null,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                transformMatrix: null,
                skewX: 0,
                skewY: 0,
                crossOrigin: "",
                cropX: 0,
                cropY: 0,
                src: "http://ovfllimsi.bkt.clouddn.com/fabricPic1.jpeg",
                filters: []
              }
            ]
          }
        }
      ]
    };
  },
  mounted() {
    this.$store.commit("setCurrentNav", "jigsaw");
    //绘制画布
    this.updateImg();
    //监听canvas 事件
    this.canvasDataChange();
    //初始化的canvas对象事件绑定
    setTimeout(() => {
      this.firstBindEvent();
    }, 300);
  },

  methods: {
    updateImg() {
      this.$store.commit("setCanvas", this.fabricAction.createCanvas("canvas"));
      // this.$store.state.fabricObj.canvas.loadFromJSON(this.canvasObj);
    },
    firstBindEvent() {
      var _this = this;
      _this.$store.state.fabricObj.canvas.getObjects().forEach(function(k, i) {
        _this.fabricAction.bindSeletUnSelectEvent(k, _this);
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
      var el = this.$store.state.fabricObj.canvas.getActiveObject();
      this.$store.state.fabricObj.canvas.remove(el);
    },

    cut() {
      this.$store.commit("setOptionSelect", false);
      this.$store.commit("setCutSelect", true);
      this.fabricAction.startCrop(this);
    },
    group() {
      this.fabricAction.fabricObjGroup(this);
    },
    ungroup() {
      this.fabricAction.fabricObjUnGroup(this);
    },
    cutCancle() {
      this.$store.state.fabricObj.canvas.remove(this.cutRect.el);
    },
    cutSure() {
      this.$store.commit("setOptionSelect", true);
      this.$store.commit("setCutSelect", false);
      this.fabricAction.crop(this);
    },
    showFilters: function() {
      if (this.showFilterList) {
        this.showFilterList = false;
        return;
      }
      this.showFilterList = true;
    },
    getObject: function() {
      return this.$store.state.fabricObj.canvas.getActiveObject();
    },
    changeOpacity: function() {
      var obj = this.getObject();
      obj.opacity = parseFloat(1 - this.opacitynum / 100);
      this.$store.state.fabricObj.canvas.renderAll();
    },
    changeBlurnum: function() {
      var obj = this.getObject();
      obj.filters[3] = new this.filter.Blur({
        blur: parseFloat(this.blurnum)
      });
      obj.applyFilters();
      this.$store.state.fabricObj.canvas.renderAll();
    },
    changeSaturationnum: function() {
      var obj = this.getObject();
      obj.filters[2] = new this.filter.Saturation({
        saturation: parseFloat(this.saturationnum)
      });
      obj.applyFilters();
      this.$store.state.fabricObj.canvas.renderAll();
    },
    changeContrast: function() {
      var obj = this.getObject();
      obj.filters[1] = new this.filter.Contrast({
        contrast: parseFloat(this.contrastnum)
      });
      obj.applyFilters();
      this.$store.state.fabricObj.canvas.renderAll();
    },
    changeBright: function() {
      var obj = this.getObject();
      obj.filters[0] = new this.filter.Brightness({
        brightness: parseFloat(this.lightnum)
      });
      obj.applyFilters();
      this.$store.state.fabricObj.canvas.renderAll();
    },
    applyFilterValue: function(index, prop, value) {
      var obj = this.canvas.getActiveObject();
      if (obj.filters[index]) {
        obj.filters[index][prop] = value;
        obj.applyFilters();
        this.$store.state.fabricObj.canvas.renderAll();
      }
    },
    applyFilter: function(index, filter) {
      var obj = canvas.getActiveObject();
      obj.filters[index] = filter;
      obj.applyFilters();
      canvas.renderAll();
    },
    lock() {
      this.fabricAction.lockOption(this);
    },
    showHideForWard() {
      this.$store.commit(
        "setForwordBox",
        !this.$store.state.fabricObj.forWrodBoxShow
      );
    },
    changeForWord(style) {
      this.fabricAction.fabricForward(this, style);
    },
    /**@augments
     * anthor lifq
     * @param
     * @return
     */
    clip() {
      this.fabricAction.clip(this);
    },
    hide() {
      this.fabricAction.hide(this);
    },
    display() {
      this.fabricAction.display(this);
    },
    // canvas操作事件监听
    canvasDataChange() {
      // this.fabricAction.canvasDataChange(this)
      let _self = this;
      this.$store.state.fabricObj.canvas.on("object:modified", function() {
        _self.updateCanvasState();
      });
      // this.$store.state.fabricObj.canvas.on('object:moving', function(){
      //     _self.updateCanvasState();
      // });
      this.$store.state.fabricObj.canvas.on("object:added", function() {
        _self.updateCanvasState();
      });
      this.$store.state.fabricObj.canvas.on("object:removed", function() {
        _self.updateCanvasState();
      });
      this.$store.state.fabricObj.canvas.on("object:rotating", function() {
        _self.updateCanvasState();
      });
    },
    // 历史记录
    undo() {
      // this.fabricAction.undo(this)
      let _self = this;
      if (this.config.undoFinishedStatus) {
        if (this.config.currentStateIndex == -1) {
          this.config.undoStatus = false;
        } else {
          if (this.config.canvasState.length >= 1) {
            this.config.undoFinishedStatus = 0;
            if (this.config.currentStateIndex != 0) {
              this.config.undoStatus = true;
              this.$store.state.fabricObj.canvas.loadFromJSON(
                this.config.canvasState[this.config.currentStateIndex - 1],
                function() {
                  var jsonData = JSON.parse(
                    _self.config.$store.state.fabricObj.canvasState[_self.config.$store.state.fabricObj.currentStateIndex - 1]
                  );
                  _self.$store.state.fabricObj.canvas.renderAll();
                  _self.config.$store.state.fabricObj.undoStatus = false;
                  _self.config.$store.state.fabricObj.currentStateIndex -= 1;
                  // _self.config.$store.state.fabricObj.undoButton.removeAttribute("disabled");
                  // _self.config.$store.state.fabricObj.undoButton.disabled = false;
                  if (
                    _self.config.$store.state.fabricObj.currentStateIndex !==
                    _self.config.$store.state.fabricObj.canvasState.length - 1
                  ) {
                    // _self.config.$store.state.fabricObj.redoButton.removeAttribute('disabled');
                    // _self.config.$store.state.fabricObj.redoButton.disabled = false;
                  }
                  _self.config.$store.state.fabricObj.undoFinishedStatus = 1;
                }
              );
            } else if (_self.config.$store.state.fabricObj.currentStateIndex == 0) {
              _self.$store.state.fabricObj.canvas.clear();
              _self.config.$store.state.fabricObj.undoFinishedStatus = 1;
              // _self.config.$store.state.fabricObj.undoButton.disabled= "disabled";
              // _self.config.$store.state.fabricObj.redoButton.removeAttribute('disabled');
              // _self.config.$store.state.fabricObj.redoButton.disabled = false;
              _self.config.$store.state.fabricObj.currentStateIndex -= 1;
            }
          }
        }
      }
    },
    redo() {
      // this.fabricAction.redo(this)
      let _self = this;
      if (this.config.redoFinishedStatus) {
        if (
          this.config.currentStateIndex == this.config.canvasState.length - 1 &&
          this.config.currentStateIndex != -1
        ) {
          // this.config.redoButton.disabled= true;
        } else {
          if (
            this.config.canvasState.length > this.config.currentStateIndex &&
            this.config.canvasState.length != 0
          ) {
            this.config.redoFinishedStatus = 0;
            this.config.redoStatus = true;
            this.$store.state.fabricObj.canvas.loadFromJSON(
              this.config.canvasState[this.config.currentStateIndex + 1],
              function() {
                var jsonData = JSON.parse(
                  _self.config.$store.state.fabricObj.canvasState[_self.config.$store.state.fabricObj.currentStateIndex + 1]
                );
                _self.$store.state.fabricObj.canvas.renderAll();
                _self.config.$store.state.fabricObj.redoStatus = false;
                _self.config.$store.state.fabricObj.currentStateIndex += 1;
                if (_self.config.$store.state.fabricObj.currentStateIndex != -1) {
                  //    _self.config.$store.state.fabricObj.redoButton.disabled = false;
                }
                _self.config.$store.state.fabricObj.redoFinishedStatus = 1;
                if (
                  _self.config.$store.state.fabricObj.currentStateIndex ==
                    _self.config.$store.state.fabricObj.canvasState.length - 1 &&
                  _self.config.$store.state.fabricObj.currentStateIndex != -1
                ) {
                  // _self.config.$store.state.fabricObj.redoButton.disabled= true;
                }
              }
            );
          }
        }
      }
    },
    updateCanvasState() {
      var _self = this;
      if (this.config.undoStatus == false && this.config.redoStatus == false) {
        var jsonData = _self.$store.state.fabricObj.canvas.toJSON();
        var canvasAsJson = JSON.stringify(jsonData);
        if (
          _self.config.$store.state.fabricObj.currentStateIndex <
          _self.config.$store.state.fabricObj.canvasState.length - 1
        ) {
          var indexToBeInserted = _self.config.$store.state.fabricObj.currentStateIndex + 1;
          _self.config.$store.state.fabricObj.canvasState[indexToBeInserted] = canvasAsJson;
          var numberOfElementsToRetain = indexToBeInserted + 1;
          _self.config.$store.state.fabricObj.canvasState = _self.config.$store.state.fabricObj.canvasState.splice(
            0,
            numberOfElementsToRetain
          );
        } else {
          _self.config.$store.state.fabricObj.canvasState.push(canvasAsJson);
        }
        _self.config.$store.state.fabricObj.currentStateIndex = _self.config.$store.state.fabricObj.canvasState.length - 1;
        if (
          _self.config.$store.state.fabricObj.currentStateIndex ==
            _self.config.$store.state.fabricObj.canvasState.length - 1 &&
          _self.config.$store.state.fabricObj.currentStateIndex != -1
        ) {
          // _self.config.$store.state.fabricObj.redoButton.disabled= true
        }
      }
    },

    /**@augments
     * fucntion 转为图片并下载到本地
     */
    canvasToImage() {
      var MIME_TYPE = "image/png";
      //转换成base64
      var imgURL = this.$store.state.fabricObj.canvas.toDataURL(MIME_TYPE); //创建一个a链接，模拟点击下载
      var dlLink = document.createElement("a");
      var filename = "个人画板_" + new Date().getTime() + ".png";
      dlLink.download = filename;
      dlLink.href = imgURL;
      dlLink.dataset.downloadurl = [
        MIME_TYPE,
        dlLink.download,
        dlLink.href
      ].join(":");
      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
/* @import url('../styles/test.scss'); */
.p-index {
  position: relative;
  overflow: hidden;
  background: #000;
  .product-list {
    background: #fff;
    &.open {
      width: 36%;
      float: left;
    }
  }

  .jigsaw {
    display: none;
    position: relative;
    .bar-nav {
      background: #eee;
      padding: 10px;
      height: 30px;
      position: relative;
    }
    .optin-box {
      // display: none;
      position: relative;
      span {
        display: inline-block;
        width: 25px;
        margin-right: 20px;
        vertical-align: middle;
        &.option-special {
          width: 40px;
        }
        cursor: pointer;
        img {
          display: inline-block;
          float: left;
          width: 100%;
        }
      }
      .action {
        width: 220px;
        position: absolute;
        background-color: #eee;
        padding: 4px;
        top: 10px;
        left: 450px;
        border: #ccc 1px solid;
        display: none;
        &.select {
          display: block;
        }
        span {
          display: inline-block;
          img {
            width: 25px;
          }
        }
      }
    }
    .cut-optin {
      display: none;
      position: absolute;
      left: 100px;
      background: #fff;
      padding: 2px 10px;
      border: #eee 1px solid;
      span {
        display: inline-block;
        width: 25px;
        margin-right: 20px;
        cursor: pointer;
        img {
          display: inline-block;
          float: left;
          width: 100%;
        }
      }
    }
    .select {
      display: block;
    }

    &.open {
      display: block;
      float: left;
      width: 64%;
    }
    .top-bar {
      background: #363738;
      height: 64px;
    }
    .black-board {
      width: 800px;
      height: 1000px;
      background: #fff;
      position: fixed;
      left: 36%;
      margin-left: 80px;
      top: 100px;
    }
  }
}
</style>
