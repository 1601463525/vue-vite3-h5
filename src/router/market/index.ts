import { RouteRecordRaw } from 'vue-router';

export const marketRoutes: Array<RouteRecordRaw> = [
  {
    path: '/marketList',
    name: 'marketList',
    component: () => import('@/views/market/marketList.vue'),
    meta: {
      title: '走访',
      icon: 'apps-o',
    },
  },
];
