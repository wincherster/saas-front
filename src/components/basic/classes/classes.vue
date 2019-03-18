<!-- 班次设置 -->
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
    <el-table-column prop="code" label="编码" sortable></el-table-column>
    <el-table-column prop="class_item" label="名称" ></el-table-column>
    <el-table-column prop="start_property" label="开始属性" ></el-table-column>
    <el-table-column prop="start_time" label="开始时间" ></el-table-column>
    <el-table-column prop="end_property" label="结束属性" ></el-table-column>
    <el-table-column prop="end_time" label="结束时间" ></el-table-column>
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
        tableData:[{"tenancy_id":"fuhuaxinrui","id":1,"name":"ZB01","start_time":"06:00","end_time":"5:00","valid_state":"1","last_operator":"admin","last_updatetime":"2017-04-24 17:51:51","remark":"","start_property":"DR01","end_property":"CR02","code":"001","third_code":"","class_item":"早班"},{"tenancy_id":"fuhuaxinrui","id":2,"name":"ZB02","start_time":"10:30","end_time":"14:30","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 18:33:33","remark":"","start_property":"DR01","end_property":"DR01","code":"002","third_code":null,"class_item":"中班"},{"tenancy_id":"fuhuaxinrui","id":3,"name":"WB03","start_time":"16:00","end_time":"22:30","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 18:34:06","remark":"","start_property":"DR01","end_property":"DR01","code":"003","third_code":null,"class_item":"晚班"},{"tenancy_id":"fuhuaxinrui","id":4,"name":"YB04","start_time":"23:00","end_time":"5:30","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 18:46:18","remark":"","start_property":"DR01","end_property":"CR02","code":"004","third_code":null,"class_item":"夜班"},{"tenancy_id":"fuhuaxinrui","id":1001,"name":"ZB01","start_time":"09:00","end_time":"12:00","valid_state":"1","last_operator":"admin","last_updatetime":"2017-08-09 16:59:27","remark":"","start_property":"DR01","end_property":"DR01","code":"005","third_code":"","class_item":"早班"},{"tenancy_id":"fuhuaxinrui","id":1002,"name":"ZB02","start_time":"12:00","end_time":"18:00","valid_state":"1","last_operator":"admin","last_updatetime":"2017-08-09 17:00:14","remark":"","start_property":"DR01","end_property":"DR01","code":"006","third_code":"","class_item":"中班"},{"tenancy_id":"fuhuaxinrui","id":1003,"name":"WB03","start_time":"18:00","end_time":"22:00","valid_state":"1","last_operator":"admin","last_updatetime":"2017-08-09 17:00:41","remark":"","start_property":"DR01","end_property":"DR01","code":"007","third_code":"","class_item":"晚班"},{"tenancy_id":"fuhuaxinrui","id":1004,"name":"XWC05","start_time":"12:00","end_time":"14:30","valid_state":"1","last_operator":"admin","last_updatetime":"2017-11-21 11:12:51","remark":"饭后吃点甜点，比啥都好","start_property":"DR01","end_property":"DR01","code":"008","third_code":"","class_item":"下午茶"}],
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
          item.start_property = item.start_property=="DR01"?"当日":item.start_property=="CR02"?"次日":"";
          item.end_property = item.end_property=="DR01"?"当日":item.end_property=="CR02"?"次日":"";
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