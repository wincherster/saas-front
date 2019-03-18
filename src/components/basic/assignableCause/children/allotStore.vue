<!-- 异常原因新增 -->
<template>
 <div>

    <el-container>
        <!-- 标题区域 -->
        <el-header>
          <div style="float:left;">
              <el-input placeholder="请输入内容" v-model="filterText" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="searchTree"></el-button>
              </el-input>
          </div>
          <div style="float:right;">
            <el-radio-group v-model="resource">
              <el-radio label="全部"></el-radio>
              <el-radio label="已选"></el-radio>
              <el-radio label="未选"></el-radio>
            </el-radio-group>
          </div>
        </el-header>
        <!-- 表单区域 -->
        <el-main>
          <el-tree show-checkbox  :data="treeData" :props="treeDefaultProps" @node-click="handleTreeNodeClick" :filter-node-method="filterTreeNode" ref="treeNode"></el-tree>
        </el-main>
        <!-- 按钮区域 -->
        <el-footer>
          <div style="float:right;">
          <el-button type="danger" @click="saveFrom">保存</el-button>
          <el-button @click="cancel">返回</el-button>
          </div>
        </el-footer>
    </el-container>
 </div>
</template>
<script>
  import { mapGetters,mapMutations, mapActions  } from 'vuex'
  export default{
    data() {
      return {
        filterText:'',
        resource:'全部',
        treeData:[{"children":[{"children":[{"children":[{"children":[{"children":[],"code":"01001001001","fatherId":2,"id":22,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_17m4uxl4eaponiqyjrfn1jmc1w8b16xr","state":"","tenantstate":"1","text":"01001001001爱炉国贸店","type":"3"},{"children":[],"code":"01001001002","fatherId":2,"id":25,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_h8nhwptimlx9ox7nbihg5kksew4vsrsf","state":"","tenantstate":"1","text":"01001001002北京爱炉火锅大望路店","type":"3"}],"code":"01001001","fatherId":1,"id":2,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_eohjs7p9foar53d3uh00b13hobmfut82","state":"","tenantstate":"","text":"01001001爱炉(北京)","type":"1"},{"children":[{"children":[],"code":"01001002001","fatherId":3,"id":35,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_95467e5cb2dd4cd9ab64a43753815fe7","state":"","tenantstate":"1","text":"01001002001北京一面如故大望路店","type":"3"}],"code":"01001002","fatherId":1,"id":3,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_21sq2puf4f2slg3vof9024havjfvmjp6","state":"","tenantstate":"","text":"01001002一面如故(北京)","type":"1"},{"children":[{"children":[],"code":"01001003001","fatherId":4,"id":5,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_q790m1xrvus3w3r61l6iv1z0g0k6n628","state":"","tenantstate":"1","text":"01001003001北京真真小吃后现代城店","type":"3"},{"children":[],"code":"01001003002","fatherId":4,"id":6,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_q4dedxf87l24jxz2anc1ot811iw3x28m","state":"","tenantstate":"1","text":"01001003002北京真真小吃金都杭城店","type":"3"},{"children":[],"code":"01001003003","fatherId":4,"id":23,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_ex3xh1p1i4fxb8u8wxauowt5nfntxapk","state":"","tenantstate":"1","text":"01001003003北京真真小吃天通苑店","type":"3"},{"children":[],"code":"01001003004","fatherId":4,"id":27,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_56t9seb76hwvxckkc6dg6qozxpxbdtov","state":"","tenantstate":"","text":"01001003004北京真真小吃盒马东坝店","type":"3"},{"children":[],"code":"01001003005","fatherId":4,"id":28,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_3a8976347443496e863af77e52a80c6b","state":"","tenantstate":"1","text":"01001003005北京真真小吃叁点叁店","type":"3"},{"children":[],"code":"01001003006","fatherId":4,"id":29,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_22f1fd6568b94a89861f684128a2c57a","state":"","tenantstate":"1","text":"01001003006北京真真小吃北花园店","type":"3"},{"children":[],"code":"01001003007","fatherId":4,"id":30,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_03ca6981bba84a31837b197c8895be84","state":"","tenantstate":"1","text":"01001003007北京真真小吃万达新世界店","type":"3"}],"code":"01001003","fatherId":1,"id":4,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_ehjytydma7q6omde3qfrp2fapmoxldvm","state":"","tenantstate":"","text":"01001003真真小吃(北京)","type":"1"},{"children":[],"code":"01001006","fatherId":1,"id":15,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_nvy6l0qa4f24p8cqja67z5ipjqu423ui","state":"","tenantstate":"","text":"01001006会所(北京)","type":"1"},{"children":[{"children":[],"code":"01001008001","fatherId":31,"id":33,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_5b51f9c15d6d4587a5f50fd292e24418","state":"","tenantstate":"","text":"01001008001粉茶奥体天虹店","type":"3"},{"children":[],"code":"01001008002","fatherId":31,"id":34,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_d26b0b94cb9e46989b2dd309c5821ee4","state":"","tenantstate":"","text":"01001008002粉茶后现代城店","type":"3"},{"children":[],"code":"01001008003","fatherId":31,"id":36,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_558ca19171d8433ab9df812df58d05f0","state":"","tenantstate":"","text":"01001008003粉茶崇文门店","type":"3"}],"code":"01001008","fatherId":1,"id":31,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_48a893f0edda47aa83d64afa7615f4f7","state":"","tenantstate":"","text":"01001008粉茶(北京)","type":"1"},{"children":[],"code":"01001009","fatherId":1,"id":32,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_90c269b1f9b34fdaa1f806c2cf9565d5","state":"","tenantstate":"","text":"01001009D5厨房（北京）","type":"1"},{"children":[{"children":[],"code":"01001021001","fatherId":20,"id":21,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_30u95wwcz1mydzoxx7w71kz0hlq2f4i9","state":"","tenantstate":"1","text":"01001021001竹堂里博瑞店","type":"3"},{"children":[],"code":"01001021002","fatherId":20,"id":26,"level":3,"operatesum":0,"orguuid":"fuhuaxinrui_eeeh9o4cthx5e62n0eb7qo1xr6s2oihu","state":"","tenantstate":"1","text":"01001021002竹堂里国贸店","type":"3"}],"code":"01001021","fatherId":1,"id":20,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_beboo174bynimgk67zsykt3wv841dp29","state":"","tenantstate":"","text":"01001021竹堂里","type":"1"}],"code":"01001","fatherId":18,"id":1,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_jq36htj59b95zhemrkyhnegdu826qv8l","state":"","tenantstate":"","text":"01001北京","type":"1"},{"children":[],"code":"01002","fatherId":18,"id":10,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_61fnq95s411xh5mys8k3indmrnugegxr","state":"","tenantstate":"","text":"01002丽江","type":"1"},{"children":[{"children":[],"code":"01003001","fatherId":7,"id":11,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_jr1g0b7jcrptibpfao4uqgedc6r2ry2j","state":"","tenantstate":"","text":"01003001保留2","type":"1"},{"children":[],"code":"01003002","fatherId":7,"id":12,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_34bzzexzt5x7tlpgxzj9tj6gsddqnzo0","state":"","tenantstate":"","text":"01003002保留3","type":"1"},{"children":[],"code":"01003003","fatherId":7,"id":8,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_l28w83s9441svmvl50934keizjlg6ei5","state":"","tenantstate":"","text":"01003003保留1","type":"1"},{"children":[],"code":"01003005","fatherId":7,"id":14,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_7653npyu93nwnkwirxrl4ghj6atq2t8m","state":"","tenantstate":"1","text":"01003005徽州里","type":"3"}],"code":"01003","fatherId":18,"id":7,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_kdco2jemx0h2dqqpsek4dgavek64o6it","state":"","tenantstate":"","text":"01003黄山","type":"1"},{"children":[],"code":"01004","fatherId":18,"id":9,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_o68mqzs2xdvezohb16ssnjo4yat74iny","state":"","tenantstate":"","text":"01004九寨","type":"1"},{"children":[{"children":[],"code":"01005001","fatherId":16,"id":17,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_pryja4dq85r3vicduir9kpwffndth20r","state":"","tenantstate":"","text":"01005001北京配送中心","type":"2"}],"code":"01005","fatherId":18,"id":16,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_2bj6aomrrxqlcwa00wnjb5iyf4lsvdqx","state":"","tenantstate":"","text":"01005北京中央厨房","type":"1"},{"children":[],"code":"01006","fatherId":18,"id":37,"level":2,"operatesum":0,"orguuid":"fuhuaxinrui_8e39bd001d0148acb45805e4510f7b3a","state":"","tenantstate":"","text":"01006华大大","type":"3"}],"code":"01","fatherId":0,"id":18,"level":1,"operatesum":0,"orguuid":"fuhuaxinrui_awtxxhgj2d3jvpwc2hsbg1nhsk2bv8bi","state":"","tenantstate":"","text":"01复华新锐","type":"1"}],"code":"","fatherId":"","id":0,"level":0,"operatesum":0,"orguuid":"","state":"","tenantstate":"","text":"总部","type":"1"}],
        treeDefaultProps: {
          children: 'children',
          label: 'text'
          }
        }
      },
       watch:{
      resource(val) {
        console.info("过滤当前状态的所有节点:"+val)
      }
      },
    methods: {
      // 树组织 点击事件
      handleTreeNodeClick(data) {
        console.log("树组织节点被点击:"+JSON.stringify(data));
      },
      // 刷选树组织
      filterTreeNode(value, data){
        if (!value) return true;
        return data.text.indexOf(value) !== -1;
      },
      searchTree(){
        this.$refs.treeNode.filter(this.filterText);
      },
      // 保存表单
      saveFrom() {
        let nodes = this.$refs.treeNode.getCheckedNodes()
        console.info("获取选中节点的集合:"+JSON.stringify(nodes))
        this.$router.push('assignableCause');
      },
      // 返回上一页
      cancel(){
        this.$router.push('assignableCause');
      },
      radioChange(){
        alert(this.resource)
      }

    }
  } 
</script>
<style scoped>
.el-header, .el-footer {
  border:solid 1px lightgrey;
  text-align: center;
  line-height: 60px;
}
.el-main {
  border:solid 1px lightgrey;
  text-align: center;
  line-height: 160px;
  height: 500px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
  
</style>