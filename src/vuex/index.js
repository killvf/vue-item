import Vue from "vue";
import Vuex from "vuex";

import actionse from './actions';


Vue.use(Vuex);

/*
* Vuex 使用 单一状态树 —— 是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个『唯一数据源(SSOT)』而存在。
* 这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段
* 在调试的过程中也能轻易地取得整个当前应用状态的快照。
* */
const state={
    count:1,
    typeList: []
};

/*
* 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
* Vuex 中的 mutations 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
* 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
* */
const mutations={
    file(state){
        state.count++;
    },
    fileC(state){
        if(state.count<=0){return}
        state.count--;
    },
    /*app首页状态*/
    typeListFile(state,list){
        state.typeList = list;
    },
};

/*
* 有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数：
* */
const getters={
    count:function (state) {
        //return state.count+=10;
    }
};

/*
* Action 类似于 mutation，不同在于：
*   1: Action 提交的是 mutation，而不是直接变更状态。
*   2: Action 可以包含任意异步操作。
* */
const actions={
    addAction(conText){
        conText.commit('file');
    },
    reduceAction({commit}){
        commit('fileC');
    }
};

/*
* 将定义的状态方法导出
* */
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
