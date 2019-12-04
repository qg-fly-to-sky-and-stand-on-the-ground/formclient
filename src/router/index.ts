import Vue from 'vue'
import VueRouter from 'vue-router'
import { indexRoute } from "@/router/index/IndexRoute";
import { loginRoute } from "@/router/login/LoginRoute";
import { registRoute } from "@/router/regist/RegistRoute";
import { formRoute } from "@/router/form/formRoute";

Vue.use(VueRouter);

const routes = [

];

const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/index',
  }, {
    path: '/index',
    redirect: '/index/form',
  },
    indexRoute,
    loginRoute,
    registRoute,
    formRoute
  ]
});

export default router;
