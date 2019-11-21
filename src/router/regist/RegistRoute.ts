import {RouteConfig} from "vue-router";

export const registRoute: RouteConfig = {
  name: '注册',
  path: '/regist',
  component: () => import('@/views/login/regist/Regist.vue'),
};
