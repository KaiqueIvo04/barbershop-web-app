import type { RouteRecordRaw } from 'vue-router';
import PublicRoutes from '@layouts/PublicRoutes.vue';
import AuthPage from '@pages/public/AuthPage.vue';
import ErrorNotFound from '@pages/public/ErrorNotFound.vue';

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
        component: AuthPage
      }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound
  },
];

export default routes;
