<template>
    <div class="box">
        <div class="inner-box">
            <div id="organizationSetting" style="width:210px; height:210px;margin:0 auto;"></div>
            <h3>机构设置健康度检测</h3>
            <ul @click='handleShowShopList($event)'>
                <li class="clearfix">
                    <div class="fl-left">班次未设置：</div>
                    <div class="fl-right">
                        <span class="count"><a href="#">{{organizationSettingData.classesNoSetting}}</a></span>&nbsp;家门店
                    </div>
                </li>
                <li class="clearfix">
                    <div class="fl-left">桌位未设置：</div>
                    <div class="fl-right">
                        <span class="count"><a href="#">{{organizationSettingData.tableNoSetting}}</a></span>&nbsp;家门店
                    </div>
                </li>
                <li class="clearfix">
                    <div class="fl-left">异常原因未设置：</div>
                    <div class="fl-right">
                        <span class="count"><a href="#">{{organizationSettingData.exceptionCauseNoSetting}}</a></span>&nbsp;家门店
                    </div>
                </li>
                <li class="clearfix">
                    <div class="fl-left">付款方式未设置：</div>
                    <div class="fl-right">
                        <span class="count"><a href="#">{{organizationSettingData.paywayNoSetting}}</a></span>&nbsp;家门店
                    </div>
                </li>
                <li class="clearfix">
                    <div class="fl-left">打印机未设置：</div>
                    <div class="fl-right">
                        <span class="count"><a href="#">{{organizationSettingData.printerNoSetting}}</a></span>&nbsp;家门店
                    </div>
                </li>
                <li class="clearfix">
                    <div class="fl-left">餐谱未设置：</div>
                    <div class="fl-right">
                        <span class="count"><a href="#">{{organizationSettingData.mealNoSetting}}</a></span>&nbsp;家门店
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import MyEcharts from "../../utils/MyEcharts.js";
import EventBus from "../../utils/EventBus.js";
export default {
  props: ["healthData"],
  created() {
    this.organizationSettingData = this.healthData.organizationSetting;
    this.shopTotal = this.healthData.shopTotal;
    //计算百分比
    this.per = this.calcPer;
  },
  data() {
    return {
      shopTotal: 0,
      organizationSettingData: {},
      per: 0
    };
  },
  computed: {
    calcPer() {
      var tmp = 0;
      for (var k in this.organizationSettingData) {
        tmp +=
          (this.organizationSettingData[k] - 0) /
          (this.shopTotal - 0) *
          (1 / 6);
      }
      return 1 - tmp;
    }
  },
  mounted() {
    MyEcharts.initHealthDetectionEcharts("organizationSetting", this.per, 10);
  },
  methods: {
    handleShowShopList(event) {
      if (event.target.nodeName.toUpperCase() === "A") {
        this.$store.dispatch("setShopListShowStatus", true);
        this.$store.dispatch(
          "setHealthDetectionPath",
          "OrganizationSettingDetection"
        );
      }
    }
  }
};
</script>