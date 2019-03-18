<template>
    <div class="home">
        <!-- 系统快速设置 -->
        <system-fastset></system-fastset>

        <!-- 如果有权限就显示这个组件 -->
        <health-detection v-if="healthDetectionAuthority"></health-detection>

        <!-- 门店列表 -->
         <shop-list v-if="shopListShowStatus"></shop-list>
        {{getShopListShowStatus}}

    </div>
</template>
<script>
// 引入健康检测组件
import HealthDetection from "./HealthDetection.vue";
// 引入系统快速设置组件
import SystemFastset from "./SystemFastset.vue";
// 引入门店列表组件
import ShopList from "./ShopList.vue";

export default {
  data() {
    return {
      healthDetectionAuthority: true,
      shopListShowStatus: false,
      healthDetectionPath: ""
    };
  },
  components: {
    "health-detection": HealthDetection,
    "system-fastset": SystemFastset,
    "shop-list": ShopList
  },
  computed: {
    getShopListShowStatus() {
      this.shopListShowStatus = this.$store.getters.getShopListShowStatus;
    }
  }
};
</script>
