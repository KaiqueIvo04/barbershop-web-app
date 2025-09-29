import type { RouteRecordRaw } from 'vue-router';
import LayoutPublicRoutes from '@layouts/PublicRoutes.vue';
import LayoutPrivateRoutes from '@layouts/PrivateRoutes.vue';
import IndexPage from '@pages/public/IndexPage.vue';
import AuthPage from '@pages/public/AuthPage.vue';
import RegisterPage from '@pages/public/RegisterPage.vue';
import ErrorNotFound from '@pages/public/ErrorNotFound.vue';
import SchedulesPage from '@pages/private/SchedulesPage.vue';
import schedulesMeta from './meta/schedules.meta';
import { checkAuth, checkUserScope } from './guards';
import AdminsPage from 'src/ui/pages/private/AdminsPage.vue';
import adminsMeta from './meta/admins.meta';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayoutPrivateRoutes,
    beforeEnter: checkAuth,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        redirect: '/schedules'
      },
      {
        path: '/schedules',
        name: 'SchedulesPage',
        component: SchedulesPage,
        beforeEnter: checkUserScope,
        meta: schedulesMeta
      },
      {
        path: '/admins',
        name: 'AdminsPage',
        component: AdminsPage,
        beforeEnter: checkUserScope,
        meta: adminsMeta
      }
    ]
  },
  {
    path: '/',
    component: LayoutPublicRoutes,
    beforeEnter: checkAuth,
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
