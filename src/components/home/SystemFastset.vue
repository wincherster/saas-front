<template>
    <div class="system-fastset">
        <div class="title">
            <i class="iconfont icon-biaotibiaotou"></i>
            系统快速设置
        </div>
        <div class='split-line'></div> 
        <div class='content'>
          <div class="fast fastShop">
            <h3><i class="iconfont saas saas-page-openshop"></i>快速开店</h3>
            <ul class="clearfix">
              <li>
                <a href="javascript:void(0)" @click.prevent="toLink(bcsz)" :class="!bcsz.state?'a-no':''">
                  <div class="icon"></div>
                  <span>班次设置</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" @click.prevent="toLink(zwsz)" :class="!zwsz.state?'a-no':''">
                  <div class="icon"></div>
                  <span>桌位设置</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" @click.prevent="toLink(ycyy)" :class="!ycyy.state?'a-no':''">
                  <div class="icon"></div>
                  <span>异常原因</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" @click.prevent="toLink(fkfs)" :class="!fkfs.state?'a-no':''">
                  <div class="icon"></div>
                  <span>付款方式设置</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" @click.prevent="toLink(kwbz)" :class="!kwbz.state?'a-no':''">
                  <div class="icon"></div>
                  <span>口味备注</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="guide-line"></div>
          <div class="fast fastAddFood">
            <h3><i class="iconfont saas saas-page-menumanage"></i>快速添菜</h3>
            <ul class="clearfix">
              <li>
                <a href="javascript:void(0)" @click.prevent="toLink(cplb)" :class="!cplb.state?'a-no':''">
                  <div class="icon"></div>
                  <span>菜品类别管理</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" @click.prevent="toLink(cpdagl)" :class="!cpdagl.state?'a-no':''">
                  <div class="icon"></div>
                  <span>菜品档案管理</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" @click.prevent="toLink(cpgl)" :class="!cpgl.state?'a-no':''">
                  <div class="icon"></div>
                  <span>餐谱管理</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" @click.prevent="toLink(jggl)" :class="!jggl.state?'a-no':''">
                  <div class="icon"></div>
                  <span>价格管理</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" @click.prevent="toLink(dysz)" :class="!dysz.state?'a-no':''">
                  <div class="icon"></div>
                  <span>打印机设置</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" @click.prevent="toLink(kdzlfp)" :class="!kdzlfp.state?'a-no':''">
                  <div class="icon"></div>
                  <span>开店资料分配</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    toLink(item) {
      if (item.state) {
        this.$store.dispatch("addNavTab", item); //分发action
        this.$router.push({ path: item.router }); //路由跳转
      } else {
        return false;
      }
    }
  },
  created() {
    var result = {
      status: 200,
      msg: "ok",
      data: {
        fastShop: [
          // {
          //   title: "班次设置",
          //   code: "l16",
          //   router: "/classes"
          // },
          {
            title: "桌位设置",
            code: "l32",
            router: "/reservations"
          },
          {
            title: "异常原因设置",
            code: "l12",
            router: "/assignableCause"
          },
          {
            title: "付款方式设置",
            code: "l15",
            router: "/paymentMode"
          },
          {
            title: "口味备注设置",
            code: "l13",
            router: "/tasteNote"
          }
        ],
        fastAddFood: [
          {
            title: "菜品类别管理",
            code: "l42",
            router: "/menuType"
          },
          // {
          //   title: "菜品档案管理",
          //   code: "l43",
          //   router: "/menuRecord"
          // },
          {
            title: "餐谱管理",
            code: "l45",
            router: "/diet"
          },
          {
            title: "价格管理",
            code: "l41",
            router: "/price"
          },
          // {
          //   title: "打印机设置",
          //   code: "l342",
          //   router: "/printerSetup"
          // },
          {
            title: "开店资料分配",
            code: "l31",
            router: "/shopData"
          }
        ]
      }
    };

    this.fastShop = result.data.fastShop;
    this.fastAddFood = result.data.fastAddFood;

    for (let i = 0; i < this.codes.length; i++) {
      let code = this.codes[i]; //l12
      for (let j = 0; j < this.fastShop.length; j++) {
        let item = this.fastShop[j];
        if (item.code === code) {
          if (code === "l16") {
            this.bcsz.state = true;
            this.bcsz.code = item.code;
            this.bcsz.router = item.router;
            this.bcsz.title = item.title;
          } else if (code === "l32") {
            this.zwsz.state = true;
            this.zwsz.code = item.code;
            this.zwsz.router = item.router;
            this.zwsz.title = item.title;
          } else if (code === "l12") {
            this.ycyy.state = true;
            this.ycyy.code = item.code;
            this.ycyy.router = item.router;
            this.ycyy.title = item.title;
          } else if (code === "l15") {
            this.fkfs.state = true;
            this.fkfs.code = item.code;
            this.fkfs.router = item.router;
            this.fkfs.title = item.title;
          } else if (code === "l13") {
            this.kwbz.state = true;
            this.kwbz.code = item.code;
            this.kwbz.router = item.router;
            this.kwbz.title = item.title;
          }
        }
      }
      for (let j = 0; j < this.fastAddFood.length; j++) {
        let item = this.fastAddFood[j];
        if (item.code === code) {
          if (code === "l42") {
            this.cplb.state = true;
            this.cplb.code = item.code;
            this.cplb.router = item.router;
            this.cplb.title = item.title;
          } else if (code === "l43") {
            this.cpdagl.state = true;
            this.cpdagl.code = item.code;
            this.cpdagl.router = item.router;
            this.cpdagl.title = item.title;
          } else if (code === "l45") {
            this.cpgl.state = true;
            this.cpgl.code = item.code;
            this.cpgl.router = item.router;
            this.cpgl.title = item.title;
          } else if (code === "l41") {
            this.jggl.state = true;
            this.jggl.code = item.code;
            this.jggl.router = item.router;
            this.jggl.title = item.title;
          } else if (code === "l342") {
            this.dysz.state = true;
            this.dysz.code = item.code;
            this.dysz.router = item.router;
            this.dysz.title = item.title;
          } else if (code === "l31") {
            this.kdzlfp.state = true;
            this.kdzlfp.code = item.code;
            this.kdzlfp.router = item.router;
            this.kdzlfp.title = item.title;
          }
        }
      }
    }
  },
  data() {
    return {
      bcsz: { state: false },
      zwsz: { state: false },
      ycyy: { state: false },
      fkfs: { state: false },
      kwbz: { state: false },

      cplb: { state: false },
      cpdagl: { state: false },
      cpgl: { state: false },
      jggl: { state: false },
      dysz: { state: false },
      kdzlfp: { state: false },

      fastShop: [],
      fastAddFood: [],

      codes: [
        "l16",
        "l32",
        "l12",
        "l15",
        "l13",
        "l42",
        "l43",
        "l45",
        "l41",
        "l342",
        "l31"
      ]
    };
  }
};
</script>

<style scoped>
.system-fastset {
  background-color: #fff;
  border: 1px solid #e8eff4;
  margin-bottom: 9px;
  min-height: 414px;
  min-width: 1130px;
  overflow: hidden;
}
.system-fastset .title {
  text-align: left;
  font-size: 16px;
  color: #34495e;
  line-height: 41.2px;
  font-family: "PingFangSC-Regular";
  letter-spacing: 0;
}
.system-fastset .title .iconfont {
  margin-left: 10px;
  font-size: 16px;
  color: #0c9aff;
}
.system-fastset .split-line {
  height: 9.8px;
  width: 100%;
  opacity: 0.03;
  background-image: linear-gradient(-180deg, #434c94 0%, #ffffff 100%);
}
.system-fastset .content {
  background-color: #fff;
  position: relative;
}

.system-fastset .content .fast {
  width: 100%;
  height: 150px;
  /* background-color: yellow; */
  position: relative;
  z-index: 1;
}
.system-fastset .content .fastShop {
  margin-bottom: 35px;
}
.system-fastset .content .fast h3 {
  padding-top: 19.1px;
  margin-left: 40px;
  font-size: 14px;
  color: #34495e;
  line-height: 16px;
  font-weight: 300;
}
.system-fastset .content .fast h3 .iconfont {
  font-size: 16px;
  margin-right: 4px;
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
.system-fastset .content .fast ul {
  margin-left: 120px;
  /* background-color: pink; */
  margin-top: 12px;
  height: 83px;
}
.system-fastset .content .fast ul li {
  float: left;
  width: 78px;
  /* margin-right: 100px; */
  margin-right: 90px;
  position: relative;
}
.system-fastset .content .fast ul li a {
  display: block;
  text-align: center;
  /* background-color: blue; */
}
.system-fastset .content .fast ul li a.a-no {
  text-decoration: none;
  cursor: default;
}
.system-fastset .content .fast ul li a span {
  font-size: 13px;
  line-height: 13px;
  color: #34495e;
  vertical-align: middle;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.system-fastset .content .fast ul li a:hover span {
  color: #108ee9;
}
.system-fastset .content .fast ul li a.a-no span {
  color: #9aabb8;
}

.system-fastset .content .fast ul li a .icon {
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto 14px;
}

.system-fastset .content .fastShop ul li:nth-of-type(1) a .icon {
  background-image: url(../../assets/images/bcsz.png);
}
.system-fastset .content .fastShop ul li:nth-of-type(2) a .icon {
  background-image: url(../../assets/images/zwsz.png);
}
.system-fastset .content .fastShop ul li:nth-of-type(3) a .icon {
  background-image: url(../../assets/images/ycyy.png);
}
.system-fastset .content .fastShop ul li:nth-of-type(4) a .icon {
  background-image: url(../../assets/images/fkfs.png);
}
.system-fastset .content .fastShop ul li:nth-of-type(5) a .icon {
  background-image: url(../../assets/images/kwbz.png);
}
.system-fastset .content .fastShop ul li:nth-of-type(1) a.a-no .icon {
  background-image: url(../../assets/images/bcsz-no.png);
}
.system-fastset .content .fastShop ul li:nth-of-type(2) a.a-no .icon {
  background-image: url(../../assets/images/zwsz-no.png);
}
.system-fastset .content .fastShop ul li:nth-of-type(3) a.a-no .icon {
  background-image: url(../../assets/images/ycyy-no.png);
}
.system-fastset .content .fastShop ul li:nth-of-type(4) a.a-no .icon {
  background-image: url(../../assets/images/fkfs-no.png);
}
.system-fastset .content .fastShop ul li:nth-of-type(5) a.a-no .icon {
  background-image: url(../../assets/images/kwbz-no.png);
}

.system-fastset .content .fastAddFood ul li:nth-of-type(1) a .icon {
  background-image: url(../../assets/images/cplb.png);
}
.system-fastset .content .fastAddFood ul li:nth-of-type(2) a .icon {
  background-image: url(../../assets/images/cpdagl.png);
}
.system-fastset .content .fastAddFood ul li:nth-of-type(3) a .icon {
  background-image: url(../../assets/images/cpgl.png);
}
.system-fastset .content .fastAddFood ul li:nth-of-type(4) a .icon {
  background-image: url(../../assets/images/jggl.png);
}
.system-fastset .content .fastAddFood ul li:nth-of-type(5) a .icon {
  background-image: url(../../assets/images/dysz.png);
}
.system-fastset .content .fastAddFood ul li:nth-of-type(6) a .icon {
  background-image: url(../../assets/images/kdzlfp.png);
}
.system-fastset .content .fastAddFood ul li:nth-of-type(1) a.a-no .icon {
  background-image: url(../../assets/images/cplb-no.png);
}
.system-fastset .content .fastAddFood ul li:nth-of-type(2) a.a-no .icon {
  background-image: url(../../assets/images/cpdagl-no.png);
}
.system-fastset .content .fastAddFood ul li:nth-of-type(3) a.a-no .icon {
  background-image: url(../../assets/images/cpgl-no.png);
}
.system-fastset .content .fastAddFood ul li:nth-of-type(4) a.a-no .icon {
  background-image: url(../../assets/images/jggl-no.png);
}
.system-fastset .content .fastAddFood ul li:nth-of-type(5) a.a-no .icon {
  background-image: url(../../assets/images/dysz-no.png);
}
.system-fastset .content .fastAddFood ul li:nth-of-type(6) a.a-no .icon {
  background-image: url(../../assets/images/kdzlfp-no.png);
}

/*
.system-fastset .content .fast ul li::before {
  content: "";
  position: absolute;
  top: 35%;
  right: -78px;
  width: 51.5px;
  height: 0px;
  border-top: 2px dashed #f69557;
}
.system-fastset .content .fastAddFood ul li::before {
  border-top: 2px dashed #21c2cd;
}
.system-fastset .content .fast ul li:last-of-type::before {
  display: none;
}
.system-fastset .content .fast ul li::after {
  content: "";
  position: absolute;
  top: 28%;
  right: -80px;
  width: 12px;
  height: 12px;
  border: 2px solid #f69557;
  transform: rotate(45deg);
  border-bottom: none;
  border-left: none;
}
.system-fastset .content .fastAddFood ul li::after {
  border-color: #21c2cd;
}
.system-fastset .content .fast ul li:last-of-type::after {
  display: none;
}*/

.system-fastset .content .fastAddFood ul li:last-of-type {
  margin-right: 0;
}

.system-fastset .content .guide-line {
  background-image: url(../../assets/images/guide-line.png);
  background-repeat: no-repeat;
  background-size: 793px 195px;
  position: absolute;
  top: 70px;
  left: 152px;
  width: 793px;
  height: 195px;
}
</style>