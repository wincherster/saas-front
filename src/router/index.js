import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

// todo --> 需要更改为路由懒加载方式
// const Foo = () => import('./Foo.vue')
/* 首页 */
import Index from '../components/home/index.vue';

// basic // 基本设置
const dictionaryDefend = () => import('../components/basic/dictionaryDefend/dictionaryDefend.vue');            /*运营字典维护*/
const addDictionaryDefend = () => import('../components/basic/dictionaryDefend/children/addDictionaryDefend.vue');
const assignableCause = () => import('../components/basic/assignableCause/assignableCause.vue');              /*异常原因设置*/
const addAssignableCause = () => import('../components/basic/assignableCause/children/addAssignableCause.vue');
const allotStore = () => import('../components/basic/assignableCause/children/allotStore.vue');
const tasteNote = () => import('../components/basic/tasteNote/tasteNote.vue');                          /*口味备注设置*/
const addTasteNote = () => import('../components/basic/tasteNote/children/addTasteNote.vue');
const allot2Store = () => import('../components/basic/tasteNote/children/allot2Store.vue');
const budgetType = () => import('../components/basic/budgetType/budgetType.vue');                        /*收支类型设置*/
const addBudgetType = () => import('../components/basic/budgetType/children/addBudgetType.vue');
const paymentMode = () => import('../components/basic/paymentMode/paymentMode.vue');                      /*付款方式设置*/
const addPaymentMode = () => import('../components/basic/paymentMode/children/addPaymentMode.vue');
const classes = () => import('../components/basic/classes/classes.vue');                              /*班次设置*/
const serviceCharge = () => import('../components/basic/serviceCharge/serviceCharge.vue');                  /*服务费管理*/
const operationParams = () => import('../components/basic/operationParams/operationParams.vue');              /*营运参数设置*/

// thirdParty // 第三方设置
//

// openShops // 我要开店
const shopData = () => import('../components/openShops/shopData/shopData.vue');               /*开店资料分配*/
const reservations = () => import('../components/openShops/reservations/reservations.vue');       /*桌位管理*/
const addTableManagement = () => import('../components/openShops/reservations/children/addTableManagement.vue');
const newKitchenPlay = () => import('../components/openShops/newKitchenPlay/newKitchenPlay.vue');   /*新厨打设置*/

//老厨打设置
const printerManagement = () => import('../components/openShops/oldKitchenPlay/printerManagement.vue');/*打印机管理*/
const printerSetup = () => import('../components/openShops/oldKitchenPlay/printerSetup.vue');     /*打印机设置*/
const printFormat = () => import('../components/openShops/oldKitchenPlay/printFormat.vue');      /*打印格式设置*/

const discountPower = () => import('../components/openShops/discountPower/discountPower.vue');     /*折扣权限设置*/
const PADdisplay = () => import('../components/openShops/PADdisplay/PADdisplay.vue');           /*PAD菜品格式显示*/
const POSparams = () => import('../components/openShops/POSparams/POSparams.vue');             /*POS常用参数设置*/
const payModeDisplay = () => import('../components/openShops/payModeDisplay/payModeDisplay.vue');   /*付款方式显示设置*/

// menu // 菜品管理
const price = () => import('../components/menu/price/price.vue');              /*价格管理*/
const menuType = () => import('../components/menu/menuType/menuType.vue');        /*菜品类别管理*/
const menuRecord = () => import('../components/menu/menuRecord/menuRecord.vue');    /*菜品档案管理*/
const menuGroup = () => import('../components/menu/menuGroup/menuGroup.vue');      /*菜品分组管理*/
const diet = () => import('../components/menu/diet/diet.vue');                /*餐谱管理*/
const priceChange = () => import('../components/menu/priceChange/priceChange.vue');  /*变价管理*/
const typeClassify = () => import('../components/menu/typeClassify/typeClassify.vue');/*菜品类别分类管理*/

// discounts // 优惠管理
const discountPlan = () => import('../components/discounts/discountPlan/discountPlan.vue');/*折扣方案*/
const timePriceWay = () => import('../components/discounts/timePriceWay/timePriceWay.vue');/*时段特价方案*/

// equipment // 设备管理
const terminalEquipment = () => import('../components/equipment/terminalEquipment/terminalEquipment.vue');/*终端设备管理*/

// takeOut // 外卖管理
//

// credit // 挂账管理
//

export default new VueRouter({
    routes: [

        // 首页
        { path: '/', redirect: { name: 'index' } },
        { name: 'index', path: '/index', component: Index },

        // 基础设置路由配置
        { name: 'dictionaryDefend', path: '/dictionaryDefend', component: dictionaryDefend },
        { name: 'addDictionaryDefend', path: '/addDictionaryDefend', component: addDictionaryDefend },
        { name: 'assignableCause', path: '/assignableCause', component: assignableCause },
        { name: 'addAssignableCause', path: '/addAssignableCause', component: addAssignableCause },
        { name: 'allotStore', path: '/allotStore', component: allotStore },
        { name: 'tasteNote', path: '/tasteNote', component: tasteNote },
        { name: 'addTasteNote', path: '/addTasteNote', component: addTasteNote },
        { name: 'allot2Store', path: '/allot2Store', component: allot2Store },
        { name: 'budgetType', path: '/budgetType', component: budgetType },
        { name: 'addBudgetType', path: '/addBudgetType', component: addBudgetType },
        { name: 'paymentMode', path: '/paymentMode', component: paymentMode },
        { name: 'addPaymentMode', path: '/addPaymentMode', component: addPaymentMode },
        { name: 'classes', path: '/classes', component: classes },
        { name: 'serviceCharge', path: '/serviceCharge', component: serviceCharge },
        { name: 'operationParams', path: '/operationParams', component: operationParams },

        // 第三方设置路由配置

        // 我要开店路由配置
        { name: 'shopData', path: '/shopData', component: shopData },
        { name: 'reservations', path: '/reservations', component: reservations },
        { name: 'addTableManagement', path: '/addTableManagement', component: addTableManagement },
        { name: 'newKitchenPlay', path: '/newKitchenPlay', component: newKitchenPlay },
        // 三级目录-老厨打设置
        { name: 'printerManagement', path: '/printerManagement', component: printerManagement },
        { name: 'printerSetup', path: '/printerSetup', component: printerSetup },
        { name: 'printFormat', path: '/printFormat', component: printFormat },
        { name: 'discountPower', path: '/discountPower', component: discountPower },
        { name: 'PADdisplay', path: '/PADdisplay', component: PADdisplay },
        { name: 'POSparams', path: '/POSparams', component: POSparams },
        { name: 'payModeDisplay', path: '/payModeDisplay', component: payModeDisplay },

        // 菜品管理路由配置
        { name: 'price', path: '/price', component: price },
        { name: 'menuType', path: '/menuType', component: menuType },
        { name: 'menuRecord', path: '/menuRecord', component: menuRecord },
        { name: 'menuGroup', path: '/menuGroup', component: menuGroup },
        { name: 'diet', path: '/diet', component: diet },
        { name: 'priceChange', path: '/priceChange', component: priceChange },
        { name: 'typeClassify', path: '/typeClassify', component: typeClassify },

        // 优惠管理路由配置
        { name: 'discountPlan', path: '/discountPlan', component: discountPlan },
        { name: 'timePriceWay', path: '/timePriceWay', component: timePriceWay },

        // 设备管理路由配置
        { name: 'terminalEquipment', path: '/terminalEquipment', component: terminalEquipment },

        // 外卖管理路由配置

        // 挂账管理路由配置

        // 404页面找不到 // 放到最后，这里如果页面找不到，直接重定向到首页，没有单独的做404，但是可以做
        { path: '*', redirect: { name: 'index' } },
    ]
});