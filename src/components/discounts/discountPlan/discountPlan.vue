<!-- 折扣方案 -->
<template>
  <el-container>
  <el-header>
    <div style="float:left">
      <el-button size="mini" icon="el-icon-plus">新增</el-button>
      <label>生效日期:</label>
      <el-date-picker v-model="value9" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" default-value="2017-10-01">
    </el-date-picker>
    <label>机构:</label>
    <el-select v-model="value7" multiple placeholder="请选择">
    <el-option-group
      v-for="group in options3"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
    <el-button size="mini" icon="el-icon-plus">重置</el-button>
      <el-button size="mini" icon="el-icon-plus">查询</el-button>
    </div>
    <div style="float:right">
      <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
    </div>
  </el-header>
      <el-main>
         <el-table border :data="tablesData" style="width: 100%" max-height="455">
           <el-table-column type="index" ></el-table-column>
           <el-table-column  label="操作" width="120">
      <template slot-scope="scope">
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">编辑</el-button>
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">分配门店</el-button>
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">停用</el-button>
      </template>
    </el-table-column>
    <el-table-column prop="discount_case_code" label="编码" sortable></el-table-column>
    <el-table-column prop="discount_case_name" label="方案名称" ></el-table-column>
    <el-table-column prop="dtype" label="折扣类型" ></el-table-column>
    <el-table-column prop="zero_norm" label="账单最低限额" ></el-table-column>
    <el-table-column prop="startdate" label="开始日期" ></el-table-column>
    <el-table-column prop="enddate" label="结束日期" ></el-table-column>
    <el-table-column prop="running_state" label="执行状态" ></el-table-column>
    <el-table-column prop="dcycle" label="执行周期" ></el-table-column>
    <el-table-column prop="last_operator" label="最后修改人" ></el-table-column>
    <el-table-column prop="last_updatetime" label="最后修改日期" ></el-table-column>
  </el-table>
      </el-main>
      <el-footer>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
    </el-pagination>
      </el-footer>
    </el-container>
  </el-container>
</el-container>
</template>
<script>
  import { mapGetters,mapMutations, mapActions  } from 'vuex'
  export default{
    data() {
      return {
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value7: [],
        value9: '',
        filterText:'',
        input5: '',
        select: '',
        tableData:[{"id":5,"discount_case_code":"0005","is_vipprice":null,"discount_case_name":"海象理财九折","discount_case_type":"FGD02","dtype":"非固定折扣","rate_renate":null,"zero_norm":0,"startdate":"2017-08-10","sarttime":"00:00","enddate":"2099-08-14","endtime":"23:59","rcycle":"01,02,03,04,05,06,07","dcycle":"星期一,星期二,星期三,星期四,星期五,星期六,星期天","running_state":"1","runstatus":"执行中","valid_state":"1","last_operator":"liuchao","last_updatetime":"2017-08-09 11:04:52","remark":"","px":"1"},{"id":2,"discount_case_code":"0002","is_vipprice":null,"discount_case_name":"整单八八折","discount_case_type":"FGD02","dtype":"非固定折扣","rate_renate":null,"zero_norm":0,"startdate":"2017-04-28","sarttime":"00:00","enddate":"2090-04-01","endtime":"23:59","rcycle":"01,02,03,04,05,06,07","dcycle":"星期一,星期二,星期三,星期四,星期五,星期六,星期天","running_state":"1","runstatus":"执行中","valid_state":"1","last_operator":"admin","last_updatetime":"2017-05-06 18:13:18","remark":"","px":"1"},{"id":1,"discount_case_code":"0001","is_vipprice":null,"discount_case_name":"八八折","discount_case_type":"FGD02","dtype":"非固定折扣","rate_renate":null,"zero_norm":0,"startdate":"2017-04-26","sarttime":"00:00","enddate":"2091-04-02","endtime":"23:59","rcycle":"01,02,03,04,05,06,07","dcycle":"星期一,星期二,星期三,星期四,星期五,星期六,星期天","running_state":"1","runstatus":"执行中","valid_state":"1","last_operator":"admin","last_updatetime":"2017-05-06 18:13:27","remark":"","px":"1"},{"id":6,"discount_case_code":"0006","is_vipprice":null,"discount_case_name":"七夕七七折","discount_case_type":"FGD02","dtype":"非固定折扣","rate_renate":null,"zero_norm":0,"startdate":"2017-08-26","sarttime":"00:00","enddate":"2017-08-28","endtime":"23:59","rcycle":"01,02,03,04,05,06,07","dcycle":"星期一,星期二,星期三,星期四,星期五,星期六,星期天","running_state":"2","runstatus":"执行中","valid_state":"1","last_operator":"liuchao","last_updatetime":"2017-08-24 18:41:20","remark":"","px":"2"},{"id":4,"discount_case_code":"0004","is_vipprice":null,"discount_case_name":"员工68折","discount_case_type":"FGD02","dtype":"非固定折扣","rate_renate":null,"zero_norm":0,"startdate":"2017-06-28","sarttime":"00:00","enddate":"2017-07-02","endtime":"23:59","rcycle":"01,02,03,04,05,06,07","dcycle":"星期一,星期二,星期三,星期四,星期五,星期六,星期天","running_state":"2","runstatus":"执行中","valid_state":"1","last_operator":"admin","last_updatetime":"2017-06-29 22:00:03","remark":"","px":"2"},{"id":3,"discount_case_code":"0003","is_vipprice":null,"discount_case_name":"二店员工68折","discount_case_type":"FGD02","dtype":"非固定折扣","rate_renate":null,"zero_norm":0,"startdate":"2017-06-28","sarttime":"00:00","enddate":"2017-07-02","endtime":"23:59","rcycle":"01,02,03,04,05,06,07","dcycle":"星期一,星期二,星期三,星期四,星期五,星期六,星期天","running_state":"2","runstatus":"终止","valid_state":"0","last_operator":"admin","last_updatetime":"2017-06-29 22:00:15","remark":"","px":"5"}],
        currentPage4: 4,
        defaultProps: {
          children: 'children',
          label: 'reasonName'
        }
      }
    },
    computed:{
        ...mapGetters([
            'sessionId',
        ]),
        tablesData:function(){
          let arrs = this.tableData;
         arrs.map(function(item,arrs){
          item.running_state = item.running_state=="1"?"执行中":item.running_state=="2"?"已停止":"";
         })
          return this.tableData;
        }
    },
    methods:{
      handleNodeClick(data) {
        console.log(data);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    }
  } 
</script>
<style>
  .el-header, .el-footer {
    border:solid 1px lightgrey;
    margin-bottom:5px;
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    /*background-color: #D3DCE6;*/
    /*color: #333;*/
    margin-right:5px;
    border:solid 1px lightgrey;
    text-align: center;
    line-height: 200px;
    height: 555px;
  }
  
  .el-main {
    /*background-color: #E9EEF3;*/
    /*color: #333;*/
    border:solid 1px lightgrey;
    text-align: center;
    /*line-height: 160px;*/
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>