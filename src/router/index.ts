import Vue from 'vue'
import VueRouter from 'vue-router'
import {indexRoute} from "@/router/index/IndexRoute";
import {loginRoute} from "@/router/login/LoginRoute";
import {registRoute} from "@/router/regist/RegistRoute";

Vue.use(VueRouter);

const routes = [

];

const router = new VueRouter({
  routes: [
    indexRoute,
    loginRoute,
    registRoute
  ]
});

export default router;
