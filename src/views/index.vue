<template>
  <div class="pageIndex">
     <m-head></m-head>
    <div class="container">
      <div class="leftBar">
        <m-lfbar></m-lfbar>
      </div>
      <div class="wrap"></div>
    </div>
  </div>
</template>
<style>

.container {
  overflow: hidden;
}
.container  .leftBar {
  width:400px;
  float:left;

}
.wrap {
  float:left;
  width:800px;
  margin-left:20px;
  border:#eee 1px solid;
  height: 1000px;

}
</style>
<script>
import mHead from '@/components/head'
import mLfbar from '@/components/leftBar'
export default {
    components: { mHead,mLfbar},
}
</script>
