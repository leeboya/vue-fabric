<template>
  <div class="p-index">
      <div class="product-list" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
        <top-bar></top-bar>
        <guide></guide>
        <single-product></single-product>
      </div>
      <div class="jigsaw" :class="$store.state.fabricObj.jigsawIsOpen ? 'open' : '' ">
          <div class="top-bar"></div>
          <div class="opton"></div>
          <div class="black-board"></div>
      </div>

  </div>

</template>
<script>
import topBar from "@/components/top_bar";
import guide from "@/components/guide";
import singleProduct from "@/components/single_product";
export default {
    components: { topBar,guide,singleProduct },
}
</script>

<style rel="stylesheet/scss" lang="scss">
/* @import url('../styles/test.scss'); */
.p-index {
    position: relative;
    overflow: hidden;
    background:#000;
    .product-list {
        float:left;
        background: #fff;
        &.open{
            width:36%;
        }
        
    }

    .jigsaw {
        display: none;
        float:left;
        width:64%;
         &.open{
            display: block;
        }
        .top-bar {
            background: #363738 ;
            height: 64px;
        }
        .black-board {
            width:800px;
            height: 1000px;
            background: #fff;
            margin:40px auto;
        }
       
    }
}

</style>


