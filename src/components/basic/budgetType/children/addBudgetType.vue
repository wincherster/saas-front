<!-- 收支类型新增 -->
<template>
 <div>

    <el-container>
        <!-- 标题区域 -->
        <el-header>
          <span style="float:left;">新增收支类型</span>
        </el-header>
        <!-- 表单区域 -->
        <el-main>
          <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="类型" prop="class_item">
            <el-select v-model="form.class_item" placeholder="请选择类型" style="width:15%;">
              <el-option label="费用支出" value="费用支出"></el-option>
              <el-option label="营业外收入" value="营业外收入"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="名称"  prop="inout_name">
            <el-input v-model="form.inout_name"></el-input>
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
          class_item: cacheData.class_item || '',
          inout_name: cacheData.inout_name || '',
          remark: cacheData.remark || '',
          id: cacheData.id || ''
        },
        rules: {//表单必填项验证规则
          class_item:[
            {required: true, message: '请选择类型',trigger: 'change'}
          ],
          inout_name:[
            { required: true, message: '请填写名称',trigger: 'change'}
          ]
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
      this.$router.push('budgetType');
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