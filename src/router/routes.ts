import type { RouteRecordRaw } from 'vue-router';
import LayoutPublicRoutes from '@layouts/PublicRoutes.vue';
import IndexPage from '@pages/public/IndexPage.vue';
import AuthPage from '@pages/public/AuthPage.vue';
import RegisterPage from '@pages/public/RegisterPage.vue';
import ErrorNotFound from '@pages/public/ErrorNotFound.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayoutPublicRoutes,
    children: [
      {
        path: '',
        redirect: '/inicio'
      },
      {
        path: '/inicio',
        name: 'IndexPage',
        component: IndexPage
      },
      {
        path: '/autenticacao',
        name: 'AuthPage',
        component: AuthPage
      },
      {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
      }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound
  },
];

export default routes;
