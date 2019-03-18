<!-- 终端设备管理 -->
<template>
  <el-container>
  <el-header>
    <div style="float:left">
      <el-button size="mini" icon="el-icon-plus">一键审核</el-button>
      <el-button size="mini" icon="el-icon-plus">下发终端设备</el-button>
    </div>
    <div style="float:right">
      <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="名称" value="1"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
    </div>
  </el-header>
  <el-container>
    
      <el-aside width="20%">
          <div style="line-height:20px;padding-top:5px;">
             <el-input placeholder="刷选条件" v-model="filterText" class="input-height"></el-input>
          </div>
          <div style="padding-top:10px;">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </div>
          
      </el-aside>
    <el-container>
      <el-main>
         <el-table border :data="tablesData" style="width: 100%" max-height="455" :default-sort = "{prop: 'class_item', order: 'descending'}">
          <el-table-column type="index" ></el-table-column>
          <el-table-column  label="操作" >
      <template slot-scope="scope">
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">编辑</el-button>
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">停用</el-button>
      </template>
    </el-table-column>
    <el-table-column prop="store_name" label="机构名称" sortable></el-table-column>
    <el-table-column prop="devices_name" label="设备名称" sortable></el-table-column>
    <el-table-column prop="devices_code" label="设备编号" sortable></el-table-column>
    <el-table-column prop="area" label="营业区域" sortable></el-table-column>
    <el-table-column prop="devices_ip" label="IP/MAC地址" sortable></el-table-column>
    <el-table-column prop="show" label="客显类型" sortable></el-table-column>
    <el-table-column prop="show_port" label="客显端口" sortable></el-table-column>
    <el-table-column prop="authorize_code" label="授权编码" sortable></el-table-column>
    <el-table-column prop="remark" label="区域描述" sortable></el-table-column>
    <el-table-column prop="properties" label="机台属性|全部" 
      :filters="[{ text: '有效', value: '有效' }, { text: '无效', value: '无效' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
    </el-table-column>
    <el-table-column prop="devices_properties" label="kvs类别" sortable></el-table-column>
    <el-table-column prop="kvs_type" label="kvs属性" sortable></el-table-column>
    <el-table-column prop="show_mode" label="显示方式" sortable></el-table-column>
    <el-table-column prop="valid_state" label="状态|全部" 
      :filters="[{ text: '有效', value: '有效' }, { text: '无效', value: '无效' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
    </el-table-column>
    <el-table-column prop="audit_state" label="审核状态|全部" 
      :filters="[{ text: '有效', value: '有效' }, { text: '无效', value: '无效' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
    </el-table-column>
    <el-table-column prop="last_operator" label="最后修改人" ></el-table-column>
    <el-table-column prop="last_updatetime" label="最后修改时间" ></el-table-column>
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
        tableData: [{"tenancy_id":"fuhuaxinrui","id":3,"reason_code":"0101","unusual_type":"FS02","father_id":2,"reason_name":"免费品尝","phonetic_code":"mfpc","five_code":"qxki","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 18:58:06","third_code":null,"father_name":"营销活动","parent_code":"02","class_item":"奉送"},{"tenancy_id":"fuhuaxinrui","id":2,"reason_code":"02","unusual_type":"FS02","father_id":0,"reason_name":"营销活动","phonetic_code":"yxhd","five_code":"aqif","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 18:59:19","third_code":null,"father_name":null,"parent_code":null,"class_item":"奉送"},{"tenancy_id":"fuhuaxinrui","id":4,"reason_code":"0201","unusual_type":"FS02","father_id":2,"reason_name":"促销","phonetic_code":"cx","five_code":"wq","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:00:02","third_code":null,"father_name":"营销活动","parent_code":"02","class_item":"奉送"},{"tenancy_id":"fuhuaxinrui","id":5,"reason_code":"0202","unusual_type":"FS02","father_id":2,"reason_name":"优惠券","phonetic_code":"yhq","five_code":"wgu","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:00:36","third_code":null,"father_name":"营销活动","parent_code":"02","class_item":"奉送"},{"tenancy_id":"fuhuaxinrui","id":6,"reason_code":"03","unusual_type":"FS02","father_id":0,"reason_name":"处理投诉","phonetic_code":"clts","five_code":"tgry","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:03:32","third_code":null,"father_name":null,"parent_code":null,"class_item":"奉送"},{"tenancy_id":"fuhuaxinrui","id":9,"reason_code":"0301","unusual_type":"FS02","father_id":6,"reason_name":"处理客人投诉","phonetic_code":"clkrts","five_code":"tgpwry","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:04:23","third_code":null,"father_name":"处理投诉","parent_code":"03","class_item":"奉送"},{"tenancy_id":"fuhuaxinrui","id":7,"reason_code":"04","unusual_type":"HF05","father_id":0,"reason_name":"操作失误","phonetic_code":"czsw","five_code":"rwry","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:03:46","third_code":null,"father_name":null,"parent_code":null,"class_item":"恢复账单"},{"tenancy_id":"fuhuaxinrui","id":8,"reason_code":"0401","unusual_type":"HF05","father_id":7,"reason_name":"更改折扣","phonetic_code":"ggzk","five_code":"gnrr","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:04:20","third_code":null,"father_name":"操作失误","parent_code":"04","class_item":"恢复账单"},{"tenancy_id":"fuhuaxinrui","id":12,"reason_code":"0404","unusual_type":"HF05","father_id":7,"reason_name":"更改结账方式","phonetic_code":"ggjzfs","five_code":"gnxmya","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:05:49","third_code":null,"father_name":"操作失误","parent_code":"04","class_item":"恢复账单"},{"tenancy_id":"fuhuaxinrui","id":13,"reason_code":"0405","unusual_type":"HF05","father_id":7,"reason_name":"更改消费明细","phonetic_code":"ggxftzxstart","five_code":"gnixjx","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:06:04","third_code":null,"father_name":"操作失误","parent_code":"04","class_item":"恢复账单"}],
        currentPage4: 4,
        data:[{"children":[{"children":[{"children":[{"children":[{"children":[],"code":"01001001001","fatherId":2,"id":22,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_17m4uxl4eaponiqyjrfn1jmc1w8b16xr","state":"","tenantstate":"1","text":"01001001001爱炉国贸店","type":"3"},{"children":[],"code":"01001001002","fatherId":2,"id":25,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_h8nhwptimlx9ox7nbihg5kksew4vsrsf","state":"","tenantstate":"1","text":"01001001002北京爱炉火锅大望路店","type":"3"}],"code":"01001001","fatherId":1,"id":2,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_eohjs7p9foar53d3uh00b13hobmfut82","state":"","tenantstate":"","text":"01001001爱炉(北京)","type":"1"},{"children":[{"children":[],"code":"01001002001","fatherId":3,"id":35,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_95467e5cb2dd4cd9ab64a43753815fe7","state":"","tenantstate":"1","text":"01001002001北京一面如故大望路店","type":"3"}],"code":"01001002","fatherId":1,"id":3,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_21sq2puf4f2slg3vof9024havjfvmjp6","state":"","tenantstate":"","text":"01001002一面如故(北京)","type":"1"},{"children":[{"children":[],"code":"01001003001","fatherId":4,"id":5,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_q790m1xrvus3w3r61l6iv1z0g0k6n628","state":"","tenantstate":"1","text":"01001003001北京真真小吃后现代城店","type":"3"},{"children":[],"code":"01001003002","fatherId":4,"id":6,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_q4dedxf87l24jxz2anc1ot811iw3x28m","state":"","tenantstate":"1","text":"01001003002北京真真小吃金都杭城店","type":"3"},{"children":[],"code":"01001003003","fatherId":4,"id":23,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_ex3xh1p1i4fxb8u8wxauowt5nfntxapk","state":"","tenantstate":"1","text":"01001003003北京真真小吃天通苑店","type":"3"},{"children":[],"code":"01001003004","fatherId":4,"id":27,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_56t9seb76hwvxckkc6dg6qozxpxbdtov","state":"","tenantstate":"","text":"01001003004北京真真小吃盒马东坝店","type":"3"},{"children":[],"code":"01001003005","fatherId":4,"id":28,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_3a8976347443496e863af77e52a80c6b","state":"","tenantstate":"1","text":"01001003005北京真真小吃叁点叁店","type":"3"},{"children":[],"code":"01001003006","fatherId":4,"id":29,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_22f1fd6568b94a89861f684128a2c57a","state":"","tenantstate":"1","text":"01001003006北京真真小吃北花园店","type":"3"},{"children":[],"code":"01001003007","fatherId":4,"id":30,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_03ca6981bba84a31837b197c8895be84","state":"","tenantstate":"1","text":"01001003007北京真真小吃万达新世界店","type":"3"}],"code":"01001003","fatherId":1,"id":4,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_ehjytydma7q6omde3qfrp2fapmoxldvm","state":"","tenantstate":"","text":"01001003真真小吃(北京)","type":"1"},{"children":[],"code":"01001006","fatherId":1,"id":15,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_nvy6l0qa4f24p8cqja67z5ipjqu423ui","state":"","tenantstate":"","text":"01001006会所(北京)","type":"1"},{"children":[{"children":[],"code":"01001008001","fatherId":31,"id":33,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_5b51f9c15d6d4587a5f50fd292e24418","state":"","tenantstate":"","text":"01001008001粉茶奥体天虹店","type":"3"},{"children":[],"code":"01001008002","fatherId":31,"id":34,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_d26b0b94cb9e46989b2dd309c5821ee4","state":"","tenantstate":"","text":"01001008002粉茶后现代城店","type":"3"},{"children":[],"code":"01001008003","fatherId":31,"id":36,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_558ca19171d8433ab9df812df58d05f0","state":"","tenantstate":"","text":"01001008003粉茶崇文门店","type":"3"}],"code":"01001008","fatherId":1,"id":31,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_48a893f0edda47aa83d64afa7615f4f7","state":"","tenantstate":"","text":"01001008粉茶(北京)","type":"1"},{"children":[],"code":"01001009","fatherId":1,"id":32,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_90c269b1f9b34fdaa1f806c2cf9565d5","state":"","tenantstate":"","text":"01001009D5厨房（北京）","type":"1"},{"children":[{"children":[],"code":"01001021001","fatherId":20,"id":21,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_30u95wwcz1mydzoxx7w71kz0hlq2f4i9","state":"","tenantstate":"1","text":"01001021001竹堂里博瑞店","type":"3"},{"children":[],"code":"01001021002","fatherId":20,"id":26,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_eeeh9o4cthx5e62n0eb7qo1xr6s2oihu","state":"","tenantstate":"1","text":"01001021002竹堂里国贸店","type":"3"}],"code":"01001021","fatherId":1,"id":20,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_beboo174bynimgk67zsykt3wv841dp29","state":"","tenantstate":"","text":"01001021竹堂里","type":"1"}],"code":"01001","fatherId":18,"id":1,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_jq36htj59b95zhemrkyhnegdu826qv8l","state":"","tenantstate":"","text":"01001北京","type":"1"},{"children":[],"code":"01002","fatherId":18,"id":10,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_61fnq95s411xh5mys8k3indmrnugegxr","state":"","tenantstate":"","text":"01002丽江","type":"1"},{"children":[{"children":[],"code":"01003001","fatherId":7,"id":11,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_jr1g0b7jcrptibpfao4uqgedc6r2ry2j","state":"","tenantstate":"","text":"01003001保留2","type":"1"},{"children":[],"code":"01003002","fatherId":7,"id":12,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_34bzzexzt5x7tlpgxzj9tj6gsddqnzo0","state":"","tenantstate":"","text":"01003002保留3","type":"1"},{"children":[],"code":"01003003","fatherId":7,"id":8,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_l28w83s9441svmvl50934keizjlg6ei5","state":"","tenantstate":"","text":"01003003保留1","type":"1"},{"children":[],"code":"01003005","fatherId":7,"id":14,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_7653npyu93nwnkwirxrl4ghj6atq2t8m","state":"","tenantstate":"1","text":"01003005徽州里","type":"3"}],"code":"01003","fatherId":18,"id":7,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_kdco2jemx0h2dqqpsek4dgavek64o6it","state":"","tenantstate":"","text":"01003黄山","type":"1"},{"children":[],"code":"01004","fatherId":18,"id":9,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_o68mqzs2xdvezohb16ssnjo4yat74iny","state":"","tenantstate":"","text":"01004九寨","type":"1"},{"children":[{"children":[],"code":"01005001","fatherId":16,"id":17,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_pryja4dq85r3vicduir9kpwffndth20r","state":"","tenantstate":"","text":"01005001北京配送中心","type":"2"}],"code":"01005","fatherId":18,"id":16,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_2bj6aomrrxqlcwa00wnjb5iyf4lsvdqx","state":"","tenantstate":"","text":"01005北京中央厨房","type":"1"},{"children":[],"code":"01006","fatherId":18,"id":37,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_8e39bd001d0148acb45805e4510f7b3a","state":"","tenantstate":"","text":"01006华大大","type":"3"}],"code":"01","fatherId":0,"id":18,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_awtxxhgj2d3jvpwc2hsbg1nhsk2bv8bi","state":"","tenantstate":"","text":"01复华新锐","type":"1"}],"code":"","fatherId":"","id":0,"level":0,"operatesum":0,"orguuid":"","state":"","tenantstate":"","text":"总部","type":"1"}],
        defaultProps: {
          children: 'children',
          label: 'text'
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