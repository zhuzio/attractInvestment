<template>
    <div class="wrapper">
      <div class="moduleHead">
        <a href="javascript:window.history.go(-1)"></a>学员风采
      </div>
      <div class="student-container">
        <img src="../../assets/image/student/1.jpg" alt="">
        <img src="../../assets/image/student/2.jpg" alt="">
        <img src="../../assets/image/student/3.jpg" alt="">
        <img src="../../assets/image/student/4.jpg" alt="">
        <img src="../../assets/image/student/5.jpg" alt="">
        <img src="../../assets/image/student/6.jpg" alt="">
        <img src="../../assets/image/student/7.jpg" alt="">
        <img src="../../assets/image/student/8.jpg" alt="">
        <img src="../../assets/image/student/9.jpg" alt="">
        <img src="../../assets/image/student/10.jpg" alt="">
        <img src="../../assets/image/student/11.jpg" alt="">
        <img src="../../assets/image/student/12.jpg" alt="">
        <img src="../../assets/image/student/13.jpg" alt="">
        <img src="../../assets/image/student/14.jpg" alt="">
        <img src="../../assets/image/student/15.jpg" alt="">
        <img src="../../assets/image/student/16.jpg" alt="">
        <img src="../../assets/image/student/17.jpg" alt="">
<!--        <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"></vue-waterfall-easy>-->
      </div>
    </div>
</template>

<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'
  export default {
      name: "student",
      data () {
          return {

          }
      },
      components: {
        vueWaterfallEasy
      },
      methods: {
      },
      mounted() {
      },
      created() {

      }
    }
</script>

<style scoped lang="less">
  .student-container{
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    img{
      display: block;
      width: 45%;
      height: auto;
      /*position: absolute;*/
    }
  }
</style>
