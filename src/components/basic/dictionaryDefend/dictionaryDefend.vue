<!-- 运营字典维护 -->
<template>
  <div>
  <el-container>
  <el-header>
        <div style="float:left">
          <el-button size="mini" icon="el-icon-plus" @click="saveFrom">新增</el-button>
        </div>
        <div style="float:right">
          <el-input placeholder="根据名称刷选" v-model="searchName" class="input-with-select">
            <el-select v-model="selectName" slot="prepend" placeholder="请选择">
              <el-option label="名称" value="1"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="searchByName"></el-button>
          </el-input>
        </div>
  </el-header>
  <el-container>
      <el-aside width="20%">
          <div style="line-height:20px;padding-top:5px;">
             <el-input placeholder="刷选条件" v-model="filterText">
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
                <el-button @click.native.prevent="edit(scope.row)" type="text" size="small">编辑</el-button>
                <el-button @click.native.prevent="stop(scope.$index, scope.row)" type="text" size="small">停用</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="class_identifier" label="类型"></el-table-column>
            <el-table-column prop="class_item" label="名称" sortable></el-table-column>
            <el-table-column prop="remark" label="备注" ></el-table-column>
            <el-table-column prop="valid_state" label="状态|有效" 
              :filters="[{ text: '有效', value: '有效' }, { text: '无效', value: '无效' }]"
              :filter-method="filterTag"
              filter-placement="bottom-end">
            </el-table-column>
          </el-table>
      </el-main>
    <el-footer>
      <el-pagination @size-change="pageSizeChange" @current-change="pageCurrentChange" :current-page="currentPage" :page-sizes="[10, 30, 200]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </el-footer>
    </el-container>
  </el-container>
</el-container>
</div>
</template>
<script>
  export default{
    data() {
      return {
        filterText:'',
        searchName: '',
        selectName: '1',
        currentPage: 1,
        pageSize: 10,
        total: 1000,
        tableData: [{"id":10124,"class_identifier_code":"business_area","class_item":"一楼","remark":"","class_identifier":"营业区域","valid_state":"1","class_item_code":""},{"id":735,"class_identifier_code":"arealevel","class_item":"一线城市","remark":null,"class_identifier":"地区级别","valid_state":"1","class_item_code":"001"},{"id":741,"class_identifier_code":"arealevel","class_item":"三线城市","remark":null,"class_identifier":"地区级别","valid_state":"1","class_item_code":"003"},{"id":10126,"class_identifier_code":"table_property","class_item":"二楼","remark":"","class_identifier":"餐位类型","valid_state":"1","class_item_code":""},{"id":738,"class_identifier_code":"arealevel","class_item":"二线城市","remark":null,"class_identifier":"地区级别","valid_state":"1","class_item_code":"002"},{"id":752,"class_identifier_code":"table_property","class_item":"六人台","remark":null,"class_identifier":"餐位类型","valid_state":"1","class_item_code":null},{"id":10146,"class_identifier_code":"method","class_item":"刺身","remark":"","class_identifier":"菜品做法","valid_state":"1","class_item_code":""},{"id":10141,"class_identifier_code":"method","class_item":"剁椒","remark":"","class_identifier":"菜品做法","valid_state":"1","class_item_code":""},{"id":723,"class_identifier_code":"bussinessmode","class_item":"加盟","remark":null,"class_identifier":"经营方式","valid_state":"1","class_item_code":null},{"id":10128,"class_identifier_code":"table_property","class_item":"包间","remark":"","class_identifier":"餐位类型","valid_state":"1","class_item_code":""}],
        treeData: [{"children":[],"code":"","fatherId":0,"fid":"","id":1,"level":0,"text":"餐位类型","type":"table_property"},{"children":[],"code":"","fatherId":0,"fid":"","id":2,"level":0,"text":"营业区域","type":"business_area"},{"children":[],"code":"","fatherId":0,"fid":"","id":3,"level":0,"text":"菜品做法","type":"method"},{"children":[],"code":"","fatherId":0,"fid":"","id":4,"level":0,"text":"经营方式","type":"bussinessmode"},{"children":[],"code":"","fatherId":0,"fid":"","id":5,"level":0,"text":"店面级别","type":"storelevel"},{"children":[],"code":"","fatherId":0,"fid":"","id":6,"level":0,"text":"地区级别","type":"arealevel"},{"children":[],"code":"","fatherId":0,"fid":"","id":7,"level":0,"text":"营销类别","type":"marketingtype"},{"children":[],"code":"","fatherId":0,"fid":"","id":11,"level":0,"text":"活动使用场景","type":"scenario"}],
        treeDefaultProps: {
          children: 'children',
          label: 'text'
        }
      }
    },
    created:function(){
      let self = this;
      // 测试axios前后交互
      // this.$http.get('/api/yjzx/research_project/1/10')
      //       .then(function(res){
      //           console.info(res.data);
      //           })
      //       .catch(function(err){
      //           console.info(err)
      //           })
    },
    computed:{
        tablesData:function(){
          let arrs = this.tableData;
         arrs.map(function(item,arrs){
          item.valid_state = item.valid_state=="1"?"有效":"无效";
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
        this.$router.push({path:'addDictionaryDefend'});
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
      // 编辑操作
      edit(row){
        // 将当前数据缓存起来
        this.$store.commit('setCacheData',row);
        this.$router.push({path:'addDictionaryDefend'});
      },
      // 获取当前每页的长度
      pageSizeChange(val) {
        console.info("每页显示的长度发生改变:"+`每页 ${val} 条`)
      },
      // 获取当前页
      pageCurrentChange(val) {
        console.info("当前页发生改变:"+`当前是第: ${val} 页`)
      },
      // 停用操作
      stop(index,row) {
        console.info("将要被修改状态的数据:"+JSON.stringify(row))
      },
      // 状态过滤
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