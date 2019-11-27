import {RouteConfig} from "vue-router";
import Layout from "@/views/layout/Layout.vue";

export const indexRoute: RouteConfig = {
  name: 'index',
  path: '/index',
  component: Layout,
  redirect: '',
  children: [
    {
      path: '',
    }
  ]
};
