<template>
    <div class="health-detection">
        <div class="title">
            <i class="iconfont icon-biaotibiaotou"></i>
            健康检测
        </div>
        <div class='split-line'></div>
        <div class='content'>
            <organizationsetting-detection class='child-comp' :healthData='healthData'></organizationsetting-detection>
            <takeout-detection class='child-comp' :healthData='healthData'></takeout-detection>
            <organizationrisk-detection class='child-comp' :healthData='healthData'></organizationrisk-detection>
        </div>
    </div>
</template>

<script>
// 引入组件
import OrganizationSettingDetection from "./OrganizationSettingDetection.vue";
import TakeOutDetection from "./TakeOutDetection.vue";
import OrganizationRiskDetection from "./OrganizationRiskDetection.vue";
// 引入样式
import "../../assets/css/health-detection.css";
import EventBus from "../../utils/EventBus.js";
export default {
  created() {
    // 发送ajax请求获取健康数据
    var result = {
      status: 200,
      msg: "ok",
      data: {
        shopTotal: 3000,
        organizationSetting: {
          classesNoSetting: 1000,
          tableNoSetting: 25,
          exceptionCauseNoSetting: 280,
          paywayNoSetting: 130,
          printerNoSetting: 10,
          mealNoSetting: 10
        },
        takeout: {
          takeoutRestShop: 1000,
          offlineStatusShop: 25
        },
        organizationRisk: {
          shopWillExpire: 1000
        }
      }
    };

    this.healthData = result.data;
  },
  data() {
    return {
      healthData: {}
    };
  },
  components: {
    "organizationsetting-detection": OrganizationSettingDetection,
    "takeout-detection": TakeOutDetection,
    "organizationrisk-detection": OrganizationRiskDetection
  }
};
</script>
<style scoped>
.health-detection {
  background-color: #fff;
  border: 1px solid #e8eff4;
  min-width: 1130px;
  min-height: 410px;
}
.health-detection .title {
  text-align: left;
  font-size: 16px;
  color: #34495e;
  line-height: 41.2px;
  font-family: "PingFangSC-Regular";
  letter-spacing: 0;
}
.health-detection .title .iconfont {
  margin-left: 10px;
  font-size: 16px;
  color: #0c9aff;
}
.health-detection .split-line {
  height: 9.8px;
  width: 100%;
  opacity: 0.03;
  background-image: linear-gradient(-180deg, #434c94 0%, #ffffff 100%);
}
.health-detection .content {
  background-color: #fff;
  display: flex;
  padding-top: 22px;
  justify-content: center;
  height: 357px;
}
.health-detection .content .child-comp {
  flex: 1;
  height: 100%;
}
</style>

