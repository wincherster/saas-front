<template>
 <div class="body-header">
    <!-- 右侧 -->
     <div class="fl-right">
        <!-- 首页 -->
        <div class="Header-not">
            <router-link to="/">
            <i class="saas saas-header-home"></i>
            </router-link>
        </div>
        <!-- 消息 -->
        <div class="Header-not">
            <router-link to="/">
            <i class="saas saas-header-inform"></i>
            </router-link>
        </div>
        <!-- 用户 -->
         <div class="Header-user">
             <el-dropdown>
                <span class="el-dropdown-link">
                    <i class="saas saas-header-admin fl-left"></i>
                    <span class="header-adminname fl-left">慕容小星</span>     
                    <i class="el-icon-caret-bottom el-icon--right fl-left"></i>
                </span>
                <!-- 弹出框 -->
                 <el-dropdown-menu slot="dropdown">
                     <div>
                         <div class="Header-portrait">
                             <img class="Header-img" src='./../assets/images/tx.png'>
                         </div>
                         <div class="Header-usernm">
                             <p class="Header-nm">慕容小星</p>
                             <div class="Header-include">
                                 <span class="Header-dm">部门：</span>
                                 <span class="Header-sf">北京产品-UED组</span>
                             </div>
                             <div class="Header-includeone">
                                 <span class="Header-dm">职位：</span>
                                 <span class="Header-sf">店长</span>
                             </div>
                         </div>
                         <div class="Header-btn">
                             <button class="saasbtn saasbtn-service btn-margin">
                                 <i class="saas saas-header-returnguide iconbtn-left"></i>
                                 <span>返回引导页</span>
                             </button>
                             <button class="saasbtn saasbtn-service btn-margin">
                                 <i class="saas saas-header-changepassword iconbtn-left"></i>
                                 <span>修改密码</span>
                             </button>
                             <button class="saasbtn saasbtn-service">
                                 <i class="saas saas-header-logout iconbtn-left"></i>
                                 <span>退出系统</span>
                             </button>
                         </div>
                     </div>
                 </el-dropdown-menu>
             </el-dropdown>
         </div>
     </div>
 </div>
</template>

<style lang="less" scoped>
/* 外部大框 */
.body-header {
  height: 46px;
  width: 100%;
  background-color: #fff;
  // box-shadow: 14px 0 rgba(33, 41, 50, 0.05);
  // border-bottom: 1px solid #edf0f4;
}

/* 首页和消息 */
.Header-not {
  float: left;
  width: 20px;
  height: 20px;
  margin-left: 20px;
  margin-top: 13px;
}
.Header-not a{
  text-decoration: none;
}
/* 用户 */
.Header-user {
  float: left;
  margin-left: 20px;
  margin-top: 13px;
  margin-right: 20px;
}
.header-adminname {
  margin-left: 6px;
  font-size: 14px;
}
// 小三角
.el-icon--right {
  line-height: 20px;
  transition: 0.3s;
}
.Header-user:hover .el-icon--right {
  transform: rotateZ(180deg);
}
// 字体图标大小 hover颜色
.saas-header-home,
.saas-header-inform,
.saas-header-admin {
  font-size: 14px;
  line-height: 20px;
}
.saas-header-home:hover,
.saas-header-inform:hover,
.Header-user:hover .saas-header-admin,
.Header-user:hover .header-adminname {
  color: #0c9aff;
}
// 修改弹出框-------------------------------------------------------
.el-dropdown-menu {
  width: 318px;
  height: 160px;
  padding: 0;
}
// 左边头像
.Header-portrait {
  float: left;
  width: 60px;
  height: 60px;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 20px;
}
.Header-img {
  display: block;
  width: 60px;
  height: 60px;
}
// 右边
.Header-usernm {
  float: left;
  width: 188px;
}
.Header-nm {
  font-size: 14px;
  line-height: 14px;
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 9px;
}
.Header-dm {
  font-size: 12px;
  line-height: 22px;
  color: #758896;
}
.Header-sf {
  font-size: 12px;
  line-height: 22px;
  color: #34495e;
}
// 下边按钮
.Header-btn {
  float: left;
  margin-top: 20px;
  margin-left: 16px;
}
.Header-btn span{
    font-size: 12px;
}
.btn-margin {
  float: left;
  margin-right: 8px;
}

.saasbtn-service:hover .saas{
  color: #fff;
}
.saasbtn-service:hover span{
  color: #fff!important;
}
</style>
