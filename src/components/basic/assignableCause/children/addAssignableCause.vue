<!-- 异常原因新增 -->
<template>
 <div>

    <el-container>
        <!-- 标题区域 -->
        <el-header>
          <span style="float:left;">新增异常原因</span>
        </el-header>
        <!-- 表单区域 -->
        <el-main>
          <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="类型" prop="unusual_type">
            <el-select v-model="form.unusual_type" placeholder="请选择类型" style="width:15%;">
              <el-option label="线上取消" value="线上取消"></el-option>
              <el-option label="投诉" value="投诉"></el-option>
              <el-option label="门店取消" value="门店取消"></el-option>
              <el-option label="退款说明" value="退款说明"></el-option>
              <el-option label="免单" value="免单"></el-option>
              <el-option label="奉送" value="奉送"></el-option>
              <el-option label="退菜" value="退菜"></el-option>
              <el-option label="折扣" value="折扣"></el-option>
              <el-option label="恢复账单" value="恢复账单"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="名称"  prop="reason_name">
            <el-input v-model="form.reason_name"></el-input>
          </el-form-item>
          <el-form-item label="上级" prop="father_id1">
            <el-select v-model="form.father_id1" placeholder="请选择类型" style="width:15%;">
              <el-option label="餐位类型" value="餐位类型"></el-option>
              <el-option label="营业区域" value="营业区域"></el-option>
              <el-option label="菜品做法" value="菜品做法"></el-option>
              <el-option label="经营方式" value="经营方式"></el-option>
              <el-option label="店面级别" value="店面级别"></el-option>
              <el-option label="地区级别" value="地区级别"></el-option>
              <el-option label="营销类别" value="营销类别"></el-option>
              <el-option label="活动使用场景" value="活动使用场景"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="三方编码">
            <el-input v-model="form.third_code"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.remark" :rows="8"></el-input>
          </el-form-item>
           <!-- <el-input v-model="form.id" type="hidden"></el-input> -->
        </el-form>
        </el-main>
        <!-- 按钮区域 -->
        <el-footer>
          <div style="float:right;">
          <el-button type="danger" @click="saveFrom">保存</el-button>
          <el-button type="success" @click="saveAndContinue">保存并继续</el-button>
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
      let cacheData  = this.$store.state.cacheData;
      return {
        isValid:false,//表单重置前 表单是否验证通过
        form: { //待提交表单属性
          unusual_type: cacheData.unusual_type || '',
          reason_name: cacheData.reason_name || '',
          father_id1: cacheData.father_id1 || '',
          third_code: cacheData.third_code || '',
          remark: cacheData.remark || '',
          id: cacheData.id || ''
        },
        rules: {//表单必填项验证规则
          unusual_type:[
            {required: true, message: '请选择类型',trigger: 'change'}
          ],
          reason_name:[
            { required: true, message: '请填写名称',trigger: 'change'}
          ],
          father_id1:[
            { required: true, message: '请选择上一级',trigger: 'change'}
          ],
        }
      }
      },
    methods: {
      // 保存表单
    saveFrom() {
      this.$refs['form'].validate((valid) => {
          if (valid) {
            console.info("待提交的数据是:"+JSON.stringify(this.form))
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
      this.$destroy();
      this.$router.push('assignableCause');
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