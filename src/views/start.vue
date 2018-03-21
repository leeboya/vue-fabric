<template>
  <div>
      <top-bar></top-bar>
      <guide></guide>
      <single-product></single-product>
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
<style>

</style>


