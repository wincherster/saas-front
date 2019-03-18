<!-- 付款方式设置 -->
<template>
  <el-tabs type="border-card" class="tabs" @tab-click="currentTabsClick">
      <el-header>
          <div style="float:left">
            <el-button size="mini" icon="el-icon-plus" @click="saveFrom">新增</el-button>
          </div>
      </el-header>
  <el-tab-pane label="现金币种">
    <el-container>
      <el-main class="tab">
         <el-table border :data="xjbzData" style="width: 100%" max-height="328" ref="xjbz">
           <el-table-column type="index" ></el-table-column>
           <el-table-column  label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">编辑</el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">分配门店</el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">停用</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="payment_code" label="编号" sortable></el-table-column>
          <el-table-column prop="payment_name1" label="名称" ></el-table-column>
          <el-table-column prop="status" label="状态|有效" sortable></el-table-column>
          <el-table-column prop="is_standard_money" label="是否本币" ></el-table-column>
          <el-table-column prop="rate" label="汇率" ></el-table-column>
          <el-table-column prop="if_invoicing" label="是否开发票" ></el-table-column>
          <el-table-column prop="if_jifen" label="是否可积分" ></el-table-column>
          <el-table-column prop="if_prepay" label="是否预付款" ></el-table-column>
          <el-table-column prop="if_income" label="是否记收入" ></el-table-column>
          <el-table-column prop="third_code" label="第三方编码" ></el-table-column>
          <el-table-column prop="comment" label="备注" ></el-table-column>
          <el-table-column prop="last_operator" label="最后修改人" ></el-table-column>
          <el-table-column prop="last_updatetime" label="最后修改时间" ></el-table-column>
      </el-table>
      </el-main>
    </el-container>
  </el-tab-pane>
  <el-tab-pane label="银行卡">
     <el-container>
      <el-main class="tab">
         <el-table border :data="yhkData" style="width: 100%" max-height="328" ref="yhk">
           <el-table-column type="index" ></el-table-column>
           <el-table-column  label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">编辑</el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">分配门店</el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">停用</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="payment_code" label="编号" sortable></el-table-column>
          <el-table-column prop="payment_name1" label="名称" ></el-table-column>
          <el-table-column prop="status" label="状态|有效" sortable></el-table-column>
          <el-table-column prop="bank" label="银行" ></el-table-column>
          <el-table-column prop="if_invoicing" label="是否开发票" ></el-table-column>
          <el-table-column prop="if_jifen" label="是否可积分" ></el-table-column>
          <el-table-column prop="if_prepay" label="是否预付款" ></el-table-column>
          <el-table-column prop="if_income" label="是否记收入" ></el-table-column>
          <el-table-column prop="bill_limits" label="账单限额" ></el-table-column>
          <el-table-column prop="discount_case" label="折扣方案" ></el-table-column>
          <el-table-column prop="third_code" label="第三方编码" ></el-table-column>
          <el-table-column prop="bank_rate" label="银行费率" ></el-table-column>
          <el-table-column prop="comment" label="备注" ></el-table-column>
          <el-table-column prop="last_operator" label="最后修改人" ></el-table-column>
          <el-table-column prop="last_updatetime" label="最后修改时间" ></el-table-column>
      </el-table>
      </el-main>
    </el-container>
  </el-tab-pane>
  <el-tab-pane label="合作">
     <el-container>
      <el-main class="tab">
         <el-table border :data="hzData" style="width: 100%" max-height="328" ref="hz">
           <el-table-column type="index" ></el-table-column>
           <el-table-column  label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">编辑</el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">分配门店</el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">停用</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="payment_code" label="编号" sortable></el-table-column>
          <el-table-column prop="payment_name1" label="名称" ></el-table-column>
          <el-table-column prop="status" label="状态|有效" sortable></el-table-column>
          <el-table-column prop="if_invoicing" label="是否开发票" ></el-table-column>
          <el-table-column prop="if_jifen" label="是否可积分" ></el-table-column>
          <el-table-column prop="if_prepay" label="是否预付款" ></el-table-column>
          <el-table-column prop="if_income" label="是否记收入" ></el-table-column>
          <el-table-column prop="is_check" label="是否验码" ></el-table-column>
          <el-table-column prop="is_recharge" label="是否找零" ></el-table-column>
          <el-table-column prop="bill_limits" label="账单限额" ></el-table-column>
          <el-table-column prop="discount_case" label="折扣方案" ></el-table-column>
          <el-table-column prop="third_code" label="第三方编码" ></el-table-column>
          <el-table-column prop="comment" label="备注" ></el-table-column>
          <el-table-column prop="last_operator" label="最后修改人" ></el-table-column>
          <el-table-column prop="last_updatetime" label="最后修改时间" ></el-table-column>
      </el-table>
      </el-main>
    </el-container>
  </el-tab-pane>
  <el-tab-pane label="免单">
     <el-container>
      <el-main class="tab">
         <el-table border :data="mdData" style="width: 100%" max-height="328" ref="md">
           <el-table-column type="index" ></el-table-column>
           <el-table-column  label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">编辑</el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">分配门店</el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">停用</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="payment_code" label="编号" sortable></el-table-column>
          <el-table-column prop="payment_name1" label="名称" ></el-table-column>
          <el-table-column prop="status" label="状态|有效" sortable></el-table-column>
          <el-table-column prop="if_invoicing" label="是否开发票" ></el-table-column>
          <el-table-column prop="if_jifen" label="是否可积分" ></el-table-column>
          <el-table-column prop="if_prepay" label="是否预付款" ></el-table-column>
          <el-table-column prop="if_income" label="是否记收入" ></el-table-column>
          <el-table-column prop="third_code" label="第三方编码" ></el-table-column>
          <el-table-column prop="comment" label="备注" ></el-table-column>
          <el-table-column prop="last_operator" label="最后修改人" ></el-table-column>
          <el-table-column prop="last_updatetime" label="最后修改时间" ></el-table-column>
      </el-table>
      </el-main>
    </el-container>
  </el-tab-pane>
  <el-tab-pane label="其它">
    <el-container>
      <el-main class="tab">
         <el-table border :data="qtData" style="width: 100%" max-height="328" ref="qt">
           <el-table-column type="index" ></el-table-column>
           <el-table-column  label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">编辑</el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">分配门店</el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">停用</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="payment_code" label="编号" sortable></el-table-column>
          <el-table-column prop="payment_name1" label="名称" ></el-table-column>
          <el-table-column prop="status" label="状态|有效" sortable></el-table-column>
          <el-table-column prop="if_invoicing" label="是否开发票" ></el-table-column>
          <el-table-column prop="if_jifen" label="是否可积分" ></el-table-column>
          <el-table-column prop="if_prepay" label="是否预付款" ></el-table-column>
          <el-table-column prop="if_income" label="是否记收入" ></el-table-column>
          <el-table-column prop="third_code" label="第三方编码" ></el-table-column>
          <el-table-column prop="comment" label="备注" ></el-table-column>
          <el-table-column prop="last_operator" label="最后修改人" ></el-table-column>
          <el-table-column prop="last_updatetime" label="最后修改时间" ></el-table-column>
      </el-table>
      </el-main>
    </el-container>
  </el-tab-pane>
  <el-footer>
        <el-pagination @size-change="pageSizeChange" @current-change="pageCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 300]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
   </el-footer>
</el-tabs>
</template>
<script>
  export default{
    data() {
      return {
        currentPage: 1,
        pageSize: 10,
        total: 1000,
        currentTab:'现金币种',
        qt:[{"id":1002,"payment_class":"other","payment_name1":"银行卡","if_income":"1","if_jifen":"1","if_prepay":"1","comment":null,"status":"1","third_code":null,"if_invoicing":"1","last_updatetime":"2017-04-24 18:20:52","last_operator":"admin","payment_code":"001"},{"id":1003,"payment_class":"other","payment_name1":"会员卡","if_income":"1","if_jifen":"1","if_prepay":"0","comment":null,"status":"1","third_code":null,"if_invoicing":"1","last_updatetime":"2017-05-04 10:49:10","last_operator":"admin","payment_code":"002"},{"id":1005,"payment_class":"other","payment_name1":"大众点评","if_income":"1","if_jifen":"0","if_prepay":"0","comment":null,"status":"1","third_code":null,"if_invoicing":"1","last_updatetime":"2017-04-24 18:24:23","last_operator":"admin","payment_code":"004"},{"id":1006,"payment_class":"other","payment_name1":"5元券","if_income":"0","if_jifen":"0","if_prepay":"0","comment":null,"status":"1","third_code":null,"if_invoicing":"0","last_updatetime":"2017-04-24 18:29:29","last_operator":"admin","payment_code":"005"},{"id":1008,"payment_class":"other","payment_name1":"15元代金券","if_income":"0","if_jifen":"0","if_prepay":"0","comment":null,"status":"1","third_code":null,"if_invoicing":"0","last_updatetime":"2017-07-31 13:28:16","last_operator":"admin","payment_code":"007"},{"id":1009,"payment_class":"other","payment_name1":"10元券","if_income":"0","if_jifen":"0","if_prepay":"0","comment":null,"status":"1","third_code":null,"if_invoicing":"0","last_updatetime":"2017-11-21 11:09:54","last_operator":"admin","payment_code":"008"},{"id":1010,"payment_class":"other","payment_name1":"10元凤梨酥券","if_income":"0","if_jifen":"0","if_prepay":"0","comment":null,"status":"1","third_code":null,"if_invoicing":"0","last_updatetime":"2017-04-24 18:30:47","last_operator":"admin","payment_code":"009"},{"id":1011,"payment_class":"other","payment_name1":"5元凤梨酥券","if_income":"0","if_jifen":"0","if_prepay":"0","comment":null,"status":"1","third_code":null,"if_invoicing":"0","last_updatetime":"2017-04-24 18:31:12","last_operator":"admin","payment_code":"010"},{"id":1014,"payment_class":"other","payment_name1":"88元点评龙虾团购卷","if_income":"0","if_jifen":"0","if_prepay":"0","comment":null,"status":"1","third_code":null,"if_invoicing":"0","last_updatetime":"2017-05-19 00:30:26","last_operator":"admin","payment_code":"013"},{"id":1019,"payment_class":"other","payment_name1":"88元小龙虾分享地标卷","if_income":"0","if_jifen":"0","if_prepay":"0","comment":null,"status":"1","third_code":null,"if_invoicing":"0","last_updatetime":"2017-05-19 00:28:54","last_operator":"admin","payment_code":"018"}],
        md:[{"id":1026,"payment_class":"freesingle","payment_name1":"单身汪套餐减免","if_invoicing":"0","if_jifen":"0","if_prepay":"1","if_income":"0","comment":null,"status":"1","third_code":null,"last_updatetime":"2017-06-24 13:17:56","last_operator":"admin","payment_code":"025"},{"id":1027,"payment_class":"freesingle","payment_name1":"群撸套餐减免","if_invoicing":"0","if_jifen":"0","if_prepay":"1","if_income":"0","comment":null,"status":"1","third_code":null,"last_updatetime":"2017-06-24 13:17:49","last_operator":"admin","payment_code":"026"},{"id":1028,"payment_class":"freesingle","payment_name1":"土豪套餐减免","if_invoicing":"0","if_jifen":"0","if_prepay":"1","if_income":"0","comment":null,"status":"1","third_code":null,"last_updatetime":"2017-06-24 13:17:41","last_operator":"admin","payment_code":"027"},{"id":1064,"payment_class":"freesingle","payment_name1":"品尝","if_invoicing":"0","if_jifen":"0","if_prepay":"1","if_income":"1","comment":null,"status":"1","third_code":null,"last_updatetime":"2017-11-21 11:08:54","last_operator":"admin","payment_code":"063"},{"id":7,"payment_class":"freesingle","payment_name1":"招待","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"0","comment":null,"status":"1","third_code":null,"last_updatetime":"2017-05-10 00:48:04","last_operator":"admin","payment_code":"7"},{"id":8,"payment_class":"freesingle","payment_name1":"试餐","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"0","comment":null,"status":"1","third_code":null,"last_updatetime":"2017-05-10 00:48:22","last_operator":"admin","payment_code":"8"},{"id":9,"payment_class":"freesingle","payment_name1":"宴请","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"0","comment":null,"status":"1","third_code":null,"last_updatetime":"2017-05-10 00:48:13","last_operator":"admin","payment_code":"9"}],
        hz:[{"id":1001,"payment_class":"meituan_pay","payment_name1":"美团外卖付款","if_invoicing":"1","if_jifen":"0","if_prepay":"0","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"discount_case_name":null,"comment":null,"is_recharge":"0","is_check":"1","casename":null,"last_updatetime":"2017-11-21 11:08:13","last_operator":"admin","payment_code":"017"},{"id":1029,"payment_class":"card_credit","payment_name1":"积分抵现","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"discount_case_name":null,"comment":null,"is_recharge":"0","is_check":"1","casename":null,"last_updatetime":"2017-07-11 14:57:23","last_operator":"admin","payment_code":"028"},{"id":1053,"payment_class":"coupons","payment_name1":"优惠券","if_invoicing":"0","if_jifen":"0","if_prepay":"0","if_income":"0","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"discount_case_name":null,"comment":null,"is_recharge":"0","is_check":"1","casename":null,"last_updatetime":"2017-11-02 08:53:20","last_operator":"admin","payment_code":"052"},{"id":1,"payment_class":"card","payment_name1":"本系统卡","if_invoicing":null,"if_jifen":"1","if_prepay":null,"if_income":"1","bill_limits":null,"discount_case":null,"status":"1","third_code":null,"discount_case_name":null,"comment":null,"is_recharge":"0","is_check":"1","casename":null,"last_updatetime":"2015-09-17 18:01:13","last_operator":"system","payment_code":"1"},{"id":16,"payment_class":"baidu_pay","payment_name1":"百度外卖付款","if_invoicing":"1","if_jifen":"0","if_prepay":"0","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"discount_case_name":null,"comment":null,"is_recharge":"0","is_check":"1","casename":null,"last_updatetime":"2017-04-24 18:25:13","last_operator":"admin","payment_code":"16"},{"id":2,"payment_class":"ele_pay","payment_name1":"饿了么外卖付款","if_invoicing":"1","if_jifen":"0","if_prepay":null,"if_income":"1","bill_limits":null,"discount_case":null,"status":"1","third_code":null,"discount_case_name":null,"comment":null,"is_recharge":"0","is_check":"1","casename":null,"last_updatetime":"2017-04-24 18:28:43","last_operator":"admin","payment_code":"2"},{"id":3,"payment_class":"incorporation","payment_name1":"团体挂账","if_invoicing":null,"if_jifen":"1","if_prepay":null,"if_income":"1","bill_limits":null,"discount_case":null,"status":"1","third_code":null,"discount_case_name":null,"comment":null,"is_recharge":"0","is_check":"1","casename":null,"last_updatetime":"2015-09-17 18:02:36","last_operator":"system","payment_code":"3"},{"id":5,"payment_class":"ali_pay","payment_name1":"支付宝支付","if_invoicing":"1","if_jifen":"1","if_prepay":"1","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"discount_case_name":null,"comment":null,"is_recharge":"0","is_check":"1","casename":null,"last_updatetime":"2017-04-24 18:23:21","last_operator":"admin","payment_code":"5"},{"id":6,"payment_class":"wechat_pay","payment_name1":"微信支付","if_invoicing":"1","if_jifen":"1","if_prepay":"1","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"discount_case_name":null,"comment":null,"is_recharge":"0","is_check":"1","casename":null,"last_updatetime":"2017-04-24 18:23:04","last_operator":"admin","payment_code":"6"}],
        yhk:[{"id":1016,"payment_class":"bankcard","bank":649,"payment_name1":"微信会员充值","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"bank_rate":null,"discount_case_name":null,"comment":null,"bankname":"中国银行","casename":null,"last_updatetime":"2017-05-11 16:55:57","last_operator":"admin","payment_code":"015"},{"id":1017,"payment_class":"bankcard","bank":649,"payment_name1":"集赞赠送","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"0","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"bank_rate":null,"discount_case_name":null,"comment":null,"bankname":"中国银行","casename":null,"last_updatetime":"2017-05-17 13:48:44","last_operator":"admin","payment_code":"016"},{"id":1032,"payment_class":"bankcard","bank":649,"payment_name1":"支付宝会员充值","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"bank_rate":null,"discount_case_name":null,"comment":null,"bankname":"中国银行","casename":null,"last_updatetime":"2017-07-16 22:08:07","last_operator":"admin","payment_code":"031"},{"id":1042,"payment_class":"bankcard","bank":649,"payment_name1":"代金券充值冲账","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"bank_rate":null,"discount_case_name":null,"comment":null,"bankname":"中国银行","casename":null,"last_updatetime":"2017-10-11 18:01:25","last_operator":"admin","payment_code":"041"},{"id":1054,"payment_class":"bankcard","bank":649,"payment_name1":"支票","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"bank_rate":null,"discount_case_name":null,"comment":null,"bankname":"中国银行","casename":null,"last_updatetime":"2017-11-06 13:23:49","last_operator":"liuchao","payment_code":"053"},{"id":1060,"payment_class":"bankcard","bank":649,"payment_name1":"银行卡会员充值","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"bank_rate":null,"discount_case_name":null,"comment":null,"bankname":"中国银行","casename":null,"last_updatetime":"2017-11-14 11:30:19","last_operator":"liuchao","payment_code":"059"},{"id":1062,"payment_class":"bankcard","bank":649,"payment_name1":"中国大同银行","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"bank_rate":null,"discount_case_name":null,"comment":null,"bankname":"中国银行","casename":null,"last_updatetime":"2017-11-20 13:44:45","last_operator":"admin","payment_code":"061"},{"id":10,"payment_class":"bankcard","bank":649,"payment_name1":"中国银行","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"bank_rate":null,"discount_case_name":null,"comment":null,"bankname":"中国银行","casename":null,"last_updatetime":"2015-09-17 18:28:32","last_operator":"system","payment_code":"10"},{"id":11,"payment_class":"bankcard","bank":651,"payment_name1":"中国建设银行","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"bank_rate":null,"discount_case_name":null,"comment":null,"bankname":"中国建设银行","casename":null,"last_updatetime":"2015-09-17 18:28:41","last_operator":"system","payment_code":"11"},{"id":12,"payment_class":"bankcard","bank":653,"payment_name1":"中国工商银行","if_invoicing":"0","if_jifen":"1","if_prepay":"1","if_income":"1","bill_limits":0,"discount_case":null,"status":"1","third_code":null,"bank_rate":null,"discount_case_name":null,"comment":null,"bankname":"中国工商银行","casename":null,"last_updatetime":"2015-09-17 18:28:49","last_operator":"system","payment_code":"12"}],
        xjbz:[{"id":1063,"payment_class":"cash","payment_name1":"QT","rate":1,"is_standard_money":"0","comment":null,"status":"1","if_invoicing":"1","if_jifen":"1","if_prepay":"1","if_income":"1","third_code":null,"class_item":"其他","last_updatetime":"2017-11-21 10:51:52","last_operator":"admin","payment_code":"062"},{"id":4,"payment_class":"cash","payment_name1":"RMB","rate":1,"is_standard_money":"1","comment":null,"status":"1","if_invoicing":"1","if_jifen":"1","if_prepay":"1","if_income":"1","third_code":null,"class_item":"人民币","last_updatetime":"2017-11-21 14:54:25","last_operator":"admin","payment_code":"4"},{"id":1063,"payment_class":"cash","payment_name1":"QT","rate":1,"is_standard_money":"0","comment":null,"status":"1","if_invoicing":"1","if_jifen":"1","if_prepay":"1","if_income":"1","third_code":null,"class_item":"其他","last_updatetime":"2017-11-21 10:51:52","last_operator":"admin","payment_code":"062"},{"id":4,"payment_class":"cash","payment_name1":"RMB","rate":1,"is_standard_money":"1","comment":null,"status":"1","if_invoicing":"1","if_jifen":"1","if_prepay":"1","if_income":"1","third_code":null,"class_item":"人民币","last_updatetime":"2017-11-21 14:54:25","last_operator":"admin","payment_code":"4"},{"id":1063,"payment_class":"cash","payment_name1":"QT","rate":1,"is_standard_money":"0","comment":null,"status":"1","if_invoicing":"1","if_jifen":"1","if_prepay":"1","if_income":"1","third_code":null,"class_item":"其他","last_updatetime":"2017-11-21 10:51:52","last_operator":"admin","payment_code":"062"},{"id":4,"payment_class":"cash","payment_name1":"RMB","rate":1,"is_standard_money":"1","comment":null,"status":"1","if_invoicing":"1","if_jifen":"1","if_prepay":"1","if_income":"1","third_code":null,"class_item":"人民币","last_updatetime":"2017-11-21 14:54:25","last_operator":"admin","payment_code":"4"},{"id":1063,"payment_class":"cash","payment_name1":"QT","rate":1,"is_standard_money":"0","comment":null,"status":"1","if_invoicing":"1","if_jifen":"1","if_prepay":"1","if_income":"1","third_code":null,"class_item":"其他","last_updatetime":"2017-11-21 10:51:52","last_operator":"admin","payment_code":"062"},{"id":4,"payment_class":"cash","payment_name1":"RMB","rate":1,"is_standard_money":"1","comment":null,"status":"1","if_invoicing":"1","if_jifen":"1","if_prepay":"1","if_income":"1","third_code":null,"class_item":"人民币","last_updatetime":"2017-11-21 14:54:25","last_operator":"admin","payment_code":"4"},{"id":1063,"payment_class":"cash","payment_name1":"QT","rate":1,"is_standard_money":"0","comment":null,"status":"1","if_invoicing":"1","if_jifen":"1","if_prepay":"1","if_income":"1","third_code":null,"class_item":"其他","last_updatetime":"2017-11-21 10:51:52","last_operator":"admin","payment_code":"062"},{"id":4,"payment_class":"cash","payment_name1":"RMB","rate":1,"is_standard_money":"1","comment":null,"status":"1","if_invoicing":"1","if_jifen":"1","if_prepay":"1","if_income":"1","third_code":null,"class_item":"人民币","last_updatetime":"2017-11-21 14:54:25","last_operator":"admin","payment_code":"4"}
        ]
        }
    },
    computed:{
        hzData:function(){
         let arrs = this.hz;
                 arrs.map(function(item,arrs){
                  item.status = item.status=="1"?"有效":"无效";
                  item.if_invoicing = item.if_invoicing =="1"?"是":item.if_invoicing =="0"?"否":"";
                  item.if_jifen = item.if_jifen =="1"?"是":item.if_jifen =="0"?"否":"";
                  item.if_prepay = item.if_prepay =="1"?"是":item.if_prepay =="0"?"否":"";
                  item.if_income = item.if_income =="1"?"是":item.if_income =="0"?"否":"";
                  item.is_check = item.is_check =="1"?"是":item.is_check =="0"?"否":"";
                  item.is_recharge = item.is_recharge =="1"?"是":item.is_recharge =="0"?"否":"";
                 })
          return this.hz;
        },
        yhkData:function(){
           let arrs = this.yhk;
                 arrs.map(function(item,arrs){
                  item.status = item.status=="1"?"有效":"无效";
                  item.if_invoicing = item.if_invoicing =="1"?"是":item.if_invoicing =="0"?"否":"";
                  item.if_jifen = item.if_jifen =="1"?"是":item.if_jifen =="0"?"否":"";
                  item.if_prepay = item.if_prepay =="1"?"是":item.if_prepay =="0"?"否":"";
                  item.if_income = item.if_income =="1"?"是":item.if_income =="0"?"否":"";
                  switch(item.bank){
                    case 649:
                    item.bank = "中国银行";
                    break;
                    case 651:
                    item.bank = "中国建设银行";
                    break;
                    case 653:
                    item.bank = "中国工商银行";
                    break;
                    default:
                    break;

                  }
                 })
          return this.yhk;
        },
        xjbzData:function(){
            let arrs = this.xjbz;
            arrs.map(function(item,arrs){
              item.status = item.status=="1"?"有效":"无效";
              item.is_standard_money = item.is_standard_money =="1"?"是":item.is_standard_money =="0"?"否":"";
              item.if_invoicing = item.if_invoicing =="1"?"是":item.if_invoicing =="0"?"否":"";
              item.if_jifen = item.if_jifen =="1"?"是":item.if_jifen =="0"?"否":"";
              item.if_prepay = item.if_prepay =="1"?"是":item.if_prepay =="0"?"否":"";
              item.if_income = item.if_income =="1"?"是":item.if_income =="0"?"否":"";
              item.rate = item.rate.toFixed(4);
            })
          return this.xjbz;
        },
        mdData:function(){
          let arrs = this.md;
            arrs.map(function(item,arrs){
              item.status = item.status=="1"?"有效":"无效";
              item.is_standard_money = item.is_standard_money =="1"?"是":item.is_standard_money =="0"?"否":"";
              item.if_invoicing = item.if_invoicing =="1"?"是":item.if_invoicing =="0"?"否":"";
              item.if_jifen = item.if_jifen =="1"?"是":item.if_jifen =="0"?"否":"";
              item.if_prepay = item.if_prepay =="1"?"是":item.if_prepay =="0"?"否":"";
              item.if_income = item.if_income =="1"?"是":item.if_income =="0"?"否":"";
            })
          return this.md;
        },
        qtData:function(){
          let arrs = this.qt;
            arrs.map(function(item,arrs){
              item.status = item.status=="1"?"有效":"无效";
              item.is_standard_money = item.is_standard_money =="1"?"是":item.is_standard_money =="0"?"否":"";
              item.if_invoicing = item.if_invoicing =="1"?"是":item.if_invoicing =="0"?"否":"";
              item.if_jifen = item.if_jifen =="1"?"是":item.if_jifen =="0"?"否":"";
              item.if_prepay = item.if_prepay =="1"?"是":item.if_prepay =="0"?"否":"";
              item.if_income = item.if_income =="1"?"是":item.if_income =="0"?"否":"";
            })
          return this.qt;
        }
    },
    methods:{
      saveFrom(){
        let $dom = this.currentTab =="银行卡"?'yhk':this.currentTab =="合作"?'hz':this.currentTab =="免单"?'md':this.currentTab =="其它"?'qt':'xjbz';
        this.$store.commit('setCacheData',{});
        this.$store.commit('setCurrentTab',$dom);
        this.$router.push({path:'addPaymentMode'});
        // let tabDom = this.$refs[$dom];
      },
      //获取当前的页码
      pageSizeChange(val) {
        console.info("每页显示的长度发生改变:"+`每页 ${val} 条`)
      },
      // 获取当前页
      pageCurrentChange(val) {
        console.info("当前页发生改变:"+`当前是第: ${val} 页`)
      },      
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      currentTabsClick(tab, event){
        this.currentTab = tab.label;
      }
    }
  } 
</script>
<style scoped>
  .el-header, .el-footer {
    border:solid 1px lightgrey;
    margin-bottom:1px;
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    text-align: center;
    line-height: 60px;
    height: 60px;
  }
  .tab{
    height: 100px;
  }
  .el-main {
    /*background-color: #E9EEF3;*/
    /*color: #333;*/
    border:solid 1px lightgrey;
    text-align: center;
    height: 370px;
    /*height: 460px;*/
    line-height: 30px;
  }
 
</style>