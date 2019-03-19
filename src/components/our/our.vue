<template>
    <div class="wrapper">
      <p>这是关于我们页面</p>
      <footbar></footbar>
    </div>
</template>

<script>
  import footbar from '../comp/footbar.vue'
  export default {
    name: "our",
    components: {
      footbar
    },
  }
</script>

<style scoped>

</style>
