import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import Vuex from "vuex";
import store from "./vuex";
import routes from "./router/routes";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    mode: 'history',
    routes
});
router.beforeEach((to, from, next) => {
    /*判断进入的地址是不是登录 如果是,将session中的user删除*/
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    /*获取session中user的数据 没有字段返回null*/
    let user = JSON.parse(sessionStorage.getItem('user'));
    /*判断 user 为否,和当前地址不等于"/login"时 页面强制跳转至"/login"
    * 反之,则进入*/
    next();return;
    if (!user && to.path != '/login') {
        next({path: '/index'})
    } else {
        next()
    }
});


Vue.config.devtools = true;
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
