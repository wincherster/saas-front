<template>
  <div class="nav">
      <div v-if='!isCollapse' class="toggle toggle-h" @click='isCollapse=!isCollapse'>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <div v-else class="toggle toggle-v" @click='isCollapse=!isCollapse'>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>

      <h1 v-if='!isCollapse' class="logo logo-h">天子星营运管理系统</h1>
      <h1 v-else class="logo logo-v">天子星</h1>

      <el-menu default-active="" class="el-menu-vertical-demo" :collapse="isCollapse" :unique-opened='true' >
        
        <!-- 一级菜单 -->
        <el-submenu :index="navItem1.code" v-for="(navItem1, index) in navData" :key="navItem1.code">
          <template slot="title" v-if='!isCollapse'>
            <i class="iconfont saas" :class="navItem1.icon"></i>
            <span slot="title">{{navItem1.title}}</span>
          </template>
          <template slot="title" v-else>
            <i class="iconfont saas" :class="navItem1.icon"></i>
            <span slot="title">{{navItem1.toggleTitle}}</span>
          </template>
          
          <!-- 二级菜单（无子菜单） -->
          <el-menu-item v-if='!navItem2.children' :index="navItem2.code" v-for="(navItem2, index) in navItem1.children" :key="navItem2.code">
            <a href='javascript:void(0)' @click.prevent='toLink(navItem2)'>{{navItem2.title}}</a>
          </el-menu-item>

          <!-- 二级菜单（有子菜单） -->
          <el-submenu v-else :index="navItem2.code">
            <span slot="title">{{navItem2.title}}</span>
            <!-- 三级菜单 -->
            <el-menu-item :index="navItem3.code" v-for="(navItem3, index) in navItem2.children" :key="navItem3.code">
              <a href='javascript:void(0)' @click.prevent='toLink(navItem3)'>{{navItem3.title}}</a>
            </el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
  </div>
</template>
<script>
export default {
  created(){
  },
  data() {
    return {
      navData: [
        {
          title: "基础设置哈哈哈",
          toggleTitle: "设置",
          level: 1,
          code: "l1",
          icon: "saas-aside-basicsetting",
          children: [
            {
              title: "运营字典维护呵呵呵呵呵呵呵呵呵呵",
              router: "/dictionaryDefend",
              active: false,
              level: 2,
              code: "l11"
            },
            {
              title: "异常原因设置",
              router: "/assignableCause",
              active: false,
              level: 2,
              code: "l12"
            },
            {
              title: "口味备注设置",
              router: "/tasteNote",
              active: false,
              level: 2,
              code: "l13"
            },
            {
              title: "收支类型设置",
              router: "/budgetType",
              active: false,
              level: 2,
              code: "l14"
            },
            {
              title: "付款方式设置",
              router: "/paymentMode",
              active: false,
              level: 2,
              code: "l15"
            },
            {
              title: "班次设置",
              router: "/classes",
              active: false,
              level: 2,
              code: "l16"
            },
            {
              title: "服务费管理",
              router: "/serviceCharge",
              active: false,
              level: 2,
              code: "l17"
            },
            {
              title: " 营运参数设置",
              router: "/operationParams",
              active: false,
              level: 2,
              code: "l18"
            }
          ]
        },
        {
          title: "第三方设置",
          toggleTitle: "第三方",
          level: 1,
          code: "l2",
          icon: "saas-aside-thirdparty",
          children: [
            {
              title: "待定",
              router: "/Test",
              active: false,
              level: 2,
              code: "l21"
            },
            {
              title: "待定",
              router: "/Test",
              active: false,
              level: 2,
              code: "l22"
            },
            {
              title: "待定",
              router: "/Test",
              active: false,
              level: 2,
              code: "l23"
            }
          ]
        },
        {
          title: "我要开店",
          toggleTitle: "开店",
          level: 1,
          code: "l3",
          icon: "saas-aside-openshop",
          children: [
            {
              title: "开店资料分配",
              router: "/shopData",
              active: false,
              level: 2,
              code: "l31"
            },
            {
              title: "桌位管理",
              router: "/reservations",
              active: false,
              level: 2,
              code: "l32"
            },
            {
              title: "新厨打设置",
              router: "/newKitchenPlay",
              active: false,
              level: 2,
              code: "l33"
            },
            {
              title: "老厨打设置",
              level: 2,
              code: "l34",
              children: [
                {
                  title: "打印机管理大大大大啊哒哒哒",
                  router: "/printerManagement",
                  active: false,
                  level: 3,
                  code: "l341"
                },
                {
                  title: "打印机设置",
                  router: "/printerSetup",
                  active: false,
                  level: 3,
                  code: "l342"
                },
                {
                  title: "打印格式设置",
                  router: "/printFormat",
                  active: false,
                  level: 3,
                  code: "l343"
                }
              ]
            },
            {
              title: "折扣权限设置",
              router: "/discountPower",
              active: false,
              level: 2,
              code: "l35"
            },
            {
              title: "PAD菜品格式显示",
              router: "/PADdisplay",
              active: false,
              level: 2,
              code: "l36"
            },
            {
              title: "POS常用参数设置",
              router: "/POSparams",
              active: false,
              level: 2,
              code: "l37"
            },
            {
              title: "付款方式显示设置",
              router: "/payModeDisplay",
              active: false,
              level: 2,
              code: "l38"
            }
          ]
        },
        {
          title: "菜品管理",
          toggleTitle: "菜品",
          level: 1,
          code: "l4",
          icon: "saas-aside-menu",
          children: [
            {
              title: "价格管理",
              router: "/price",
              active: false,
              level: 2,
              code: "l41"
            },
            {
              title: "菜品类别管理",
              router: "/menuType",
              active: false,
              level: 2,
              code: "l42"
            },
            {
              title: "菜品档案管理",
              router: "/menuRecord",
              active: false,
              level: 2,
              code: "l43"
            },
            {
              title: "菜品分组管理",
              router: "/menuGroup",
              active: false,
              level: 2,
              code: "l44"
            },
            {
              title: "餐谱管理",
              router: "/diet",
              active: false,
              level: 2,
              code: "l45"
            },
            {
              title: "变价管理",
              router: "/priceChange",
              active: false,
              level: 2,
              code: "l46"
            },
            {
              title: "菜品类别分类管理",
              router: "/typeClassify",
              active: false,
              level: 2,
              code: "l47"
            }
          ]
        },
        {
          title: "优惠管理",
          toggleTitle: "优惠",
          level: 1,
          code: "l5",
          icon: "saas-aside-discounts",
          children: [
            {
              title: "折扣方案",
              router: "/discountPlan",
              active: false,
              level: 2,
              code: "l51"
            },
            {
              title: "时段特价方案",
              router: "/timePriceWay",
              active: false,
              level: 2,
              code: "l52"
            }
          ]
        },
        {
          title: "设备管理",
          toggleTitle: "设备",
          level: 1,
          code: "l6",
          icon: "saas-aside-facility",
          children: [
            {
              title: "终端设备管理",
              router: "/terminalEquipment",
              active: false,
              level: 2,
              code: "l61"
            }
          ]
        },
        {
          title: "外卖管理",
          toggleTitle: "外卖",
          level: 1,
          code: "l7",
          icon: "saas-aside-takeout",
          children: [
            {
              title: "待定",
              router: "/Test",
              active: false,
              level: 3,
              code: "l71"
            }
          ]
        },
        {
          title: "挂账管理",
          toggleTitle: "挂账",
          level: 1,
          code: "l8",
          icon: "saas-aside-chargeaccount",
          children: [
            {
              title: "待定",
              router: "/Test",
              active: false,
              level: 2,
              code: "l81"
            }
          ]
        }
      ],
      isCollapse: true
    };
  },
  methods:{
    toLink(navItem){
      this.$store.dispatch('addNavTab', navItem);//分发action
      this.$router.push({path:navItem.router});//路由跳转
    }
  }
};
</script>
<style scoped>
.nav {
  height: 100%;
  position: relative;
}

.nav .toggle {
  width: 22px;
  height: 20px;
  position: absolute;
  top: 13px;
  right: -40px;
  background: #0c9aff;
  border-radius: 2.8px;
  vertical-align: middle;
}
.nav .toggle-h .line {
  opacity: 0.9;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(11, 146, 243, 0.2);
  border-radius: 93.24px;
  width: 7.6px;
  height: 1.1px;
  position: absolute;
  left: 7.2px;
}
.nav .toggle-h .line:first-child {
  top: 5px;
}
.nav .toggle-h .line:nth-child(2) {
  top: 9.45px;
}
.nav .toggle-h .line:last-child {
  bottom: 5px;
}

.nav .toggle-v .line {
  opacity: 0.9;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(11, 146, 243, 0.2);
  border-radius: 93.24px;
  height: 7.6px;
  width: 1.1px;
  position: absolute;
  top: 6.2px;
}
.nav .toggle-v .line:first-child {
  left: 6px;
}
.nav .toggle-v .line:nth-child(2) {
  left: 10.45px;
}
.nav .toggle-v .line:last-child {
  right: 6px;
}

.nav .logo {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  line-height: 20px;
  padding: 13px 0;
}
.nav .logo-h {
  width: 160px;
}
.nav .logo-v {
  width: 70px;
}

</style>
