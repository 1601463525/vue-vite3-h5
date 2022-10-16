import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { createRouterGuards } from './routerGuards';
import { shopRoutes } from './shop/index';
import { marketRoutes } from './market/index';

export const routes: Array<RouteRecordRaw> = [...shopRoutes, ...marketRoutes];

const router = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(''),
  routes,
});

export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}
export default router;
