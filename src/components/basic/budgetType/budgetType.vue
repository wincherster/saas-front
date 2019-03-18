<!-- 收支类型设置 -->
<template>
  <el-container>
  <el-header>
    <div style="float:left">
      <el-button size="mini" icon="el-icon-plus" @click="saveFrom">新增</el-button>
    </div>
    <div style="float:right">
      <el-input placeholder="请输入内容" v-model="searchName" class="input-with-select">
    <el-select v-model="selectName" slot="prepend" placeholder="请选择" >
      <el-option label="名称" value="1"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="searchByName"></el-button>
  </el-input>
    </div>
  </el-header>
  <el-container>
    
      <el-aside width="20%">
          <div style="line-height:20px;padding-top:5px;">
             <el-input placeholder="刷选条件" v-model="filterText" class="input-height">
               <i class="el-icon-search el-input__icon" slot="suffix"></i>
             </el-input>
          </div>
          <div style="padding-top:10px;">
            <el-tree :data="treeData" :props="treeDefaultProps" @node-click="handleTreeNodeClick" :filter-node-method="filterTreeNode" ref="treeNode"></el-tree>
          </div>
          
      </el-aside>
    <el-container>
      <el-main>
         <el-table border :data="tablesData" style="width: 100%" max-height="455" :default-sort = "{prop: 'class_item', order: 'descending'}">
          <el-table-column type="index" ></el-table-column>
          <el-table-column  label="操作" >
      <template slot-scope="scope">
        <el-button @click.native.prevent="edit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
        <el-button @click.native.prevent="allotStore(scope.$index, scope.row)" type="text" size="small">分配门店</el-button>
        <el-button @click.native.prevent="stop(scope.$index, scope.row)" type="text" size="small">停用</el-button>
      </template>
    </el-table-column>
    <el-table-column prop="class_item" label="类型"></el-table-column>
    <el-table-column prop="inout_code" label="编号" sortable></el-table-column>
    <el-table-column prop="inout_name" label="名称" ></el-table-column>
    <el-table-column prop="remark" label="备注" ></el-table-column>
    <el-table-column prop="valid_state" label="状态|有效" 
      :filters="[{ text: '有效', value: '有效' }, { text: '无效', value: '无效' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
    </el-table-column>
    <el-table-column prop="last_operator" label="最后修改人" ></el-table-column>
    <el-table-column prop="last_updatetime" label="最后修改时间" ></el-table-column>
  </el-table>
      </el-main>
      <el-footer>
        <el-pagination @size-change="pageSizeChange" @current-change="pageCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 300]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
      </el-footer>
    </el-container>
  </el-container>
</el-container>
</template>
<script>
  export default{
    data() {
      return {
        filterText:'',
        select: '',
        searchName: '',
        selectName: '1',
        currentPage: 1,
        pageSize: 10,
        total: 1000,
        tableData:[{"tenancy_id":"fuhuaxinrui","id":1,"inout_name":"人事费用","inout_property":"ZC02","account_code":null,"account_name":null,"remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 18:07:36","inout_type":null,"inout_code":"001","father_name":null,"class_item":"费用支出"},{"tenancy_id":"fuhuaxinrui","id":2,"inout_name":"清洁费用","inout_property":"ZC02","account_code":null,"account_name":null,"remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 18:07:55","inout_type":null,"inout_code":"002","father_name":null,"class_item":"费用支出"},{"tenancy_id":"fuhuaxinrui","id":3,"inout_name":"办公费","inout_property":"ZC02","account_code":null,"account_name":null,"remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 18:08:05","inout_type":null,"inout_code":"003","father_name":null,"class_item":"费用支出"},{"tenancy_id":"fuhuaxinrui","id":4,"inout_name":"交通费","inout_property":"ZC02","account_code":null,"account_name":null,"remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 18:08:16","inout_type":null,"inout_code":"004","father_name":null,"class_item":"费用支出"},{"tenancy_id":"fuhuaxinrui","id":5,"inout_name":"营销费","inout_property":"ZC02","account_code":null,"account_name":null,"remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 18:08:30","inout_type":null,"inout_code":"005","father_name":null,"class_item":"费用支出"},{"tenancy_id":"fuhuaxinrui","id":6,"inout_name":"其他","inout_property":"ZC02","account_code":null,"account_name":null,"remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 18:08:43","inout_type":null,"inout_code":"006","father_name":null,"class_item":"费用支出"},{"tenancy_id":"fuhuaxinrui","id":1001,"inout_name":"旅游费用","inout_property":"ZC02","account_code":null,"account_name":null,"remark":"公司组织出去旅游","valid_state":"1","last_operator":"admin","last_updatetime":"2017-11-21 10:50:16","inout_type":null,"inout_code":"010","father_name":null,"class_item":"费用支出"}],
        currentPage4: 4,
        treeData:[{"inout_name":"费用支出","inout_property":"ZC02","id":"0","children":[{"id":1,"inout_property":"ZC02","inout_name":"人事费用"},{"id":2,"inout_property":"ZC02","inout_name":"清洁费用"},{"id":3,"inout_property":"ZC02","inout_name":"办公费"},{"id":4,"inout_property":"ZC02","inout_name":"交通费"},{"id":5,"inout_property":"ZC02","inout_name":"营销费"},{"id":6,"inout_property":"ZC02","inout_name":"其他"},{"id":1001,"inout_property":"ZC02","inout_name":"旅游费用"}]},{"inout_name":"营业外收入","inout_property":"SR01","id":"0","children":[{"id":7,"inout_property":"SR01","inout_name":"营业收入"},{"id":8,"inout_property":"SR01","inout_name":"潲水收入"},{"id":9,"inout_property":"SR01","inout_name":"罚款收入"}]}],
        treeDefaultProps: {
          children: 'children',
          label: 'inout_name'
        }
      }
    },
    computed:{
        tablesData:function(){
          let arrs = this.tableData;
         arrs.map(function(item,arrs){
          item.valid_state = item.valid_state=="1"?"有效":"无效";
          switch(item.father_id){
            case 1:
            item.father_id = "口味类";
            break;
            case 0:
            item.father_id = "= 口味备注 =";
            break;
            default:
            break

          }
         })
          return this.tableData;
        }
    },
    watch:{
      // 刷选树组织
      filterText(val) {
        this.$refs.treeNode.filter(val);
      }
    },
    methods:{
       // 视图页新增按钮处理事件
      saveFrom(){
        this.$store.commit('setCacheData',{});
        this.$router.push({path:'addBudgetType'});
      },
        // 树组织 点击事件
      handleTreeNodeClick(data) {
        console.log("树组织节点被点击:"+JSON.stringify(data));
      },
      // 刷选树组织
      filterTreeNode(value, data){
        if (!value) return true;
        return data.inout_name.indexOf(value) !== -1;
      },
       // 根据名称刷选事件
      searchByName(){
       let value = this.searchName;
       console.info("刷选的名称内容是:"+value)
      },
      // 获取当前每页的长度
      pageSizeChange(val) {
        console.info("每页显示的长度发生改变:"+`每页 ${val} 条`)
      },
      // 获取当前页
      pageCurrentChange(val) {
        console.info("当前页发生改变:"+`当前是第: ${val} 页`)
      },
      edit(index,row){
        this.$store.commit('setCacheData',row);
        this.$router.push({path:'addBudgetType'});
      },
      stop(index,row){
        console.info("将要被修改状态的数据:"+JSON.stringify(row))
      },
      allotStore(index,row){
        console.info("需要分配门店的数据:"+JSON.stringify(row))
        this.$router.push({path:'allotStore'});
      },
      filterTag(value, row) {
        return row.valid_state === value;
      }
    }
  } 
</script>
<style scoped>
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
    height: 558px;
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
 .el-select{
  width:80px;
}
</style>