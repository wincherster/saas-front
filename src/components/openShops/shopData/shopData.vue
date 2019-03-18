<template>
  <div class="sd-contain">
    <!-- <iframe :src='"/tzxsaas/hqpages/hqmanagement/sourcedatamanagement/operationdatamanagement/openshopbusinessinformation.jsp?_s="+sessionId' class="iframeclass"></iframe> -->
    <!-- <form-ele></form-ele> -->
    <el-container v-if="isShow"> 
      <el-header>Header</el-header>
      <el-container>
        <!-- 左侧边栏 -->
        <el-aside>
          <!-- 搜索 -->
          <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
          <!-- 树形图 -->
          <el-tree class="filter-tree" :data="treeData" :props="defaultProps" 
            default-expand-all :filter-node-method="filterNode" ref="tree">
          </el-tree>
        </el-aside>
        <!-- 主体 -->
        <el-main>
          <el-table :data="tableData.rows" tooltip-effect="dark" style="width: 100%">
            <el-table-column prop="shopname" label="店名" :show-overflow-tooltip='true'></el-table-column>
            <el-table-column label="餐谱">
              <template slot-scope="scope">
                <span>{{ scope.row.cpid === null? "没有" : "有" }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="fkid" label="付款方式">
              <template slot-scope="scope">
                <span>{{ scope.row.fkid === null? "没有" : "有" }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="bcid" label="营业班次">
              <template slot-scope="scope">
                <span>{{ scope.row.bcid === null? "没有" : "有" }}</span>
              </template>     
            </el-table-column>
            <el-table-column prop="zwid" label="桌位">
              <template slot-scope="scope">
                <span>{{ scope.row.zwid === null? "没有" : "有" }}</span>
              </template>   
            </el-table-column>
            <el-table-column prop="fwid" label="服务费">
              <template slot-scope="scope">
                <span>{{ scope.row.fwid === null? "没有" : "有" }}</span>
              </template>   
            </el-table-column>
            <el-table-column prop="ycid" label="异常原因">
              <template slot-scope="scope">
                <span>{{ scope.row.ycid === null? "没有" : "有" }}</span>
              </template>   
            </el-table-column>
            <el-table-column prop="kwid" label="口味备注">
              <template slot-scope="scope">
                <span>{{ scope.row.kwid === null? "没有" : "有" }}</span>
              </template>   
            </el-table-column>
            <el-table-column prop="dyid" label="打印机">
              <template slot-scope="scope">
                <span>{{ scope.row.dyid === null? "没有" : "有" }}</span>
              </template>   
            </el-table-column>
            <el-table-column prop="cdid" label="厨打类别">
              <template slot-scope="scope">
                <span>{{ scope.row.cdid === null? "没有" : "有" }}</span>
              </template>   
            </el-table-column>
            <el-table-column prop="zkid" label="折扣方案">
              <template slot-scope="scope">
                <span>{{ scope.row.zkid === null? "没有" : "有" }}</span>
              </template>   
            </el-table-column>
            <el-table-column prop="sdtjid" label="时段特价">
              <template slot-scope="scope">
                <span>{{ scope.row.sdtjid === null? "没有" : "有" }}</span>
              </template>   
            </el-table-column>
            <el-table-column prop="jgid" label="机构参数">
              <template slot-scope="scope">
                <span>{{ scope.row.jgid === null? "没有" : "有" }}</span>
              </template>   
            </el-table-column>
            <el-table-column fixed="right"  label="操作" >
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页符 -->
          <div class="block clearfix">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
            :current-page="currentPage" prev-text='上一页' next-text='下一页'
              :page-sizes="[10, 20, 30, 40]"  :page-size="100" layout=" prev, pager, next, total, jumper, sizes"
              :total="400">
            </el-pagination>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <!-- 编辑弹框 -->
    <div v-if="!isShow" class="shopdata-popover">
      <shopdata-edit></shopdata-edit>
    </div>
   </div>
 </template>

<script>
  import formEle from '../../common/formEle.vue'
  import shopdataEdit from './children/shopdataEdit.vue'
  import { mapGetters,mapMutations, mapActions  } from 'vuex'
  export default{
    data() {
      return {
        isShow:true,
        filterText: '',
        currentPage:3,
        tableData:{
          "page":1,
          "total":125,
          "rows":[
            {"id":198,"shopname":"fanwentao","valid_state":"1","cpid":487,"fkid":10084,"bcid":2849,"zwid":850,"fwid":574,"ycid":4243,"kwid":4231,"cdid":null,"dyid":null,"zkid":380,"jgid":0,"dyjid":null,"zkfaid":380,"sdtjid":null},
            {"id":186,"shopname":"ljl测试店","valid_state":"1","cpid":485,"fkid":9947,"bcid":2851,"zwid":846,"fwid":566,"ycid":4071,"kwid":4158,"cdid":null,"dyid":null,"zkid":371,"jgid":0,"dyjid":null,"zkfaid":371,"sdtjid":null},
            {"id":185,"shopname":"小五正餐测试店tzxstar","valid_state":"1","cpid":469,"fkid":9946,"bcid":null,"zwid":844,"fwid":569,"ycid":4066,"kwid":null,"cdid":null,"dyid":null,"zkid":372,"jgid":0,"dyjid":null,"zkfaid":375,"sdtjid":null},
            {"id":184,"shopname":"fanwentao测试","valid_state":"1","cpid":468,"fkid":9936,"bcid":2842,"zwid":null,"fwid":562,"ycid":null,"kwid":null,"cdid":null,"dyid":null,"zkid":null,"jgid":0,"dyjid":null,"zkfaid":null,"sdtjid":null},
            {"id":181,"shopname":"朱磊测试门店","valid_state":"1","cpid":null,"fkid":9939,"bcid":null,"zwid":null,"fwid":null,"ycid":null,"kwid":null,"cdid":null,"dyid":null,"zkid":null,"jgid":0,"dyjid":null,"zkfaid":null,"sdtjid":null},
            {"id":180,"shopname":"朱磊测试配送中心","valid_state":"1","cpid":null,"fkid":9940,"bcid":null,"zwid":null,"fwid":null,"ycid":null,"kwid":null,"cdid":null,"dyid":null,"zkid":null,"jgid":0,"dyjid":null,"zkfaid":null,"sdtjid":null},
            {"id":178,"shopname":"测试门店","valid_state":"1","cpid":null,"fkid":9934,"bcid":null,"zwid":null,"fwid":null,"ycid":null,"kwid":null,"cdid":null,"dyid":null,"zkid":null,"jgid":0,"dyjid":null,"zkfaid":null,"sdtjid":null},
            {"id":174,"shopname":"济南测试","valid_state":"1","cpid":null,"fkid":9932,"bcid":2837,"zwid":null,"fwid":null,"ycid":null,"kwid":null,"cdid":null,"dyid":null,"zkid":null,"jgid":0,"dyjid":null,"zkfaid":null,"sdtjid":null},
            {"id":169,"shopname":"广州越秀区测试123","valid_state":"1","cpid":null,"fkid":9931,"bcid":null,"zwid":841,"fwid":520,"ycid":3975,"kwid":4050,"cdid":null,"dyid":null,"zkid":369,"jgid":0,"dyjid":null,"zkfaid":369,"sdtjid":null},
            {"id":168,"shopname":"青岛海鲜专卖店","valid_state":"1","cpid":null,"fkid":9929,"bcid":2835,"zwid":839,"fwid":null,"ycid":null,"kwid":null,"cdid":null,"dyid":null,"zkid":null,"jgid":0,"dyjid":null,"zkfaid":null,"sdtjid":null}
          ],
        },
        treeData: [{
          "children": [{
              "children": [{
                  "children": [],
                  "code": "0103",
                  "fatherId": 1,
                  "id": 8,
                  "level": 2,
                  "operatesum": 0,
                  "orguuid": "tzxstar_dy27laqjnoxq8dp9fm5z4073biuqcbwe",
                  "state": "",
                  "tenantstate": "1",
                  "text": "0103测试门店3",
                  "type": "3"
              }, {
                  "children": [],
                  "code": "0105",
                  "fatherId": 1,
                  "id": 10,
                  "level": 2,
                  "operatesum": 0,
                  "orguuid": "tzxstar_ecrkagxpu4mul5i08bfu90kfnoo661i2",
                  "state": "",
                  "tenantstate": "1",
                  "text": "0105测试门店5",
                  "type": "3"
              }, {
                  "children": [],
                  "code": "0106",
                  "fatherId": 1,
                  "id": 15,
                  "level": 2,
                  "operatesum": 0,
                  "orguuid": "tzxstar_dpun8ktxotht3j1639evmxhr0myrd1u",
                  "state": "",
                  "tenantstate": "1",
                  "text": "0106测试门店6",
                  "type": "3"
              }, {
                  "children": [],
                  "code": "0107",
                  "fatherId": 1,
                  "id": 16,
                  "level": 2,
                  "operatesum": 0,
                  "orguuid": "tzxstar_l66rpfabiezzeynjp48ya9zbs9yp1rcu",
                  "state": "",
                  "tenantstate": "1",
                  "text": "0107报表专用测试（勿动）",
                  "type": "3"
              }],
              "code": "01",
              "fatherId": 0,
              "id": 1,
              "level": 1,
              "operatesum": 0,
              "orguuid": "tzxstar_em90b5c81tcnpd5d98htybimjg2ayc2a",
              "state": "",
              "tenantstate": "1",
              "text": "01测试专用分公司",
              "type": "1"
          }],
          "code": "",
          "fatherId": "",
          "id": 0,
          "level": 0,
          "operatesum": 0,
          "orguuid": "",
          "state": "",
          "tenantstate": "",
          "text": "总部",
          "type": "1"
        }],
        defaultProps: {
          children: 'children',
          label: 'text'
        }
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods:{
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      // 编辑按钮
       handleClick(row) {
        this.isShow=!this.isShow;         
        console.log(row);
      },
      // 分页部分
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    computed:{
      ...mapGetters([
          'sessionId',
      ])
    },
    components:{
      formEle,shopdataEdit
    }
  } 
</script>
<style scoped>
  /* 布局样式 */
  .sd-contain{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .el-header {
    background-color: #B3C0D1;
    height: 50px!important;
    text-align: center;
  }
  .el-aside {
    width: 256px!important;
    height: 722px!important;
    background: #FEFEFE;
    text-align: center;
  }
  .el-main {
    padding: 0 0 0 6px ;
    background-color: #E9EEF3;
    text-align: left;
  }

  /* 头部样式 */

  /* 搜索框 */
  .shopdata-search>input {
    width: 230px;
    height: 32px;
  }

/* 树形结构 */
.el-tree{
  padding: 0 20px;
}
/* 分页符部分 */
.el-pagination {
  float: right;
}

/* 表格 */

/* 弹出框 */
.shopdata-popover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
}
</style>