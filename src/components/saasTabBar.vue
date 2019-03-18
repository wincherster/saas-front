<template>
    <div class='nav-tabs'>
        <!-- <span class="prev" ><i class="iconfont icon-zuofanye"></i></span>
        <span class="next" ><i class="iconfont icon-youfanye"></i></span> -->
        <el-tabs
            v-model='activeTabValue'
            @tab-remove="removeTab"
            @tab-click="changeActiveTab"
            closable>
            <el-tab-pane label='首页' name='0' class='home'></el-tab-pane>
            <el-tab-pane 
                v-for='(item, index) in navTabs'
                :key='index'
                :label='item.title'
                :name='item.code'>
                </el-tab-pane>
                {{getNavTabs}}
        </el-tabs>

         <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="iconfont icon-weixuan-suolvegongnengxiala"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command='closeall'>
                <i class="iconfont icon-guanbisuoyou"></i><span>关闭所有</span>
            </el-dropdown-item>
            <el-dropdown-item command='reload'>
                <i class="iconfont icon-shuaxin"></i><span>刷新</span>
            </el-dropdown-item>
            <el-dropdown-item command='fullscreen' v-if='!fullscreenMode'>
                <i class="iconfont icon-quanping"></i><span>全屏</span>
            </el-dropdown-item>
            <el-dropdown-item command='exitfullscreen' v-if='fullscreenMode'>
                <i class="iconfont saas saas-header-quitfullscreen"></i><span>退出全屏</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        {{getFullscreenMode}}
    </div>
</template>
<script>
function getStyle(tag, attr) {
  if (tag.currentStyle) {
    return tag.currentStyle[attr];
  } else {
    return getComputedStyle(tag, null)[attr];
  }
}
export default {
  created() {
    this.activeTabValue = this.$store.getters.getActiveTabValue;
  },
  data() {
    return {
      activeTabValue: "",
      navTabs: [],
      fullscreenMode: false
    };
  },
  methods: {
    removeTab(targetTabValue) {
      this.$store.dispatch("removeTab", targetTabValue);
    },
    changeActiveTab(targetTab) {
      this.$store.dispatch("changeActiveTab", targetTab.name);
    },
    handleCommand(command) {
      if (command === "closeall") {
        this.$store.dispatch("removeAllTab");
      } else if (command === "reload") {
        var activeTab = this.navTabs.find(item => {
          return item.code == this.activeTabValue;
        });
        if (activeTab) {
          this.$router.push({ path: activeTab.router });
          this.$store.dispatch("changeActiveTab", activeTab.code);
        }
      } else if (command === "fullscreen") {
        this.$store.dispatch("setFullscreenMode", true);
      } else if (command === "exitfullscreen") {
        this.$store.dispatch("setFullscreenMode", false);
      }
    }
  },
  computed: {
    getNavTabs() {
      this.navTabs = null;
      this.navTabs = this.$store.getters.getNavTabs;
      this.activeTabValue = this.$store.getters.getActiveTabValue;
      // console.log(this.activeTabValue);
    },
    getFullscreenMode() {
      this.fullscreenMode = this.$store.getters.getFullscreenMode;
    }
  },
  watch: {
    activeTabValue(newValue, oldValue) {
      //   console.log("new=" + newValue, "old=" + oldValue);
      let activeTab = this.navTabs.find(item => {
        return item.code === newValue;
      });
      if (activeTab) {
        this.$router.push({ path: activeTab.router }); //跳转路由
      } else {
        this.$router.push({ path: "/index" });
      }
    }
  }
};
</script>
<style scoped>
.nav-tabs .prev,
.nav-tabs .next {
  position: absolute;
  top: 0;
  width: 30px;
  height: 36px;
  z-index: 0;
  text-align: center;
  cursor: pointer;
}
.nav-tabs .prev {
  left: 0;
}
.nav-tabs .next {
  right: 28px;
}

.nav-tabs .prev .iconfont,
.nav-tabs .next .iconfont {
  font-size: 12px;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -8px;
  margin-left: -8px;
  color: #9aabb8;
}

.nav-tabs > .el-dropdown {
  position: absolute;
  top: 0;
  right: 16px;
  margin-top: -8px;
  width: 16px;
  height: 36px;
  text-align: center;
  margin: 0;
}
.nav-tabs > .el-dropdown > .el-dropdown-link > .iconfont {
  color: #9aabb8;
  font-size: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -8px;
  margin-left: -6px;
}

.el-dropdown-menu.el-popper {
  background: #fefefe;
  border: 1px solid #e8eff4;
  box-shadow: 0 0 8px 0 rgba(33, 41, 50, 0.06);
  border-radius: 6px 0 0 0 6px 6px 6px;
  top: 75px;
  width: 110px;
  height: 125px;
}
.el-dropdown-menu.el-popper > .el-dropdown-menu__item {
  line-height: 32px;
  height: 32px;
  padding: 0 !important;
  padding-left: 18px !important;
}
.el-dropdown-menu.el-popper > .el-dropdown-menu__item:focus,
.el-dropdown-menu.el-popper > .el-dropdown-menu__item:not(.is-disabled):hover {
  background: #f2f6fb;
}
.el-dropdown-menu.el-popper > .el-dropdown-menu__item > .iconfont {
  vertical-align: middle;
  font-family: "PingFangSC-Regular";
  font-size: 16px;
  color: #34495e;
}
.el-dropdown-menu.el-popper > .el-dropdown-menu__item > span {
  vertical-align: middle;
  font-family: "PingFangSC-Regular";
  font-size: 12px;
  color: #34495e;
  padding-left: 8px;
}
</style>

