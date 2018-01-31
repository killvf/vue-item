import Login from "../views/del.vue";
import NotFound from "../views/404.vue";

let routes = [
    {
        path: '/index',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: {path: '/404'}
    }
];

export default routes;
