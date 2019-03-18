<template>
  <div class="shoplist">
      <transition name="fade">
        <div class="shade" v-if="shopListShowStatus"></div>
      </transition>
      <transition name="slide-fade">
        <div class="myDialog" v-if="shopListShowStatus">
          <h4 class="title clearfix">
            门店列表
            <i class="iconfont saas saas-nav-closehover" @click="closeDialog"></i>
          </h4>
          
          <div class="brand">
            <el-tabs
                  v-model='activeBrand'>
                  <el-tab-pane 
                      v-for='item in brandList'
                      :key='item.id'
                      :label='item.org_full_name'
                      :name='item.id'>
                      </el-tab-pane>
              </el-tabs>
          </div>

          <div class="content">
              <el-table
                :data="shopListForBrand"
                style="width: 100%">
                <el-table-column
                  label="门店名称/编号" >
                  <template slot-scope="scope">
                    <a href="#" @click.prevent="toLink">
                      <div>{{ scope.row.shopName }}</div>
                      <div>{{ scope.row.code }}</div>
                    </a>
                  </template>
                </el-table-column>
                <el-table-column
                  label="上级机构" >
                  <template slot-scope="scope">
                    <div>{{ scope.row.upLevelOrganization | wordNumberRestrictionFilter }}</div>
                  </template>
                </el-table-column>
                <el-table-column
                  label="联系人/电话">
                  <template slot-scope="scope">
                    <div>{{ scope.row.contacts }}</div>
                    <div>{{ scope.row.phone }}</div>
                  </template>
                </el-table-column>
              </el-table>
          </div>
        </div>
      </transition>

    {{getShopListShowStatus}}
    {{getHealthDetectionPath}}
  </div>  
</template>
<script>
import "../../assets/less/saas-shoplist-table.less";

export default {
  created() {
    //1.获取品牌数据
    var result1 = {
      success: true,
      code: 0,
      msg: "",
      data: [
        { id: "445", org_full_name: "小肥羊", org_type: "4", active: 1 },
        { id: "446", org_full_name: "海底捞", org_type: "4", active: 0 },
        { id: "447", org_full_name: "麦当劳", org_type: "4", active: 0 },
        { id: "448", org_full_name: "肯德基", org_type: "4", active: 0 },
        { id: "449", org_full_name: "李先生", org_type: "4", active: 0 },
        { id: "450", org_full_name: "披萨", org_type: "4", active: 0 }
      ]
    };
    this.brandList = result1.data;
    this.activeBrand = result1.data.find(item => {
      return item.active == 1;
    }).id;

    //2. 获取品牌下所有门店列表
    let activeBrand = result1.data.find(item => {
      return item.active == 1;
    });
    var activeBrandId = activeBrand.id;
    //2.2 根据品牌ID查询出该品牌下所有的门店
    var result2 = {
      status: 200,
      msg: "ok",
      data: [
        {
          id: "001",
          shopName: "北京上地华联店",
          code: "0090989",
          upLevelOrganization: "北京朝阳阜通西大街桥东",
          contacts: "张学军1",
          phone: "18600199291"
        },
        {
          id: "002",
          shopName: "海底捞上地华联店",
          code: "0090990",
          upLevelOrganization: "上海区",
          contacts: "张学军2",
          phone: "18600199292"
        },
        {
          id: "003",
          shopName: "北京海淀店",
          code: "0090991",
          upLevelOrganization: "北京区",
          contacts: "张学军3",
          phone: "18600199293"
        },
        {
          id: "004",
          shopName: "北京朝阳店",
          code: "0090992",
          upLevelOrganization: "北京区",
          contacts: "张学军4",
          phone: "18600199294"
        },
        {
          id: "005",
          shopName: "北京顺义店",
          code: "0090993",
          upLevelOrganization: "北京区",
          contacts: "张学军5",
          phone: "18600199295"
        },
        {
          id: "006",
          shopName: "北京东城店",
          code: "0090994",
          upLevelOrganization: "北京区",
          contacts: "张学军6",
          phone: "18600199296"
        }
      ]
    };
    this.shopListForBrand = result2.data;
  },
  data() {
    return {
      brandList: [],
      shopListForBrand: [],
      activeBrand: "",
      shopListShowStatus: false,
      healthDetectionPath: ''
    };
  },
  methods: {
    closeDialog() {
      this.$store.dispatch("setShopListShowStatus", false);
      this.$store.dispatch("setShopListShowStatus", "");
    },
    toLink() {
      console.log(this.healthDetectionPath);
      if(this.healthDetectionPath === 'OrganizationSettingDetection'){
        //跳转开店资料分配页面
        let shopData = {"title":"开店资料分配","router":"/shopData","active":false,"level":2,"code":"l31"};
        this.$store.dispatch("addNavTab", shopData);
        this.$router.push({path: shopData.router});

      }else if(this.healthDetectionPath === 'TakeOutDetection'){
        //跳转外卖异常查询页面
        let assignableCause = {"title":"异常原因设置","router":"/assignableCause","active":false,"level":2,"code":"l12"};
        this.$store.dispatch("addNavTab", assignableCause);
        this.$router.push({path: assignableCause.router});

      }else if(this.healthDetectionPath === 'OrganizationRiskDetection'){
        //跳转餐谱管理页面
        let diet = {"title":"餐谱管理","router":"/diet","active":false,"level":2,"code":"l45"};
        this.$store.dispatch("addNavTab", diet);
        this.$router.push({path: diet.router});

      }else {
        //无权限
        console.log('无权限');
      }
    }
  },
  filters: {
    wordNumberRestrictionFilter: function(value) {
      if (value.length > 10) {
        return value.slice(0, 10) + "...";
      } else {
        return value;
      }
    }
  },
  computed: {
    getShopListShowStatus() {
      this.shopListShowStatus = this.$store.getters.getShopListShowStatus;
    },
    getHealthDetectionPath() {
      this.healthDetectionPath = this.$store.getters.getHealthDetectionPath;
    }
  }
};
</script>

<style lang=less scoped>
.shoplist {
  .shade {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 8888;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .myDialog {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 360px;
    background-color: #f7f9fb;
    z-index: 8889;
    box-shadow: 0 0 20px 0 rgba(106, 134, 179, 0.22);
    .title {
      height: 46px;
      line-height: 46px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #243546;
      font-weight: 500;
      position: relative;
      padding-left: 20px;
      background: #f7fafc;
      .iconfont {
        width: 22px;
        height: 22px;
        position: absolute;
        top: 50%;
        right: 14px;
        margin-top: -11px;
        padding: 4px;
        font-size: 14px;
        transition: all 0.5s;
        &:hover {
          cursor: pointer;
          color: red;
          transform: rotate(180deg);
        }
      }
    }
    .brand {
      background: #fff;
      height: 36px;
      max-height: 36px;
    }
    .content {
      padding: 16px 0;
      background-color: #fff;
    }
  }
}

.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .slide-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(360px);
  opacity: 0;
}
</style>

