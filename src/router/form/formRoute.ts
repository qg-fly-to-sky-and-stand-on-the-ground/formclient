import {RouteConfig} from "vue-router";

export const formRoute: RouteConfig = {
  name: '表格',
  path: '/index/form',
  component: () => import('@/views/form/form.vue'),
};