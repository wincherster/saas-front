<!-- 异常原因设置 -->
<template>
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
         <el-table border :data="tablesData" style="width: 100%" max-height="455">
           <el-table-column type="index" ></el-table-column>
           <el-table-column  label="操作" width="120">
      <template slot-scope="scope">
        <el-button @click.native.prevent="edit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
        <el-button @click.native.prevent="allotStore(scope.$index, scope.row)" type="text" size="small">分配门店</el-button>
        <el-button @click.native.prevent="stop(scope.$index, scope.row)" type="text" size="small">停用</el-button>
      </template>
    </el-table-column>

    <el-table-column prop="class_item" label="类型" ></el-table-column>
    <el-table-column prop="father_id" label="上级" ></el-table-column>
    <el-table-column prop="reason_code" label="编号" sortable></el-table-column>
    <el-table-column prop="reason_name" label="名称" ></el-table-column>
    <el-table-column prop="remark" label="备注" ></el-table-column>
    <el-table-column prop="valid_state" label="状态|有效" ></el-table-column>
    <el-table-column prop="last_operator" label="最后修改人" ></el-table-column>
    <el-table-column prop="last_updatetime" label="最后修改日期" ></el-table-column>
    
   
  </el-table>
      </el-main>
       <el-footer>
      <el-pagination @size-change="pageSizeChange" @current-change="pageCurrentChange" :current-page="currentPage" :page-sizes="[10, 30, 200]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
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
        currentPage: 1,
        pageSize: 10,
        total: 1000,
        tableData:[{"tenancy_id":"fuhuaxinrui","id":3,"reason_code":"0101","unusual_type":"FS02","father_id":2,"reason_name":"免费品尝","phonetic_code":"mfpc","five_code":"qxki","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 18:58:06","third_code":null,"father_name":"营销活动","parent_code":"02","class_item":"奉送"},{"tenancy_id":"fuhuaxinrui","id":2,"reason_code":"02","unusual_type":"FS02","father_id":0,"reason_name":"营销活动","phonetic_code":"yxhd","five_code":"aqif","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 18:59:19","third_code":null,"father_name":null,"parent_code":null,"class_item":"奉送"},{"tenancy_id":"fuhuaxinrui","id":4,"reason_code":"0201","unusual_type":"FS02","father_id":2,"reason_name":"促销","phonetic_code":"cx","five_code":"wq","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:00:02","third_code":null,"father_name":"营销活动","parent_code":"02","class_item":"奉送"},{"tenancy_id":"fuhuaxinrui","id":5,"reason_code":"0202","unusual_type":"FS02","father_id":2,"reason_name":"优惠券","phonetic_code":"yhq","five_code":"wgu","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:00:36","third_code":null,"father_name":"营销活动","parent_code":"02","class_item":"奉送"},{"tenancy_id":"fuhuaxinrui","id":6,"reason_code":"03","unusual_type":"FS02","father_id":0,"reason_name":"处理投诉","phonetic_code":"clts","five_code":"tgry","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:03:32","third_code":null,"father_name":null,"parent_code":null,"class_item":"奉送"},{"tenancy_id":"fuhuaxinrui","id":9,"reason_code":"0301","unusual_type":"FS02","father_id":6,"reason_name":"处理客人投诉","phonetic_code":"clkrts","five_code":"tgpwry","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:04:23","third_code":null,"father_name":"处理投诉","parent_code":"03","class_item":"奉送"},{"tenancy_id":"fuhuaxinrui","id":7,"reason_code":"04","unusual_type":"HF05","father_id":0,"reason_name":"操作失误","phonetic_code":"czsw","five_code":"rwry","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:03:46","third_code":null,"father_name":null,"parent_code":null,"class_item":"恢复账单"},{"tenancy_id":"fuhuaxinrui","id":8,"reason_code":"0401","unusual_type":"HF05","father_id":7,"reason_name":"更改折扣","phonetic_code":"ggzk","five_code":"gnrr","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:04:20","third_code":null,"father_name":"操作失误","parent_code":"04","class_item":"恢复账单"},{"tenancy_id":"fuhuaxinrui","id":12,"reason_code":"0404","unusual_type":"HF05","father_id":7,"reason_name":"更改结账方式","phonetic_code":"ggjzfs","five_code":"gnxmya","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:05:49","third_code":null,"father_name":"操作失误","parent_code":"04","class_item":"恢复账单"},{"tenancy_id":"fuhuaxinrui","id":13,"reason_code":"0405","unusual_type":"HF05","father_id":7,"reason_name":"更改消费明细","phonetic_code":"ggxftzxstart","five_code":"gnixjx","remark":"","valid_state":"1","last_operator":"system","last_updatetime":"2015-09-17 19:06:04","third_code":null,"father_name":"操作失误","parent_code":"04","class_item":"恢复账单"}],
        currentPage4: 4,
        treeData:[{"children":[{"children":[{"children":[],"classItem":"","fatherId":61,"fiveCode":"tdybiyu","id":62,"lastOperator":"system","phoneticCode":"dsfqxdd","reasonCode":"999801","reasonName":"第三方取消订单","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"QX01","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":61,"fiveCode":"fxm","id":1013,"lastOperator":"admin","phoneticCode":"wjz","reasonCode":"999801","reasonName":"未结账","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"QX01","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"tdybi","id":61,"lastOperator":"system","phoneticCode":"dsfqx","reasonCode":"9998","reasonName":"第三方取消","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"QX01","updatetime":"","validState":"1"}],"classItem":"","fatherId":"","fiveCode":"","id":0,"lastOperator":"","phoneticCode":"","reasonCode":"QX01","reasonName":"线上取消","remark":"","state":"","tenancyId":"","unusualType":"","updatetime":"","validState":""},{"children":[],"classItem":"","fatherId":"","fiveCode":"","id":0,"lastOperator":"","phoneticCode":"","reasonCode":"TS02","reasonName":"投诉","remark":"","state":"","tenancyId":"","unusualType":"","updatetime":"","validState":""},{"children":[{"children":[],"classItem":"","fatherId":0,"fiveCode":"pwdl","id":1019,"lastOperator":"liuchao","phoneticCode":"kryy","reasonCode":"27","reasonName":"客人原因","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD03","updatetime":"","validState":"1"}],"classItem":"","fatherId":"","fiveCode":"","id":0,"lastOperator":"","phoneticCode":"","reasonCode":"MD03","reasonName":"门店取消","remark":"","state":"","tenancyId":"","unusualType":"","updatetime":"","validState":""},{"children":[],"classItem":"","fatherId":"","fiveCode":"","id":0,"lastOperator":"","phoneticCode":"","reasonCode":"TK06","reasonName":"退款说明","remark":"","state":"","tenancyId":"","unusualType":"","updatetime":"","validState":""},{"children":[{"children":[{"children":[],"classItem":"","fatherId":14,"fiveCode":"pywwuw","id":17,"lastOperator":"system","phoneticCode":"yqhzdw","reasonCode":"0601","reasonName":"宴请合作单位","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":14,"fiveCode":"pytlbcuu","id":19,"lastOperator":"system","phoneticCode":"yqgjznbm","reasonCode":"0602","reasonName":"宴请各界职能部门","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"wlpy","id":14,"lastOperator":"system","phoneticCode":"jtyq","reasonCode":"06","reasonName":"集团宴请","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[{"children":[],"classItem":"","fatherId":21,"fiveCode":"awh","id":23,"lastOperator":"system","phoneticCode":"gzc","reasonCode":"0901","reasonName":"工作餐","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":21,"fiveCode":"pyu1","id":24,"lastOperator":"system","phoneticCode":"yqd1","reasonCode":"0902","reasonName":"宴请单1","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"pyu","id":21,"lastOperator":"system","phoneticCode":"yqd","reasonCode":"09","reasonName":"宴请单","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[{"children":[],"classItem":"","fatherId":25,"fiveCode":"rttbcuu","id":26,"lastOperator":"system","phoneticCode":"zdgznbm","reasonCode":"1101","reasonName":"招待各职能部门","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":25,"fiveCode":"ydpyya","id":27,"lastOperator":"system","phoneticCode":"qdkhsc","reasonCode":"1102","reasonName":"请大客户试菜","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":25,"fiveCode":"muya","id":29,"lastOperator":"system","phoneticCode":"nbsc","reasonCode":"1103","reasonName":"内部试菜","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":25,"fiveCode":"tgry","id":32,"lastOperator":"system","phoneticCode":"clts","reasonCode":"1104","reasonName":"处理投诉","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":25,"fiveCode":"uypy","id":1004,"lastOperator":"admin","phoneticCode":"mdyq","reasonCode":"1105","reasonName":"门店宴请","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":25,"fiveCode":"ullmuq","id":1014,"lastOperator":"admin","phoneticCode":"mttgjm","reasonCode":"1106","reasonName":"美团团购减免","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":25,"fiveCode":"murt","id":1017,"lastOperator":"admin","phoneticCode":"nbzd","reasonCode":"1107","reasonName":"内部招待","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":25,"fiveCode":"agtpypy","id":1018,"lastOperator":"lisijia","phoneticCode":"dszyqkh","reasonCode":"1108","reasonName":"董事长宴请客户","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"uypy","id":25,"lastOperator":"system","phoneticCode":"mdyq","reasonCode":"11","reasonName":"门店宴请","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[{"children":[],"classItem":"","fatherId":34,"fiveCode":"buh1","id":36,"lastOperator":"system","phoneticCode":"syk1","reasonCode":"1601","reasonName":"随意卡1","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"buh","id":34,"lastOperator":"system","phoneticCode":"syk","reasonCode":"16","reasonName":"随意卡","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[{"children":[],"classItem":"","fatherId":39,"fiveCode":"rt","id":41,"lastOperator":"system","phoneticCode":"zd","reasonCode":"1801","reasonName":"招待","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"agtpy","id":39,"lastOperator":"system","phoneticCode":"dszyq","reasonCode":"18","reasonName":"董事长宴请","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"},{"children":[{"children":[],"classItem":"","fatherId":44,"fiveCode":"rtsuuw","id":48,"lastOperator":"system","phoneticCode":"zdxgdw","reasonCode":"2001","reasonName":"招待相关单位","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"wlwnpy","id":44,"lastOperator":"system","phoneticCode":"jtldyq","reasonCode":"20","reasonName":"集团领导宴请","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"MD01","updatetime":"","validState":"1"}],"classItem":"","fatherId":"","fiveCode":"","id":0,"lastOperator":"","phoneticCode":"","reasonCode":"MD01","reasonName":"免单","remark":"","state":"","tenancyId":"","unusualType":"","updatetime":"","validState":""},{"children":[{"children":[{"children":[],"classItem":"","fatherId":2,"fiveCode":"qxki","id":3,"lastOperator":"system","phoneticCode":"mfpc","reasonCode":"0101","reasonName":"免费品尝","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"FS02","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":2,"fiveCode":"wq","id":4,"lastOperator":"system","phoneticCode":"cx","reasonCode":"0201","reasonName":"促销","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"FS02","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":2,"fiveCode":"wgu","id":5,"lastOperator":"system","phoneticCode":"yhq","reasonCode":"0202","reasonName":"优惠券","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"FS02","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"aqif","id":2,"lastOperator":"system","phoneticCode":"yxhd","reasonCode":"02","reasonName":"营销活动","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"FS02","updatetime":"","validState":"1"},{"children":[{"children":[],"classItem":"","fatherId":6,"fiveCode":"tgpwry","id":9,"lastOperator":"system","phoneticCode":"clkrts","reasonCode":"0301","reasonName":"处理客人投诉","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"FS02","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"tgry","id":6,"lastOperator":"system","phoneticCode":"clts","reasonCode":"03","reasonName":"处理投诉","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"FS02","updatetime":"","validState":"1"},{"children":[{"children":[],"classItem":"","fatherId":10,"fiveCode":"lmpy","id":11,"lastOperator":"system","phoneticCode":"hzkh","reasonCode":"0501","reasonName":"回赠客户","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"FS02","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"fpylm","id":10,"lastOperator":"system","phoneticCode":"lkhhz","reasonCode":"05","reasonName":"老客户回赠","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"FS02","updatetime":"","validState":"1"}],"classItem":"","fatherId":"","fiveCode":"","id":0,"lastOperator":"","phoneticCode":"","reasonCode":"FS02","reasonName":"奉送","remark":"","state":"","tenancyId":"","unusualType":"","updatetime":"","validState":""},{"children":[{"children":[{"children":[],"classItem":"","fatherId":37,"fiveCode":"dnt","id":38,"lastOperator":"system","phoneticCode":"yyw","reasonCode":"1701","reasonName":"有异物","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":37,"fiveCode":"wd","id":1001,"lastOperator":"admin","phoneticCode":"px","reasonCode":"1702","reasonName":"偏咸","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":37,"fiveCode":"wi","id":1002,"lastOperator":"admin","phoneticCode":"pd","reasonCode":"1703","reasonName":"偏淡","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":37,"fiveCode":"akrjuj","id":1010,"lastOperator":"admin","phoneticCode":"cpzlwt","reasonCode":"25","reasonName":"菜品质量问题","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":37,"fiveCode":"ra","id":1011,"lastOperator":"admin","phoneticCode":"hc","reasonCode":"26","reasonName":"换菜","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"akrj","id":37,"lastOperator":"system","phoneticCode":"cpzl","reasonCode":"17","reasonName":"菜品质量","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[{"children":[],"classItem":"","fatherId":40,"fiveCode":"ra","id":42,"lastOperator":"system","phoneticCode":"hc","reasonCode":"1901","reasonName":"换菜","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":40,"fiveCode":"ban","id":43,"lastOperator":"admin","phoneticCode":"ccm","reasonCode":"1902","reasonName":"出菜慢","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":40,"fiveCode":"wi","id":45,"lastOperator":"system","phoneticCode":"gq","reasonCode":"1903","reasonName":"估清","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":40,"fiveCode":"nt","id":46,"lastOperator":"system","phoneticCode":"sp","reasonCode":"1904","reasonName":"收牌","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":40,"fiveCode":"woyw","id":47,"lastOperator":"system","phoneticCode":"rsbh","reasonCode":"1905","reasonName":"人数变化","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":40,"fiveCode":"dpbinbk","id":49,"lastOperator":"admin","phoneticCode":"gkqxycp","reasonCode":"1906","reasonName":"顾客取消已出品","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":40,"fiveCode":"dpbifbk","id":50,"lastOperator":"admin","phoneticCode":"gkqxwcp","reasonCode":"1907","reasonName":"顾客取消未出品","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":40,"fiveCode":"cth","id":51,"lastOperator":"admin","phoneticCode":"tzs","reasonCode":"1908","reasonName":"通知上","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":40,"fiveCode":"ntw","id":52,"lastOperator":"system","phoneticCode":"gtj","reasonCode":"1909","reasonName":"改特价","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":40,"fiveCode":"ydw","id":53,"lastOperator":"system","phoneticCode":"gyj","reasonCode":"1910","reasonName":"该原价","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":40,"fiveCode":"aw","id":1003,"lastOperator":"admin","phoneticCode":"qt","reasonCode":"1911","reasonName":"其他","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":40,"fiveCode":"py","id":1012,"lastOperator":"admin","phoneticCode":"ks","reasonCode":"1912","reasonName":"客诉","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"pwsf","id":40,"lastOperator":"system","phoneticCode":"kryq","reasonCode":"19","reasonName":"客人要求","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[{"children":[],"classItem":"","fatherId":54,"fiveCode":"jeiy","id":55,"lastOperator":"system","phoneticCode":"dncs","reasonCode":"2101","reasonName":"电脑测试","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":54,"fiveCode":"yu","id":1015,"lastOperator":"admin","phoneticCode":"sd","reasonCode":"2102","reasonName":"试单","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"txiy","id":54,"lastOperator":"system","phoneticCode":"xtcs","reasonCode":"21","reasonName":"系统测试","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[{"children":[],"classItem":"","fatherId":56,"fiveCode":"gtu","id":57,"lastOperator":"admin","phoneticCode":"xzd","reasonCode":"2201","reasonName":"下重单","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":56,"fiveCode":"gqu","id":58,"lastOperator":"admin","phoneticCode":"xcd","reasonCode":"2202","reasonName":"下错单","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":56,"fiveCode":"nmu","id":59,"lastOperator":"system","phoneticCode":"gzs","reasonCode":"2203","reasonName":"改赠送","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":56,"fiveCode":"bkdl","id":60,"lastOperator":"system","phoneticCode":"cpyy","reasonCode":"2204","reasonName":"出品原因","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"kaqy","id":56,"lastOperator":"system","phoneticCode":"ygcw","reasonCode":"22","reasonName":"员工错误","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":0,"fiveCode":"jjdg","id":1020,"lastOperator":"admin","phoneticCode":"lsys","reasonCode":"28","reasonName":"临时有事","remark":"朋友临时有事，取消菜品","state":"","tenancyId":"fuhuaxinrui","unusualType":"TC03","updatetime":"","validState":"1"}],"classItem":"","fatherId":"","fiveCode":"","id":0,"lastOperator":"","phoneticCode":"","reasonCode":"TC03","reasonName":"退菜","remark":"","state":"","tenancyId":"","unusualType":"","updatetime":"","validState":""},{"children":[{"children":[{"children":[],"classItem":"","fatherId":18,"fiveCode":"988rrh","id":20,"lastOperator":"system","phoneticCode":"988dzk","reasonCode":"0801","reasonName":"988打折卡","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":18,"fiveCode":"ymrrh","id":22,"lastOperator":"system","phoneticCode":"dndzk","reasonCode":"0802","reasonName":"店内打折卡","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":18,"fiveCode":"5fu","id":1005,"lastOperator":"admin","phoneticCode":"5yq","reasonCode":"0803","reasonName":"5元券","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":18,"fiveCode":"20fu","id":1006,"lastOperator":"admin","phoneticCode":"20yq","reasonCode":"0804","reasonName":"20元券","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":18,"fiveCode":"15fwqu","id":1007,"lastOperator":"admin","phoneticCode":"15ydjq","reasonCode":"0805","reasonName":"15元代金券","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":18,"fiveCode":"10fu","id":1008,"lastOperator":"admin","phoneticCode":"10yq","reasonCode":"0806","reasonName":"10元券","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":18,"fiveCode":"128fidjwg","id":1009,"lastOperator":"admin","phoneticCode":"128yxlxyh","reasonCode":"0807","reasonName":"128元小龙虾优惠","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":18,"fiveCode":"iqgmvr","id":1016,"lastOperator":"liuchao","phoneticCode":"hxlcjz","reasonCode":"0808","reasonName":"海象理财九折","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"wqif","id":18,"lastOperator":"system","phoneticCode":"cxhd","reasonCode":"08","reasonName":"促销活动","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"},{"children":[{"children":[],"classItem":"","fatherId":28,"fiveCode":"kaeh","id":30,"lastOperator":"system","phoneticCode":"ygyc","reasonCode":"1401","reasonName":"员工用餐","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":28,"fiveCode":"wneh","id":31,"lastOperator":"system","phoneticCode":"ldyc","reasonCode":"1402","reasonName":"领导用餐","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"murr","id":28,"lastOperator":"system","phoneticCode":"nbzk","reasonCode":"14","reasonName":"内部折扣","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"},{"children":[{"children":[],"classItem":"","fatherId":33,"fiveCode":"gnpy","id":35,"lastOperator":"system","phoneticCode":"kfkh","reasonCode":"1501","reasonName":"开发客户","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"xrpy","id":33,"lastOperator":"system","phoneticCode":"whkh","reasonCode":"15","reasonName":"维护客户","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"ZK04","updatetime":"","validState":"1"}],"classItem":"","fatherId":"","fiveCode":"","id":0,"lastOperator":"","phoneticCode":"","reasonCode":"ZK04","reasonName":"折扣","remark":"","state":"","tenancyId":"","unusualType":"","updatetime":"","validState":""},{"children":[{"children":[{"children":[],"classItem":"","fatherId":7,"fiveCode":"gnrr","id":8,"lastOperator":"system","phoneticCode":"ggzk","reasonCode":"0401","reasonName":"更改折扣","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"HF05","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":7,"fiveCode":"gnxmya","id":12,"lastOperator":"system","phoneticCode":"ggjzfs","reasonCode":"0404","reasonName":"更改结账方式","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"HF05","updatetime":"","validState":"1"},{"children":[],"classItem":"","fatherId":7,"fiveCode":"gnixjx","id":13,"lastOperator":"system","phoneticCode":"ggxftzxstart","reasonCode":"0405","reasonName":"更改消费明细","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"HF05","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"rwry","id":7,"lastOperator":"system","phoneticCode":"czsw","reasonCode":"04","reasonName":"操作失误","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"HF05","updatetime":"","validState":"1"},{"children":[{"children":[],"classItem":"","fatherId":15,"fiveCode":"pwsf","id":16,"lastOperator":"system","phoneticCode":"kryq","reasonCode":"0701","reasonName":"客人要求","remark":"","state":"","tenancyId":"fuhuaxinrui","unusualType":"HF05","updatetime":"","validState":"1"}],"classItem":"","fatherId":0,"fiveCode":"pwdl","id":15,"lastOperator":"system","phoneticCode":"kryy","reasonCode":"07","reasonName":"客人原因","remark":"","state":"closed","tenancyId":"fuhuaxinrui","unusualType":"HF05","updatetime":"","validState":"1"}],"classItem":"","fatherId":"","fiveCode":"","id":0,"lastOperator":"","phoneticCode":"","reasonCode":"HF05","reasonName":"恢复账单","remark":"","state":"","tenancyId":"","unusualType":"","updatetime":"","validState":""}],
        treeDefaultProps: {
          children: 'children',
          label: 'reasonName'
        }
      }
    },
    computed:{
        tablesData:function(){
          let arrs = this.tableData;
         arrs.map(function(item,arrs){
          item.valid_state = item.valid_state=="1"?"有效":"无效";
          switch(item.father_id){
            case 2:
            item.father_id = "营销活动";
            break;
            case 0:
            item.father_id = "奉送";
            break;
            case 6:
            item.father_id = "投诉处理";
            break;
            case 7:
            item.father_id = "操作失误";
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
        this.$router.push({path:'addAssignableCause'});
      },
       // 树组织 点击事件
      handleTreeNodeClick(data) {
        console.log("树组织节点被点击:"+JSON.stringify(data));
      },
      // 刷选树组织
      filterTreeNode(value, data){
        if (!value) return true;
        return data.reasonName.indexOf(value) !== -1;
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
        this.$router.push({path:'addAssignableCause'});
      },
      stop(index,row){
        console.info("将要被修改状态的数据:"+JSON.stringify(row))
      },
      allotStore(index,row){
        console.info("需要分配门店的数据:"+JSON.stringify(row))
        this.$router.push({path:'allotStore'});
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
  .el-select{
    width:80px;
  }
</style>