import 'babel-polyfill';

// 引入重置样式、字体图标、动画
import "./assets/css/reset.css";
import 'element-ui/lib/theme-chalk/index.css';

import "./assets/icon/iconfont.css";
import "./assets/fonts/saas-icon.css";
import './assets/css/saasui.css';

import './assets/css/animate.css';

import './assets/less/saas-nav.less';
import './assets/less/saas-tabbar.less';
import './assets/less/saas-brand.less';

import Vue from 'vue';
import App from './components/App.vue';
import router from './router/index.js';
import store from './store/index.js';

// elementui// 后期可改为按需加载
import ElementUI from 'element-ui';
Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    store,
    render: c => c(App)
})