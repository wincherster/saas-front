<!-- 口味备注设置 -->
<template>
  <el-container>
  <el-header>
    <div style="float:left">
       <el-button size="mini" icon="el-icon-plus" @click="saveFrom">新增</el-button>
    </div>
    <div style="float:right">
      <el-input placeholder="请输入内容" v-model="searchName" class="input-with-select">
    <el-select v-model="selectName" slot="prepend" placeholder="请选择" style="width:80px;">
      <el-option label="编号" value="1"></el-option>
      <el-option label="名称" value="2"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="searchByName"></el-button>
  </el-input>
    </div>
  </el-header>
  <el-container>
      <el-aside width="20%">
            <div style="line-height:20px;padding-top:5px;">
               <el-input placeholder="刷选条件" v-model.lazy="filterText" >
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
    <el-table-column prop="father_id" label="上级"></el-table-column>
    <el-table-column prop="code" label="编号" sortable></el-table-column>
    <el-table-column prop="name" label="名称" ></el-table-column>
    <el-table-column prop="third_code" label="第三方编码" ></el-table-column>
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
        searchName: '',
        selectName: '1',
        pageSize: 10,
        currentPage: 1,
        total:1000,
        tableData: [{"id":1,"code":"001","name":"口味类","pinyin_sy":"kwl","last_updatetime":"2017-04-24 17:23:43","father_id":0,"third_code":null,"last_operator":"admin","valid_state":"1","father_name":null,"parent_code":null},{"id":3,"code":"00102","name":"辣","pinyin_sy":"l","last_updatetime":"2015-09-17 18:01:24","father_id":1,"third_code":null,"last_operator":"system","valid_state":"1","father_name":"口味类","parent_code":"001"},{"id":4,"code":"00103","name":"加麻","pinyin_sy":"jm","last_updatetime":"2015-09-17 18:01:36","father_id":1,"third_code":null,"last_operator":"system","valid_state":"1","father_name":"口味类","parent_code":"001"},{"id":5,"code":"00104","name":"加麻加辣","pinyin_sy":"jmjl","last_updatetime":"2015-09-17 18:01:48","father_id":1,"third_code":null,"last_operator":"system","valid_state":"1","father_name":"口味类","parent_code":"001"},{"id":6,"code":"00105","name":"特辣","pinyin_sy":"tl","last_updatetime":"2015-09-17 18:02:00","father_id":1,"third_code":null,"last_operator":"system","valid_state":"1","father_name":"口味类","parent_code":"001"},{"id":7,"code":"00106","name":"咸","pinyin_sy":"x","last_updatetime":"2017-11-21 10:47:04","father_id":1,"third_code":null,"last_operator":"admin","valid_state":"1","father_name":"口味类","parent_code":"001"},{"id":8,"code":"00107","name":"微辣","pinyin_sy":"wl","last_updatetime":"2015-09-17 18:02:20","father_id":1,"third_code":null,"last_operator":"system","valid_state":"1","father_name":"口味类","parent_code":"001"},{"id":1001,"code":"00108","name":"免辣","pinyin_sy":"ml","last_updatetime":"2017-05-03 15:26:08","father_id":1,"third_code":null,"last_operator":"admin","valid_state":"1","father_name":"口味类","parent_code":"001"},{"id":1002,"code":"00109","name":"中辣","pinyin_sy":"zl","last_updatetime":"2017-04-24 17:24:38","father_id":1,"third_code":null,"last_operator":"admin","valid_state":"1","father_name":"口味类","parent_code":"001"},{"id":1003,"code":"00110","name":"免葱","pinyin_sy":"mc","last_updatetime":"2017-06-23 14:48:35","father_id":1,"third_code":null,"last_operator":"admin","valid_state":"1","father_name":"口味类","parent_code":"001"}],
        treeData:[{"children":[{"children":[],"code":"001","fatherId":0,"fid":"","id":1,"level":1,"text":"口味类","type":""},{"children":[],"code":"002","fatherId":0,"fid":"","itemd":1012,"level":1,"text":"做法类","type":""},{"children":[],"code":"003","fatherId":0,"fid":"","id":1028,"level":1,"text":"鲜榨果汁","type":""}],"code":"","fatherId":0,"fid":"","id":0,"level":0,"text":"= 口味备注 =","type":""}],
        treeDefaultProps: {
          children: 'children',
          label: 'text'
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
      filterText(val) {
        this.$refs.treeNode.filter(val);
      }
    },
    methods:{
      // 视图页新增按钮处理事件
      saveFrom(){
        this.$store.commit('setCacheData',{});
        this.$router.push({path:'addTasteNote'});
      },
       // 树组织 点击事件
      handleTreeNodeClick(data) {
        console.log("树组织节点被点击:"+JSON.stringify(data));
      },
      // 刷选树组织
      filterTreeNode(value, data){
        if (!value) return true;
        return data.text.indexOf(value) !== -1;
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
        this.$router.push({path:'addTasteNote'});
      },
      stop(index,row){
        console.info("将要被修改状态的数据:"+JSON.stringify(row))
      },
      allotStore(index,row){
        console.info("需要分配门店的数据:"+JSON.stringify(row))
        this.$router.push({path:'allot2Store'});
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

</style>