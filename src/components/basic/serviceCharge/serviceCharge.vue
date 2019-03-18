<!-- 服务费管理 -->
<template>
  <el-container>
  <el-header>
    <div style="float:left">
      <el-button size="mini" icon="el-icon-plus">新增</el-button>
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
    <el-table-column prop="service_type_code" label="编码" sortable></el-table-column>
    <el-table-column prop="name" label="名称" ></el-table-column>
    <el-table-column prop="taken_mode_name" label="收取方式" ></el-table-column>
    <el-table-column prop="guding_jj" label="比例/金额" ></el-table-column>
    <el-table-column prop="zuidi_xfe" label="最低消费额" ></el-table-column>
    <el-table-column prop="fee_type_name" label="服务费类型" ></el-table-column>
    <el-table-column prop="remark" label="备注" ></el-table-column>
    <el-table-column prop="valid_state" label="状态|有效" ></el-table-column>
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
        filterText:'',
        input5: '',
        select: '',
        tableData:[{"tenancy_id":"fuhuaxinrui","id":1,"name":"专人服务费","guding_jj":0,"zuidi_xfe":0,"fwfl":null,"last_updatetime":"2015-09-17 18:02:36","taken_mode":"GD01","ismodify":"1","fee_type":"JB01","valid_state":"1","remark":"","last_operator":"system","account_code":null,"account_name":null,"subsidiary_ledger_code":null,"subsidiary_ledger_name":null,"service_type_code":"001","free_count":"N","general_rate":6,"smallscale_rate":3,"fee_type_name":"基本服务费","taken_mode_name":"固定金额"},{"tenancy_id":"fuhuaxinrui","id":2,"name":"包间服务费","guding_jj":0,"zuidi_xfe":0,"fwfl":0,"last_updatetime":"2015-09-17 18:03:25","taken_mode":"GD01","ismodify":"1","fee_type":"JB01","valid_state":"1","remark":"","last_operator":"system","account_code":null,"account_name":null,"subsidiary_ledger_code":null,"subsidiary_ledger_name":null,"service_type_code":"002","free_count":"N","general_rate":6,"smallscale_rate":3,"fee_type_name":"基本服务费","taken_mode_name":"固定金额"},{"tenancy_id":"fuhuaxinrui","id":3,"name":"开瓶服务费","guding_jj":0,"zuidi_xfe":0,"fwfl":null,"last_updatetime":"2015-09-17 18:03:09","taken_mode":"GD01","ismodify":"1","fee_type":"FJ02","valid_state":"1","remark":"","last_operator":"system","account_code":null,"account_name":null,"subsidiary_ledger_code":null,"subsidiary_ledger_name":null,"service_type_code":"003","free_count":"N","general_rate":6,"smallscale_rate":3,"fee_type_name":"附加服务费","taken_mode_name":"固定金额"},{"tenancy_id":"fuhuaxinrui","id":1001,"name":"客人赠送","guding_jj":0,"zuidi_xfe":0,"fwfl":null,"last_updatetime":"2017-11-21 11:14:11","taken_mode":"GD01","ismodify":"1","fee_type":"JB01","valid_state":"1","remark":"","last_operator":"admin","account_code":null,"account_name":null,"subsidiary_ledger_code":null,"subsidiary_ledger_name":null,"service_type_code":"004","free_count":"N","general_rate":6,"smallscale_rate":3,"fee_type_name":"基本服务费","taken_mode_name":"固定金额"}],
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
          item.valid_state = item.valid_state=="1"?"有效":"无效";
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