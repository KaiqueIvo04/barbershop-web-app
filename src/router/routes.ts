import type { RouteRecordRaw } from 'vue-router';
import LayoutPublicRoutes from '@layouts/PublicRoutes.vue';
import LayoutPrivateRoutes from '@layouts/PrivateRoutes.vue';
import IndexPage from '@pages/public/IndexPage.vue';
import AuthPage from '@pages/public/AuthPage.vue';
import RegisterPage from '@pages/public/RegisterPage.vue';
import ErrorNotFound from '@pages/public/ErrorNotFound.vue';
import HomePage from '@pages/private/HomePage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayoutPrivateRoutes,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'HomePage',
        component: HomePage
      }
    ]
  },
  {
    path: '/teste',
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
