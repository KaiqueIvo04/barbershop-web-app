import type { RouteRecordRaw } from 'vue-router';
import LayoutPublicRoutes from '@layouts/PublicRoutes.vue';
import LayoutPrivateRoutes from '@layouts/PrivateRoutes.vue';
import IndexPage from '@pages/public/IndexPage.vue';
import AuthPage from '@pages/public/AuthPage.vue';
import RegisterPage from '@pages/public/RegisterPage.vue';
import ErrorNotFound from '@pages/public/ErrorNotFound.vue';
import HomePage from '@pages/private/HomePage.vue';
import homeMeta from './meta/home.meta';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayoutPrivateRoutes,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'HomePage',
        component: HomePage,
        meta: homeMeta
      }
    ]
  },
  {
    path: '/teste',
    component: LayoutPublicRoutes,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: '',
        redirect: '/inicio'
      },
      {
        path: '/inicio',
        name: 'IndexPage',
        component: IndexPage,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: '/autenticacao',
        name: 'AuthPage',
        component: AuthPage,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage,
        meta: {
          requiresAuth: false
        }
      }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFoundPage',
    component: ErrorNotFound
  },
];

export default routes;
