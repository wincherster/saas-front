<template>
  <div>
  <el-table ref="multipleTable" :data="listData" tooltip-effect="dark" border :default-sort = "{prop: 'name', order: 'descending'}" style="width: 100%" @selection-change="handleSelectionChange" max-height="440">
    <el-table-column v-if="index" type="index" :index="indexMethod" ></el-table-column>
    <el-table-column v-if="checkBox" type="selection" ></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button v-if="buttons.del" @click.native.prevent="deleteRow(scope.$index)" type="text" size="small">删除</el-button>
        <el-button v-if="buttons.check" @click="handleClick(scope.row)" type="text" size="small">保存</el-button>
        <el-button v-if="buttons.edit" @click="editFrom(scope.$index+1,scope.row)" type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    <el-table-column  v-for="col in cols" :prop="col.prop" :label="col.label" :sortable="col.sort?true:false" ></el-table-column>
    
  </el-table>
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
</div>
</template>
<script>
  export default {
    props: ['tableData'],
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleClick(row){
        console.info(row)
      },
       toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      indexMethod(index) {
        console.info(index)
        return index * 2;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      editFrom(index,row){
        console.info(index,row)
        return false
        this.buttons.del=true;
        this.buttons.check=true;
        this.buttons.edit=false;
      }
    },
    data() {
       var tableDatas =this.tableData;
      return {
        // 根据配置 动态添加 操作 按钮
        buttons:tableDatas["buttons"]?tableDatas["buttons"]:{del:false,edit:false,check:false},
        // 表格是否显示 索引列 默认不显示
        index:tableDatas["index"]?tableDatas["index"]:false,
        // 表格是否显示 复选框 默认不显示
        checkBox:tableDatas["checkBox"]?tableDatas["checkBox"]:false,
        // 分页 初始化每页10条数据
        pageSize:tableDatas["pageSize"]?tableDatas["pageSize"]:10,
        // 分页 初始化总条数0
        total:tableDatas["total"]?tableDatas["total"]:0,
        // 分页 初始化当前页码 1
        currentPage:tableDatas["currentPage"]?tableDatas["currentPage"]:1,
        // 分页 初始化配置分页条数的数组 默认 10，20，30，40
        pageSizes: tableDatas["pageSizes"]&&tableDatas["pageSizes"].length>0?tableDatas["pageSizes"]:[10,20,30,40],
        multipleSelection: [],
        // 待显示的数据
        tableDataList:tableDatas["listData"]&&tableDatas["listData"].length>0?tableDatas["listData"]:[],
        // 表格动态设置表头
        colsData:tableDatas["cols"]&&tableDatas["cols"].length>0?tableDatas["cols"]:[],
      }
    },
    computed:{
      listData:function(){
        return this.tableDataList
      },
      cols:function(){
        return this.colsData
      }
    }
  }
</script>
<style scoped>
 
</style>