<!-- 运营字典新增 -->
<template>
 <div>
    <el-container>
        <!-- 标题区域 -->
        <!-- <span>{{cacheData}}</span> -->
        <el-header>
          <span style="float:left;">新增字典</span>
        </el-header>
        <!-- 表单区域 -->
        <el-main>
          <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="类型" prop="class_identifier">
            <el-select v-model="form.class_identifier" placeholder="请选择类型" style="width:15%;">
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
          <el-form-item label="名称"  prop="class_item">
            <el-input v-model="form.class_item"></el-input>
          </el-form-item>
          <el-form-item label="编码">
            <el-input v-model="form.class_item_code"></el-input>
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
      let cacheData = this.$store.state.cacheData;
      return {
        isValid:false,//表单重置前 表单是否验证通过
        form: { //待提交表单属性
          class_identifier: cacheData.class_identifier || '',
          class_item: cacheData.class_item || '',
          class_item_code: cacheData.class_item_code || '',
          remark: cacheData.remark || '',
          id: cacheData.id || ''
        },
        // cacheData: '',
        rules: {//表单必填项验证规则
          class_identifier:[
            {required: true, message: '请选择类型',trigger: 'change'}
          ],
          class_item:[
            {required: true, message: '请填写名称',trigger: 'change'}
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
      this.$destroy()
      this.$router.push('dictionaryDefend');
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