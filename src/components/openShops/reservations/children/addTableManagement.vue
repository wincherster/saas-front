<!-- 新增桌位管理 -->
<template>
    <div>
        <div>新增桌位管理</div>
        <div>机构名称: 0107报表专用测试（勿动）</div>
        <!-- 表单内容 -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="编号" prop="code">
            <el-input v-model="ruleForm.code"></el-input>
          </el-form-item>
          <el-form-item label="名称" prop="mingcheng">
            <el-input v-model="ruleForm.mingcheng"></el-input>
          </el-form-item>
          <el-form-item label="餐位类型" prop="type">
            <el-select v-model="ruleForm.type" >
              <el-option label="三人桌" value="shanghai"></el-option>
              <el-option label="十八人台" value="beijing"></el-option>
              <el-option label="四人台" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="营业区域" prop="region">
            <el-select v-model="ruleForm.region" >
              <el-option label="f区" value="shanghai"></el-option>
              <el-option label="e区" value="beijing"></el-option>
              <el-option label="c区" value="beijing"></el-option>
            </el-select>
          </el-form-item>
            <el-form-item label="座位数">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          <el-form-item label="服务费" prop="servince">
            <el-select v-model="ruleForm.servince" >
              <el-option label="基本服务费" value="shanghai"></el-option>
              <el-option label="清空服务费" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="打印机" prop="printer">
            <el-select v-model="ruleForm.printer" >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="单桌营业" prop="singleDeskBusiness">
            <el-select v-model="ruleForm.singleDeskBusiness" >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注" >
             <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button type="primary" @click="saveAndContinue('ruleForm')">保存并继续</el-button>
            <el-button @click="cancel('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
      return {
        //表单状态
        isValid:false,
        //表单属性
        ruleForm: {
          code:'',
          mingcheng: '',
          region: '',
          type:'',
          name:'',
          servince:'',
          printer:'',
          singleDeskBusiness: '',
           desc: ''
        },
        //表单验证规则
        rules: {
          code: [
            { required: true, message: '请输入桌位编号', trigger: 'blur' }
          ],
          mingcheng: [
            { required: true, message: '请输入桌位名称', trigger: 'blur' }
          ],         
          type: [
            { required: true,  trigger: 'change' }
          ],
          region: [
            { required: true,  trigger: 'change' }
          ],
          servince: [
            {  trigger: 'change' }
          ],
          printer: [
            {  trigger: 'change' }
          ],
          singleDeskBusiness: [
            {   trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      // 表单保存提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.isValid = true;
          } else {
            console.log('error submit!!');
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
      //表单重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 取消时候返回
      cancel(){
        this.$router.push('dictionaryDefend');
      },
    }
  }
</script>
<style scoped>

    
</style>