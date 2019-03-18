<template>
    <div>
        <!-- 标题 -->
        <h3 class="text-left business-header">修改营业资料</h3>
        <div>
            <!-- 店名 -->
            <p class="text-left">店名：{{1}}</p>
            <!-- tab栏 -->
            <el-tabs type="border-card">
                <!-- 餐谱 -->
                <el-tab-pane>
                    <span slot="label">餐谱</span>
                    <diet-menu></diet-menu>
                </el-tab-pane>
                <!-- 付款方式 -->
                <el-tab-pane>
                    <span slot="label">付款方式</span>
                    <pay-way></pay-way>                    
                </el-tab-pane>
                <!-- 营业班次 -->
                <el-tab-pane>
                    <span slot="label">营业班次</span>
                    <classes></classes>
                </el-tab-pane>
                <!-- 桌位 -->
                <el-tab-pane>
                    <span slot="label">桌位</span>
                    <reservations></reservations>
                </el-tab-pane>
                <!-- 服务费 -->
                <el-tab-pane>
                    <span slot="label">服务费</span>
                    <service-charge></service-charge>
                </el-tab-pane>
                <!-- 异常原因 -->
                <el-tab-pane>
                    <span slot="label">异常原因</span>
                    <abnormal-cause></abnormal-cause>
                </el-tab-pane>
                <!-- 口味备注 -->
                <el-tab-pane>
                    <span slot="label">口味备注</span>
                    <taste-node></taste-node>
                </el-tab-pane>
                <!-- 厨打类别 -->
                <el-tab-pane>
                    <span slot="label">厨打类别</span>
                    <kitchen-type></kitchen-type>
                </el-tab-pane>
                <!-- 打印机 -->
                <el-tab-pane>
                    <span slot="label">打印机</span>
                    <printer></printer>
                </el-tab-pane>
                <!--折扣方案 -->
                <el-tab-pane>
                    <span slot="label">折扣方案</span>
                    <discount-methods></discount-methods>  
                </el-tab-pane>
                <!-- 时段特价 -->
                <el-tab-pane>
                    <span slot="label">时段特价</span>
                    <time-price></time-price>
                </el-tab-pane>
                <!-- 机构参数 -->
                <el-tab-pane>
                    <span slot="label">机构参数</span>
                    <framework-param></framework-param>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
    import dietMenu from './dietMenu.vue'
    import payWay from './payWay.vue'
    import classes from './classes.vue'
    import reservations from './reservations.vue'
    import serviceCharge from './serviceCharge.vue'
    import abnormalCause from './abnormalCause.vue'
    import tasteNode from './tasteNode.vue'
    import kitchenType from './kitchenType.vue'
    import printer from './printer.vue'
    import discountMethods from './discountMethods.vue'
    import timePrice from './timePrice.vue'
    import frameworkParam from './frameworkParam.vue'
    export default {
       data() {
           return {}
       },
       components:{
           dietMenu,payWay,classes,reservations,serviceCharge,abnormalCause,tasteNode,kitchenType,printer,discountMethods,timePrice,frameworkParam
       }
    }
</script>
<style scoped>
/* 标题 */
.business-header {
    background-color: #eeeeee;
}
</style>
