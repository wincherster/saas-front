<!-- 桌位管理 -->
<template>
  <div>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <!-- 左新增 -->
        <div style="float:left">
          <el-button size="mini" icon="el-icon-plus" @click="saveFrom">新增</el-button>
        </div>
        <!-- 复制 -->
        <div style="float:left">
          <el-button size="mini" icon="el-icon-plus" >复制</el-button>
        </div>
        <!-- 右侧搜索 -->
        <div style="float:right">
          <el-input  v-model="searchName" class="input-with-select">
            <el-select v-model="selectName" slot="prepend" >
              <el-option label="编号" value="0"></el-option>
              <el-option label="名称" value="1"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="searchByName"></el-button>
          </el-input>
        </div>
      </el-header>
        <!-- 左侧筛选条件框 -->
        <el-container>
          <div style="line-height:20px;padding-top:5px;">
             <el-input placeholder="筛选条件" v-model.lazy="filterText" class="input-height"></el-input>
          </div>
        </el-container>
        <!-- 左侧边栏 -->
        <el-container>
          <el-aside width="20%">
            <el-tree
              :data="data3"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[2, 3]"
              :default-checked-keys="[5]">
            </el-tree>
          </el-aside>
          <el-container>
            <!-- 主体内容 -->
            <el-main>
              <el-tabs type="border-card">
                <el-tab-pane label="桌位管理">
                    <el-table
                      :data="tableData"
                      border
                      style="width: 100%" max-height="450">
                      <el-table-column
                        fixed
                        prop="index"
                        label=""
                        width="50">
                      </el-table-column>
                      <el-table-column
                        label="操作"
                        width="100">
                        <template slot-scope="scope">
                          <el-button @click="handleClick(scope.row)" type="text" size="mini">
                            <i class="el-icon-edit"></i>
                          </el-button>
                          <el-button type="text" size="mini">
                            <i class="el-icon-remove"></i>
                          </el-button>
                        </template>
                      </el-table-column>
                      <el-table-column
                        prop="agent"
                        label="机构"
                        width="70">
                      </el-table-column>
                      <el-table-column
                        prop="code"
                        label="编号"
                        width="50">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="名称"
                        width="50">
                      </el-table-column>
                      <el-table-column
                        prop="type"
                        label="餐位类型"
                        width="80">
                      </el-table-column>
                      <el-table-column
                        prop="district"
                        label="营业区域"
                        width="80">
                      </el-table-column>
                      <el-table-column
                        prop="amount"
                        label="座位数"
                        width="60">
                      </el-table-column>
                      <el-table-column
                        prop="servince"
                        label="服务费"
                        width="60">
                      </el-table-column>
                      <el-table-column
                        prop="yorn"
                        label="是否单桌营业"
                        width="120">
                      </el-table-column>
                      <el-table-column
                        prop="status"
                        label="状态|全部"
                        width="80">
                      </el-table-column>
                      <el-table-column
                        prop="tip"
                        label="备注"
                        width="80">
                      </el-table-column>
                      <el-table-column
                        prop="person"
                        label="最后修改人"
                        width="80">
                      </el-table-column>
                      <el-table-column
                        prop="time"
                        label="最后修改人"
                        width="80">
                      </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="等位队列类型设置">配置管理</el-tab-pane>
                <el-tab-pane label="排号时间段设置">
                    <el-table
                      :data="tableData2"
                      border
                      style="width: 100%">
                      <el-table-column
                        fixed
                        prop="date"
                        label="操作"
                        width="100">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="名称"
                        width="100">
                      </el-table-column>
                      <el-table-column
                        prop="province"
                        label="开始时间"
                        width="100">
                      </el-table-column>
                      <el-table-column
                        prop="city"
                        label="结束时间"
                        width="100">
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="备注"
                        width="100">
                      </el-table-column>
                      <el-table-column
                        prop="zip"
                        label=""
                        width="">
                      </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="必点菜品">
                    <div class="button">
                      <button>三人桌</button>
                      <button>十八人台</button>
                      <button>四人台</button>
                      <button>八人台</button>
                      <button>十人台</button>
                      <button>十六人台</button>
                      <button>十四人台</button>
                      <button>六人台</button>
                      <button>十二人台</button>
                      <button>二人台</button>
                      <button>二十人台</button>
                    </div>
                    <el-table
                      :data="tableData2"
                      border
                      style="width: 100%">
                      <el-table-column
                        fixed
                        prop="date"
                        label="操作"
                        width="100">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="名称"
                        width="100">
                      </el-table-column>
                      <el-table-column
                        prop="province"
                        label="开始时间"
                        width="100">
                      </el-table-column>
                      <el-table-column
                        prop="city"
                        label="结束时间"
                        width="100">
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="备注"
                        width="100">
                      </el-table-column>
                      <el-table-column
                        prop="zip"
                        label=""
                        width="">
                      </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="禁点菜品">
                  <div class="button">
                    <button>三人桌</button>
                    <button>十八人台</button>
                    <button>四人台</button>
                    <button>八人台</button>
                    <button>十人台</button>
                    <button>十六人台</button>
                    <button>十四人台</button>
                    <button>六人台</button>
                    <button>十二人台</button>
                    <button>二人台</button>
                    <button>二十人台</button>
                  </div>
                  <el-table
                    :data="tableData2"
                    border
                    style="width: 100%">
                    <el-table-column
                      fixed
                      prop="date"
                      label="操作"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="名称"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="province"
                      label="开始时间"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="city"
                      label="结束时间"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="备注"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="zip"
                      label=""
                      width="">
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
              </el-tabs>
            </el-main>
            <!-- 底部 -->
            <el-footer>
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage4"
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="200">
                </el-pagination>
              </div>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
  </div>
</template>
<script>
  import { mapGetters,mapMutations, mapActions  } from 'vuex'
  export default{
    data() {
      return {
        filterText:'',
        searchName: '',
        selectName: '1',
        data3: [{
          id: 1,
          label: '总部',
          children: [{
            id: 3,
            label: '01测试专用分公司',
            children: [{
              id: 4,
              label: '0103测试门店3'
            }, {
              id: 5,
              label: '0105测试门店5',
            }]
          }, {
            id: 2,
            label: '02实施专用分公司',
            children: [{
              id: 6,
              label: '0201实施门店1'
            }, {
              id: 7,
              label: '0201实施门店2',
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData: [{
          index: '1',
          agent:'实施专用101',
          code:'101',
          name: '001',
          type:'十六人台',
          district: 'A区',
          city: '普陀区',
          amount: '0',
          servince: '',
          yorn:'否',
          status:'有效',
          tip:'',
          person:'admin',
          time:'2015-10-28 11:59:08'
          },{
            index: '1',
            agent:'实施专用101',
            code:'101',
            name: '001',
            type:'十六人台',
            district: 'A区',
            city: '普陀区',
            amount: '0',
            servince: '',
            yorn:'否',
            status:'有效',
            tip:'',
            person:'admin',
            time:'2015-10-28 11:59:08'
          },{
            index: '1',
            agent:'实施专用101',
            code:'101',
            name: '001',
            type:'十六人台',
            district: 'A区',
            city: '普陀区',
            amount: '0',
            servince: '',
            yorn:'否',
            status:'有效',
            tip:'',
            person:'admin',
            time:'2015-10-28 11:59:08'
          },{
            index: '1',
            agent:'实施专用101',
            code:'101',
            name: '001',
            type:'十六人台',
            district: 'A区',
            city: '普陀区',
            amount: '0',
            servince: '',
            yorn:'否',
            status:'有效',
            tip:'',
            person:'admin',
            time:'2015-10-28 11:59:08'
          },{
            index: '1',
            agent:'实施专用101',
            code:'101',
            name: '001',
            type:'十六人台',
            district: 'A区',
            city: '普陀区',
            amount: '0',
            servince: '',
            yorn:'否',
            status:'有效',
            tip:'',
            person:'admin',
            time:'2015-10-28 11:59:08'
          },{
            index: '1',
            agent:'实施专用101',
            code:'101',
            name: '001',
            type:'十六人台',
            district: 'A区',
            city: '普陀区',
            amount: '0',
            servince: '',
            yorn:'否',
            status:'有效',
            tip:'',
            person:'admin',
            time:'2015-10-28 11:59:08'
          },{
            index: '1',
            agent:'实施专用101',
            code:'101',
            name: '001',
            type:'十六人台',
            district: 'A区',
            city: '普陀区',
            amount: '0',
            servince: '',
            yorn:'否',
            status:'有效',
            tip:'',
            person:'admin',
            time:'2015-10-28 11:59:08'
          },{
            index: '1',
            agent:'实施专用101',
            code:'101',
            name: '001',
            type:'十六人台',
            district: 'A区',
            city: '普陀区',
            amount: '0',
            servince: '',
            yorn:'否',
            status:'有效',
            tip:'',
            person:'admin',
            time:'2015-10-28 11:59:08'
          },{
            index: '1',
            agent:'实施专用101',
            code:'101',
            name: '001',
            type:'十六人台',
            district: 'A区',
            city: '普陀区',
            amount: '0',
            servince: '',
            yorn:'否',
            status:'有效',
            tip:'',
            person:'admin',
            time:'2015-10-28 11:59:08'
          },{
            index: '1',
            agent:'实施专用101',
            code:'101',
            name: '001',
            type:'十六人台',
            district: 'A区',
            city: '普陀区',
            amount: '0',
            servince: '',
            yorn:'否',
            status:'有效',
            tip:'',
            person:'admin',
            time:'2015-10-28 11:59:08'
          }],
        tableData2:[],
        currentPage4: 1
      }
    },
    computed:{
        // ...mapGetters([
        //     'sessionId',
        // ]),
    },
    methods:{
      // 新增按钮处理事件
      saveFrom(){
        this.$router.push({path:'addTableManagement'});
      },
      // 根据名称或编号刷选事件
      searchByName(){
       let value = this.searchName;
       console.info("刷选的名称内容是:"+value)
      },
      // 状态过滤
      filterTag(value, row) {
        return row.valid_state === value;
      },
      //表格方法
      handleClick(row) {
        console.log(row);
      },
       // 底部分页     
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }

    }
  } 
</script>
<style scoped>
  /*顶部*/
  .el-header {
    border-bottom:dashed 1px lightgrey;
    margin-bottom:5px;
    text-align: center;
    line-height: 60px;
  }
  /*侧边栏*/
  .el-aside {
    margin-right:5px;
    border:solid 1px lightgrey;
    text-align: center;
    line-height: 200px;
  }
  /*主体内容*/
  .el-main {
  margin-top: -50px;
  }
  /*按钮*/
  .button{
    margin:0px 5px 5px 0;
    float: left;
  }
  /*底部*/
  .el-footer{
    /*background: blue;*/
  }
</style>