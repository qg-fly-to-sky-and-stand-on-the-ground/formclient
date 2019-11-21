import {RouteConfig} from "vue-router";
import Layout from "@/views/layout/Layout.vue";

export const loginRoute: RouteConfig = {
  name: 'login',
  path: '/login',
  redirect: '',
  component: Layout,
  children: [
    {
      name: '入口',
      path: 'entry',
      meta: {
        title: '入口'
      },
      component: () => import('@/views/login/Entry.vue')
    }
  ]
};
