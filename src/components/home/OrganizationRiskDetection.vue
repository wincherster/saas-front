<template>
    <div class="box" id="riskBox">
        <div class="inner-box">
          <div id="organizationRisk" style="width:210px; height:210px;margin:0 auto;"></div>
          <h3>机构风险健康度检测</h3>
          <ul @click='handleShowShopList($event)'>
              <li class="clearfix">
                  <div class="fl-left">餐谱即将到期门店：</div>
                  <div class="fl-right">
                      <span class="count"><a href="#">{{organizationRiskData.shopWillExpire}}</a></span>&nbsp;家门店
                  </div>
              </li>
          </ul>
        </div>
    </div>
</template>
<script>
import MyEcharts from "../../utils/MyEcharts.js";
export default {
  props: ["healthData"],
  created() {
    this.organizationRiskData = this.healthData.organizationRisk;
    this.shopTotal = this.healthData.shopTotal;
    //计算百分比
    this.per = this.calcPer;
  },
  data() {
    return {
      shopTotal: 0,
      organizationRiskData: {},
      per: 0
    };
  },
  computed: {
    calcPer() {
      var tmp = 0;
      for (var k in this.organizationRiskData) {
        tmp += (this.organizationRiskData[k] - 0) / (this.shopTotal - 0);
      }
      return 1 - tmp;
    }
  },
  mounted() {
    MyEcharts.initHealthDetectionEcharts("organizationRisk", this.per, 10);
  },
  methods:{
    handleShowShopList(event) {
      if (event.target.nodeName.toUpperCase() === "A") {
        this.$store.dispatch("setShopListShowStatus", true);
        this.$store.dispatch(
          "setHealthDetectionPath",
          "OrganizationRiskDetection"
        );
      }
    }
  }
};
</script>
<style scoped>
#riskBox {
  border-right: none;
}
#riskBox::before,#riskBox::after{
  display: none;
}
</style>

