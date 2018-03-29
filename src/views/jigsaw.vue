  <template>
    <div class="p-index">
        <div class="product-list" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
              <top-bar></top-bar>
              <single-product :list="productList" :type="listType"></single-product>
        </div>
        <div class="jigsaw" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
              <div class="top-bar">
                  <el-button type="text" @click="open" class="creare-case">{{this.caseBasic.title}}</el-button>
              </div>
                <div class="cut-optin" id="cutOptin" :class=" $store.state.fabricObj.cutSelect ? 'select' : '' "> 
                  <span id="cancle" class="optionElem" @click="cutCancle()"> <img src="@/assets/icon/cancle.png" /> </span> 
                  <span id="sure" class="optionElem" @click="cutSure()"> <img src="@/assets/icon/sure.png" /> </span> 
                </div> 
              
              <div class="black-board">
                <option-nav :config="config"></option-nav>
                <canvas id="canvas" width='861' height='589'></canvas>
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
  components: { topBar, guide, singleProduct, optionNav },
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
            "http://m1.cdn.imeijian.cn/330203canting.jpg?x-oss-process=style/300wh_j",
          obj: {
            version: "2.1.0",
            objects: [
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 286.73,
                top: 196,
                width: 218,
                height: 300,
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
                src:
                  "http://m1.cdn.imeijian.cn/b3fdc58086f8d77da428ebd3183f88d5.png?x-oss-process=style/300wh_j",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 152.73,
                top: 85,
                width: 299,
                height: 300,
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
                src:
                  "http://m1.cdn.imeijian.cn/2f0ce5e3aca9512bcaa3808253894ad0.png?x-oss-process=style/300wh_j",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 598.73,
                top: 108,
                width: 216,
                height: 240,
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
                src:
                  "http://m1.cdn.imeijian.cn/4bd5609e6a7b2e5241dfa94f5a46103b.png?x-oss-process=style/300wh_j",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 546.73,
                top: 385,
                width: 300,
                height: 290,
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
                src:
                  "http://m1.cdn.imeijian.cn/e7f04ea47698663d3bbfbfac6c3a7ac2.png?x-oss-process=style/300wh_j",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 213.73,
                top: 423,
                width: 300,
                height: 200,
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
                src:
                  "http://m4.cdn.imeijian.cn/categoryImg-10012.png?x-oss-process=style/300wh_j",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: -16.27,
                top: 401,
                width: 300,
                height: 200,
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
                src:
                  "http://m4.cdn.imeijian.cn/categoryImg-10004.png?x-oss-process=style/300wh_j",
                filters: []
              }
            ]
          }
        },
        {
          pic:
            "http://m3.cdn.imeijian.cn/db44e836f1dec0dc6b4bc2b3f9a17734.jpeg?x-oss-process=style/500w",
          obj: {
            version: "2.1.0",
            objects: [
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 60.73,
                top: 35,
                width: 235,
                height: 300,
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
                src:
                  "http://m1.cdn.imeijian.cn/9311e12d6f29953e9652b89f64c8c030.png?x-oss-process=style/300wh_j",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 556.73,
                top: 57,
                width: 232,
                height: 300,
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
                src:
                  "http://m1.cdn.imeijian.cn/e143d3c6c5445a31e898ae89bfaab6e5_M_685630.png?x-oss-process=style/300wh_j",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 442.73,
                top: 414,
                width: 300,
                height: 297,
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
                src:
                  "http://m1.cdn.imeijian.cn/8dd88ad5c373b5296e7f6a722532c343.png?x-oss-process=style/300wh_j",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 296.73,
                top: 160,
                width: 300,
                height: 282,
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
                src:
                  "http://m1.cdn.imeijian.cn/9803a7ca868fccaa97f0eb3467ac5cbd.png?x-oss-process=style/300wh_j",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 94.73,
                top: 378,
                width: 0,
                height: 0,
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
                src: "",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 5.73,
                top: 371,
                width: 300,
                height: 200,
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
                src:
                  "http://m4.cdn.imeijian.cn/categoryImg-10005.png?x-oss-process=style/300wh_j",
                filters: []
              }
            ]
          }
        },
        {
          pic:
            "http://m3.cdn.imeijian.cn/843730cd2dc2889f79efc518cb4ce10b.jpeg?x-oss-process=style/500w",
          obj: {
            version: "2.1.0",
            objects: [
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 342.73,
                top: 0,
                width: 175,
                height: 300,
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
                src:
                  "http://m1.cdn.imeijian.cn/669b139694989c3edb30fc039cd478b6.png?x-oss-process=style/300wh_j",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 79.73,
                top: 151,
                width: 215,
                height: 300,
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
                src:
                  "http://m1.cdn.imeijian.cn/01764dbb45e867654f2ffea75905a00d.png?x-oss-process=style/300wh_j",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 362.73,
                top: 318,
                width: 300,
                height: 200,
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
                src:
                  "http://m4.cdn.imeijian.cn/categoryImg-10003.png?x-oss-process=style/300wh_j",
                filters: []
              }
            ]
          }
        },
        {
          pic:
            "http://m3.cdn.imeijian.cn/1d32ad87470dc6af95f45fe1aad76e0e.jpeg?x-oss-process=style/500w",
          obj: {
            version: "2.1.0",
            objects: [
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 238.73,
                top: 173,
                width: 300,
                height: 300,
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
                src:
                  "http://m1.cdn.imeijian.cn/83a521cde2fde15343c8b67640e1264d.png?x-oss-process=style/300wh_j",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: 564.73,
                top: 69,
                width: 218,
                height: 300,
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
                src:
                  "http://m1.cdn.imeijian.cn/b3fdc58086f8d77da428ebd3183f88d5.png?x-oss-process=style/300wh_j",
                filters: []
              },
              {
                type: "image",
                version: "2.1.0",
                originX: "left",
                originY: "top",
                left: -26.27,
                top: 165,
                width: 300,
                height: 290,
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
                src:
                  "http://m1.cdn.imeijian.cn/e7f04ea47698663d3bbfbfac6c3a7ac2.png?x-oss-process=style/300wh_j",
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
      ],
      caseBasic:{
        description:'',
        isEditable:'',
        isEditable:'',
        isPrivate:'',
        memberId:'',
        refId:'',
        thumb:'',
        title:'未命名'

      }   
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
    //console.log(JSON.stringify(canvas.toJSON()));
       // this.createCase({
    //   description: "这是测试的", //描述
    //   isEditable: 0, //是否可以修改
    //   isPrivate: 0, //是否私有
    //   memberId: "00001", //会员ID
    //   refId: "a001", //引用ID
    //   thumb: "", // 缩略图url
    //   title: "第一条案例" //案例主题或者名称吧
    // }); 

  
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
    // canvas操作事件监听
    canvasDataChange() {
      let _self = this;
      this.$store.state.fabricObj.canvas.on("object:modified", function() {
        _self.updateCanvasState();
      });
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
    updateCanvasState() {
      var _self = this;
      if (
        _self.config.undoStatus == false &&
        _self.config.redoStatus == false
      ) {
        var jsonData = _self.$store.state.fabricObj.canvas.toJSON();
        var canvasAsJson = JSON.stringify(jsonData);
        if (
          _self.config.currentStateIndex <
          _self.config.canvasState.length - 1
        ) {
          var indexToBeInserted = _self.config.currentStateIndex + 1;
          _self.config.canvasState[indexToBeInserted] = canvasAsJson;
          var numberOfElementsToRetain = indexToBeInserted + 1;
          _self.config.canvasState = _self.config.canvasState.splice(
            0,
            numberOfElementsToRetain
          );
        }
        _self.config.currentStateIndex = _self.config.canvasState.length - 1;
      }
    },
    open() {
      var html = [
        '  <div class="case-basic">',
        '     <div class="name-box">',
        '      <input class="case-name" id="caseTitle" value="'+this.caseBasic.title+'" />',
        "      </div>",
        "      <div>",
        "         <select><option>简约</option></select>",
        "         <select><option>客厅</option></select>",
        "      </div>",
        "     <div class='memo-box'><textarea id='caseMemo' class='area'>"+this.caseBasic.description+"</textarea></div>",
        "  </div>"
      ].join("");
      this.$alert(html, {
        dangerouslyUseHTMLString: true,
     
      }).then(() => {
          this.caseBasic.title=document.getElementById('caseTitle').value;
          this.caseBasic.description=document.getElementById('caseMemo').value;
          this.$message({
            type: 'success',
            message: '创建成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已经取消'
          });          
        });
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
    .top-bar {
      background: #363738;
      height: 64px;
      .creare-case {
        margin-left: 40px;
        text-decoration: none;
      }
    }
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
      width: 860px;
      height: 1000px;
      background: #fff;
      position: fixed;
      left: 36%;
      margin-left: 80px;
      top: 100px;
    }
  }
}
.case-basic {
  .name-box {
    margin-bottom: 10px;
  }
  .case-name {
    width: 366px;
    border: #eee 1px solid;
    padding: 2px 10px;
    line-height: 20px;
  }
  select {
    width: 182px;
    margin-right: 10px;
    border: #eee 1px solid;
  }
  .memo-box {
    margin-top: 10px;
    textarea {
      width: 386px;
      height: 60px;
      border: #eee 1px solid;
    }
  }
}
</style>
