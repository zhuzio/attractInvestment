<template>
    <div class="wrapper">
      <div class="moduleHead">
        <a href="javascript:window.history.go(-1)"></a>学员风采
      </div>
      <vue-waterfall-easy :imgsArr="imgSrc" ></vue-waterfall-easy>
      <p>这是分支2所提交的东西</p>
      <p>这是Dev分支所提交的东西</p>
      <div class="student-container">
        <!--<img :src="i" alt="" v-for="(i, index) in imgSrc" :key="index">-->
       <!-- <img src="../../assets/image/student/1.jpg" alt="">
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
        <img src="../../assets/image/student/17.jpg" alt="">-->

      </div>
    </div>
</template>

<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'
  export default {
      name: "student",
      data () {
          return {
            imgSrc:[],
            link:'http://img.nyycstar.com/images/student/',
            last:'.jpg'
          }
      },
      components: {
        vueWaterfallEasy
      },
      methods: {
        getImgSrc() {
          for (var i=1;i<=17;i++){
            this.imgSrc.push(this.link+i+this.last);
          }
        }
      },
      mounted() {

      },
      created() {
        this.getImgSrc();
        // console.log(this.imgSrc)
      }
    }
</script>

<style scoped lang="less">
  .student-container{
    margin-top: 1rem;
    /*display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;*/
   /* column-count: 2;
    column-width: 3rem;
    column-gap:.2rem;
    width: 6.2rem;
    padding: 0 .1rem;*/
    img{
      display: block;
      width:100%;
      height: auto;
      margin-bottom: .2rem;
      /*position: absolute;*/
    }
  }
</style>
