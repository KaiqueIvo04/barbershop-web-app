import type { RouteRecordRaw } from 'vue-router';
import PublicRoutes from 'layouts/PublicRoutes.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PublicRoutes,
    children: [
      {
        path: '',
        redirect: '/autenticacao'
      },
      {
        path: '/autenticacao',
        component: () => import('pages/AuthPage.vue')
      }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
