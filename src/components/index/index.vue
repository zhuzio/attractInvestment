<template>
    <div class="wrapper">
      <p class="index-title">这是首页</p>
      <footbar></footbar>
    </div>
</template>

<script>
  import footbar from '../comp/footbar.vue'
  export default {
    name: "index",
    components: {
      footbar
    },
  }
</script>

<style scoped lang="less">
  @import "../../assets/less/index";
</style>
