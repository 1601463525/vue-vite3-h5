import { RouteRecordRaw } from 'vue-router';
import { main } from './../modules/main';

export const shopRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '首页',
    },
    children: [
      ...main,
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        meta: {
          title: 'NotFound',
        },
        redirect: '/',
      },
    ],
  },
];
