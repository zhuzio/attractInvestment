<template>
    <div class="wrapper">
      <!--<p class="index-title">这是首页</p>-->
      <div class="index-swiper">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide><img src="../../assets/image/swipe/sw1.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../assets/image/swipe/sw2.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../assets/image/swipe/sw3.jpg" alt=""></swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
      <div class="index-order">
        <ul>
          <router-link to="/policyEncourage">
            <li>
              <i class="icon icon-policy"></i>
              <p>政策鼓励</p>
            </li>
          </router-link>
          <router-link to="/city">
            <li>
              <i class="icon icon-city"></i>
              <p>一线形势</p>
            </li>
          </router-link>
          <router-link to="">
            <li>
              <i class="icon icon-teach"></i>
              <p>教育优势</p>
            </li>
          </router-link>
          <router-link to="">
            <li>
              <i class="icon icon-code"></i>
              <p>关于编程</p>
            </li>
          </router-link>
          <router-link to="">
            <li>
              <i class="icon icon-mien"></i>
              <p>学员风采</p>
            </li>
          </router-link>
          <router-link to="">
            <li>
              <i class="icon icon-software"></i>
              <p>编程软件</p>
            </li>
          </router-link>
        </ul>
      </div>
      <div class="index-question">
        <div class="question-container">
          <p class="question-title">为什么学习编程？</p>
          <div class="question-center">
            <p>为什么孩子要学编程？真的是为了当个“程序员”？</p>
            <div>
              <p>少儿编程被誉为“互联网时代，像语、数、英一样每个人都应该掌握的必备技能”。</p>
              <p>就像20年前我们学习英语并不是为了人人成为翻译，而今天我们学编程，也并不一定是
                为了成为一名程序员，而是为了让孩子获得一张未来世界的“通行证”。</p>
              <img src="../../assets/image/us1.jpg" alt="">
              <p><span>AI时代的需求。</span>人工智能时代，编程将成为一种基础的、核心的技能，
                因为任何人工智能的实现都离不开编程。适应人工智能时代，掌握编程能力是大势所趋。
              </p>
              <p><span>提升逻辑思维能力。</span>写程序是如何把大问题不断分割成小问题的过程。其中，
                必须去思考如何把代码合理的安排在整个程序中，让程序流畅的处理输入、演算、直到输出，
                这一过程对孩子的逻辑分析能力会有极大的提升。</p>
              <p><span>培养孩子的“编程思维”能力。</span>如果说学外语是为了跟外国人沟通，学编程就是
                学习怎么跟电脑沟通。孩子在学习的过程中，需要运用抽象思维解决问题，也需要一种把抽象
                化为具体的能力，而这一过程也是培养孩子“编程思维”的过程。</p>
              <p><span>培养孩子整合信息、解决问题的能力。</span>
                写程序根本上说，就是电脑指令的重新排列组合，这就像小学的时
                候我们查字典学汉字、学成语，之后学习如何利用习得的汉字、成语组成句子，
                进而撰写文章一样。程式中的基本指令就是汉字，最终要完成一个有头有尾的程序时，
                则必须融会贯通，学以致用。在这一过程中孩子整合信息、解决问题的能力会越来越强。
              </p>
              <p><span>锻炼孩子团队协作能力。</span>
                孩子组队创作作品的过程中将慢慢学会如何沟通、协作，如何用团队力量解决问题，
                孩子的团队协作能力将不断得到锻炼。</p>
              <p><span>增加升学竞争力。</span>
                编程逐渐纳入基础教育，学习编程知识，参加编程比赛，
                可以为为留学升学加码。</p>
              <img src="../../assets/image/u2.jpeg" alt="">
              <p><span>美国前任总统奥巴马</span>就职期间，大力推广少儿编程，并且鼓励孩子放下手机、游戏机
              去学习编程，他曾说过：“We need to make children know about maths and science, not only a little part ,but all
                people. Everyone should learn how to program as early as possible.（“我们需要让孩子们了解数学和科学，不仅是很小的一部分，
                而是所有的人。每个人都应该尽早学会如何编程。”）”</p>
              <h3>
                少儿学编程，最重要的是培养其编程思维和计算思维，是一种思维习惯的培养 。
                除此外，孩子们可以自己做些简单的小网页，小游戏，实现一些小功能，这样孩子就能
                从技术的角度对身边各类软件有更深启蒙认知。少儿学编程，其目的不是学会编程这项技能，
                更不是让孩子为做程序员这项职业做准备。编程要想学的好，其必然是以扎实的文化课做支撑的。
                家长还是要清醒的意识到文化课的重要性。
              </h3>
            </div>
          </div>
        </div>
      </div>
      <footbar></footbar>
    </div>
</template>

<script>
  import footbar from '../comp/footbar.vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "index",
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: true,
          effect:"coverflow",
          grabCursor : true,
          setWrapperSize :true,
          paginationClickable :true,
          observeParents:true,
          loop : true,
          pagination: {
            el: '.swiper-pagination',
          },
        }
      }
    },
    components: {
      footbar
    },
  }
</script>

<style scoped lang="less">
  @import "../../assets/less/index";
</style>
