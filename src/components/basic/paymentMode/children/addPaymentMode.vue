<!-- 付款方式新增 -->
<template>
 <div>
    <el-container>
        <!-- 标题区域 -->
        <el-header>
          <span style="float:left;">
          新增{{currentTab=="yhk"?"银行卡":currentTab=="hz"?"合作":currentTab=="md"?"免单":currentTab=="qt"?"其它":"现金币种"}}
        </span>
        </el-header>
        <!-- 表单区域 -->
        <el-main>
          <!-- 现金币种 -->
          <el-form ref="xjbzform" :model="xjbzform" :rules="xjbzrules" label-width="80px" v-if="isxjbz">
              <el-form-item label="名称" prop="payment_name1">
                <el-select v-model="xjbzform.payment_name1" placeholder="请选择">
                  <el-option label="欧元" value="38"></el-option>
                  <el-option label="人民币" value="39"></el-option>
                  <el-option label="美元" value="40"></el-option>
                  <el-option label="日元" value="41"></el-option>
                  <el-option label="港币" value="42"></el-option>
                  <el-option label="其它" value="43"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="状态">
                <el-select v-model="xjbzform.status" placeholder="请选择">
                  <el-option label="有效" value="0"></el-option>
                  <el-option label="停用" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否本币">
                <el-select v-model="xjbzform.is_standard_money" placeholder="请选择">
                  <el-option label="否" value="0"></el-option>
                  <el-option label="是" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="汇率" prop="rate">
                <el-input v-model="xjbzform.rate"></el-input>
              </el-form-item>
              <el-form-item label="是否开发票">
                <el-select v-model="xjbzform.if_invoicing" placeholder="请选择">
                  <el-option label="是" value="0"></el-option>
                  <el-option label="否" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否可积分">
                <el-select v-model="xjbzform.if_jifen" placeholder="请选择">
                  <el-option label="是" value="0"></el-option>
                  <el-option label="否" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否预付款">
                <el-select v-model="xjbzform.if_prepay" placeholder="请选择">
                  <el-option label="是" value="0"></el-option>
                  <el-option label="否" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否记收入">
                <el-select v-model="xjbzform.if_income" placeholder="请选择">
                  <el-option label="是" value="0"></el-option>
                  <el-option label="否" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="第三房编码">
                <el-input v-model="xjbzform.third_code"></el-input>
              </el-form-item>
              <el-form-item label="备注">
                <el-input v-model="xjbzform.comment"></el-input>
              </el-form-item>
          </el-form>
          <!-- 银行卡 -->
          <el-form ref="yhkform" :model="yhkform" :rules="yhkrules" label-width="80px" v-if="isyhk">
              <el-form-item label="名称" prop="payment_name1">
                <el-input v-model="yhkform.payment_name1"></el-input>
              </el-form-item>
              <el-form-item label="状态">
                <el-select v-model="yhkform.status" placeholder="请选择">
                  <el-option label="有效" value="0"></el-option>
                  <el-option label="停用" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="银行" prop="bank">
                <el-select v-model="yhkform.bank" placeholder="请选择">
                  <el-option label="中国银行" value="0"></el-option>
                  <el-option label="中国建设银行" value="1"></el-option>
                  <el-option label="中国工商银行" value="2"></el-option>
                  <el-option label="中国农业银行" value="3"></el-option>
                  <el-option label="中国招商银行" value="4"></el-option>
                  <el-option label="中国交通银行" value="5"></el-option>
                </el-select>
              </el-form-item>
               <el-form-item label="是否开发票">
                <el-select v-model="yhkform.if_invoicing" placeholder="请选择">
                  <el-option label="是" value="0"></el-option>
                  <el-option label="否" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否可积分">
                <el-select v-model="yhkform.if_jifen" placeholder="请选择">
                  <el-option label="是" value="0"></el-option>
                  <el-option label="否" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否预付款">
                <el-select v-model="yhkform.if_prepay" placeholder="请选择">
                  <el-option label="是" value="0"></el-option>
                  <el-option label="否" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否记收入">
                <el-select v-model="yhkform.if_income" placeholder="请选择">
                  <el-option label="是" value="0"></el-option>
                  <el-option label="否" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="账单限额">
                <el-input v-model="yhkform.bill_limits"></el-input>
              </el-form-item>
              <el-form-item label="折扣方案" >
                <el-select v-model="yhkform.discount_case" placeholder="请选择">
                  <el-option label="整单八八折" value="0"></el-option>
                  <el-option label="八八折" value="1"></el-option>
                  <el-option label="员工68折" value="2"></el-option>
                  <el-option label="海象理财九折" value="3"></el-option>
                  <el-option label="七夕七七折" value="4"></el-option>
                  <el-option label="测试" value="5"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="第三方编码">
                <el-input v-model="yhkform.third_code"></el-input>
              </el-form-item>
              <el-form-item label="银行费率">
                <el-input v-model="yhkform.bank_rate"></el-input>
              </el-form-item>
              <el-form-item label="备注">
                <el-input v-model="yhkform.comment"></el-input>
              </el-form-item>
          </el-form>
          <!-- 合作 -->
          <el-form ref="hzform" :model="hzform" :rules="hzrules" label-width="80px" v-if="ishz">
            合作
          </el-form>
          <!-- 免单 -->
          <el-form ref="mdform" :model="mdform" :rules="mdrules" label-width="80px" v-if="ismd">
            免单
          </el-form>
          <!-- 其它 -->
          <el-form ref="qtform" :model="qtform" :rules="qtrules" label-width="80px" v-if="isqt">
            其它
          </el-form>
        </el-main>

        <el-footer>
          <div style="float:right;">
          <el-button type="danger" @click="saveFrom(currentTab)">保存</el-button>
          <el-button type="success" @click="saveAndContinue(currentTab)">保存并继续</el-button>
          <el-button @click="cancel">返回</el-button>
          </div>
        </el-footer>
    </el-container>
 </div>
</template>
<script>
  export default{
    data() {
      // 获取缓存数据
      let cacheData = this.$store.state.cacheData;
      let currentTab = this.$store.state.currentTab;
      return {
        isxjbz:currentTab=="xjbz"?true:false,
        isyhk:currentTab=="yhk"?true:false,
        ishz:currentTab=="hz"?true:false,
        ismd:currentTab=="md"?true:false,
        isqt:currentTab=="qt"?true:false,
        currentTab:currentTab,
        isValid:false,//表单重置前 表单是否验证通过
        xjbzform:{
          payment_name1:'39',
          status:'0',
          is_standard_money:'1',
          rate:'',
          if_invoicing:'1',
          if_jifen:'0',
          if_prepay:'1',
          if_income:'0',
          third_code:'',
          comment:''
        },
        xjbzrules:{
          payment_name1:[
            { required: true, message: '请选择名称', trigger: 'change' }
          ],
          rate:[
            { required: true, message: '请输入汇率', trigger: 'change' }
          ]
        },
        yhkform:{
          payment_name1:'',
          status:'0',
          bank:'0',
          if_invoicing:'0',
          if_jifen:'1',
          if_prepay:'1',
          if_income:'0',
          bill_limits:'',
          discount_case:'0',
          third_code:'',
          bank_rate:'',
          comment:''
        },
        yhkrules:{
          payment_name1:[
            { required: true, message: '请选择名称', trigger: 'change' }
          ],
          bank:[
            { required: true, message: '请选择银行', trigger: 'change' }
          ]
        },
        hzform:{
          payment_name1:'',
          status:'',
          if_invoicing:'',
          if_jifen:'',
          if_prepay:'',
          if_income: ''
        },
        hzrules:{

        },
        mdform:{

        },
        mdrules:{

        },
        qtform:{

        },
        qtrules:{

        }

        // form: {
        //   class_identifier: cacheData.class_identifier || '',
        //   class_item: cacheData.class_item || '',
        //   class_item_code: cacheData.class_item_code || '',
        //   remark: cacheData.remark || '',
        //   id: cacheData.id || ''
        // },
        // cacheData: '',
        // rules: {//表单必填项验证规则
        //   class_identifier:[
        //     {required: true, message: '请选择类型',trigger: 'change'}
        //   ],
        //   class_item:[
        //     {required: true, message: '请填写名称',trigger: 'change'}
        //   ]
        // }
      }
      },
    methods: {
      // 保存表单
    saveFrom(formName) {
      let  form_Name = formName+'form'
      this.$refs[form_Name].validate((valid) => {
          if (valid) {
            console.info("待提交的数据是:"+JSON.stringify(this[form_Name]))
            this.isValid = true;
          } else {
            this.isValid = false;
            return false;
          }
        });
    },
    // 保存表单 并且 重置表单
    saveAndContinue(){
      this.saveFrom();
      this.resetForm();

    },
    // 返回上一页
    cancel(){
      this.$destroy()
      this.$router.push('paymentMode');
    },
    // 重置表单
    resetForm() {
      if(this.isValid){
        this.$refs['form'].resetFields();
        }
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