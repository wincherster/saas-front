<template>
  <div id="app">
     <div class="aside" v-if='!fullscreenMode'>
       <saas-nav></saas-nav>
     </div>
     <div class="container">
       <div class="header" v-if='!fullscreenMode'>
         <saas-header></saas-header>
       </div>
       <div class="tabBar">
         <saas-tabbar></saas-tabbar>
       </div>
       <div class="main">
         <router-view></router-view>
       </div>
       <div class="footer">
         <saas-footer></saas-footer>
       </div>
     </div>
     {{getFullscreenMode}}
  </div>
</template>

<script>
import saasNav from "./saasNav.vue";
import saasHeader from "./saasHeader.vue";
import saasTabBar from "./saasTabBar.vue";
import saasFooter from "./saasFooter.vue";

export default {
  components: {
    "saas-nav": saasNav,
    "saas-footer": saasFooter,
    "saas-tabbar": saasTabBar,
    "saas-header": saasHeader
  },
  data() {
    return {
      fullscreenMode: false
    };
  },
  computed: {
    getFullscreenMode() {
      this.fullscreenMode = this.$store.getters.getFullscreenMode;
      // console.log(this.fullscreenMode);
    }
  }
};
</script>
<style scoped>
#app {
  display: flex;
  height: 100%;
  min-height: 760px;
  overflow: hidden;
}
#app .aside {
  background-color: #223f77;
  max-width: 160px;
  min-width: 70px;
  width: "auto";
  height: 100%;
  box-shadow: 0 0 10px 0 rgba(33, 35, 41, 0.6);
  z-index: 999;
}

#app .container {
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #f4f9fc;

  height: 100%;
  width: 100%;
  overflow: hidden;
}
#app .container .header {
  height: 46px;
  min-height: 46px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 0 14px 0 rgba(33, 41, 50, 0.05);
  
  z-index: 1;
}
#app .container .tabBar {
  height: 36px;
  min-height: 36px;
  background: #ffffff;
}
#app .container .main {
  flex: 1;
  height: 100%;
  padding: 16px;
  overflow-y: auto;
}
</style>