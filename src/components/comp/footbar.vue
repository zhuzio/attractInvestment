<template>
  <mt-tabbar fixed class="tabbar">

    <router-link to="/index" active-class="active">
      <mt-tab-item id="home">
        <i slot="icon" class="icon icon-index"></i>
        <p>首页</p>
      </mt-tab-item>
    </router-link>

    <router-link to="/attract" active-class="active">
      <mt-tab-item id="shop">
        <i slot="icon" class="icon icon-attract"></i>
       <p>投资意向</p>
      </mt-tab-item>
    </router-link>

    <router-link to="/our" active-class="active" >
      <mt-tab-item id="my">
        <i slot="icon" class="icon icon-my"></i>
        <p>关于我们</p>
      </mt-tab-item>
    </router-link>

  </mt-tabbar>
</template>
<style lang="less" scoped>
  .tabbar{
    justify-content: space-around;
    align-items: center;
    padding: .1rem 0;
    height: .7rem;
    border-top: 1px #ccc solid;
  }
  .mint-tab-item{
    padding-bottom:.05rem!important;
    padding-top: 0rem!important;
  }
</style>
