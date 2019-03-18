<template>
    <div class="box">
        <div class="inner-box">
          <div id="takeout" style="width:210px; height:210px;margin:0 auto;"></div>
          <h3>外卖健康度检测</h3>
          <ul @click='handleShowShopList($event)'>
              <li class="clearfix">
                  <div class="fl-left">外卖置休门店：</div>
                  <div class="fl-right">
                      <span class="count"><a href="#">{{takeoutData.takeoutRestShop}}</a></span>&nbsp;家门店
                  </div>
              </li>
              <li class="clearfix">
                  <div class="fl-left">下线状态门店：</div>
                  <div class="fl-right">
                      <span class="count"><a href="#">{{takeoutData.offlineStatusShop}}</a></span>&nbsp;家门店
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
    this.takeoutData = this.healthData.takeout;
    this.shopTotal = this.healthData.shopTotal;
    //计算百分比
    this.per = this.calcPer;
  },
  data() {
    return {
      shopTotal: 0,
      takeoutData: {},
      per: 0
    };
  },
  computed: {
    calcPer() {
      var tmp = 0;
      for (var k in this.takeoutData) {
        tmp += (this.takeoutData[k] - 0) / (this.shopTotal - 0) * (1 / 2);
      }
      return 1 - tmp;
    }
  },
  mounted() {
    MyEcharts.initHealthDetectionEcharts("takeout", this.per, 10);
  },
  methods:{
    handleShowShopList(event) {
      if (event.target.nodeName.toUpperCase() === "A") {
        this.$store.dispatch("setShopListShowStatus", true);
        this.$store.dispatch(
          "setHealthDetectionPath",
          "TakeOutDetection"
        );
      }
    }
  }
};
</script>