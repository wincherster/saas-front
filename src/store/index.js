import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex);

// 1. state
const state = {
    sessionId: '1234',//sessionID

    navTabs: [],//tabbar上的navTabs数据需要被共享管理
    activeTabValue: '0',//当前处于激活状态的tab值

    fullscreenMode: false,//全屏

    cacheData: {},

    shopListShowStatus: false,//门店显示状态
    healthDetectionPath: ''//健康检测路径
}
// 2. mutation // 必须是同步函数。
const mutations = {
    getSessionId(state, sessionId) {
        state.sessionId = sessionId
    },

    addNavTab(state, navTab) { // 添加一个navTab
        // 首先查看navTabs里面有没有这个数据，如果有先删除，再添加，如果没有直接添加
        let navTabIndex = state.navTabs.findIndex(item => {
            return item.code === navTab.code;
        });
        if (navTabIndex === -1) {//没有
            state.navTabs.push(navTab);
        } else {//已有
            state.navTabs.splice(navTabIndex, 1);
            state.navTabs.push(navTab);
        }

        // 设置activeTabValue
        state.activeTabValue = navTab.code;
    },
    removeTab(state, targetTabValue) {
        let navTabIndex = state.navTabs.findIndex(item => {
            return item.code === targetTabValue;
        });

        if (navTabIndex >= 0) {//存在再删除
            if (targetTabValue === state.activeTabValue) {//删除当前正处于激活状态的tab，此时需要重新激活另一个tab
                let newActiveTab = state.navTabs[navTabIndex + 1] || state.navTabs[navTabIndex - 1];
                state.navTabs.splice(navTabIndex, 1);

                if (newActiveTab) {
                    state.activeTabValue = newActiveTab.code;
                } else {
                    state.activeTabValue = '0';
                }
            } else {
                state.navTabs.splice(navTabIndex, 1);
            }
        }
    },
    changeActiveTab(state, newActiveTabValue) {
        state.activeTabValue = newActiveTabValue;
    },

    setFullscreenMode(state, value) {
        state.fullscreenMode = value;
    },
    removeAllTab(state) {
        state.activeTabValue = '0';
        state.navTabs = []
    },

    setCacheData(state, obj) {
        state.cacheData = obj;
    },
    clearCacheData(state) {
        state.cacheData = '';
    },

    setShopListShowStatus(state, value) {
        state.shopListShowStatus = value;
    },
    setHealthDetectionPath(state, value) {
        state.healthDetectionPath = value;
    }
}
// 3. action // 提交的是 mutation，而不是直接变更状态。可以包含任意异步操作。接收一个context
const actions = {
    addNavTab(context, navTab) {
        context.commit('addNavTab', navTab);
    },
    removeTab(context, targetTabValue) {
        context.commit('removeTab', targetTabValue);
    },
    changeActiveTab(context, newActiveTabValue) {
        context.commit('changeActiveTab', newActiveTabValue);
    },

    setFullscreenMode(context, value) {
        context.commit('setFullscreenMode', value);
    },
    removeAllTab(context) {
        context.commit('removeAllTab');
    },

    setShopListShowStatus(context, value) {
        context.commit('setShopListShowStatus', value);
    },
    setHealthDetectionPath(context, value) {
        context.commit('setHealthDetectionPath', value);
    }
}
// 4. getter // 获取数据 // 通常都是结合计算属性来使用
const getters = {
    sessionId: state => state.sessionId,

    getNavTabs(state) { // 获取数据
        return state.navTabs;
    },
    getActiveTabValue(state) {
        return state.activeTabValue;
    },

    getFullscreenMode(state) {
        return state.fullscreenMode;
    },

    getShopListShowStatus(state) {
        return state.shopListShowStatus;
    },
    getHealthDetectionPath(state) {
        return state.healthDetectionPath;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});