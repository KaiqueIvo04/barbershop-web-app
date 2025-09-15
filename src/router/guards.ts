import { useLoggedUserStore } from "src/stores/userLogged.store";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

function checkAuth(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) { 
    const loggedUserStore = useLoggedUserStore();

    if (to.meta.requiresAuth) {
        if (!loggedUserStore.token) {
            return next({ name: 'IndexPage'});
        }
    } else {
        if (loggedUserStore.token) {
            const name = loggedUserStore.availableRoutes.length
                ? loggedUserStore.availableRoutes[0]?.name
                : 'NotFoundPage'
            return next({ name });
        }
    }

    next()
}

function checkUserScope(
   to: RouteLocationNormalized,
   from: RouteLocationNormalized,
   next: NavigationGuardNext,
) {
   const loggedUserStore = useLoggedUserStore();

   if (loggedUserStore.token && loggedUserStore.user) {
      if (
         !(
            to.meta.userConfigs &&
            Object.keys(to.meta.userConfigs).includes(loggedUserStore.user.type)
         )
      ) {
         const name = loggedUserStore.availableRoutes.length
            ? loggedUserStore.availableRoutes[0]?.name
            : 'NotFoundPage';
         return next({ name });
      }
   } else {
      return next({ name: 'IndexPage' });
   }

   next();
}

export { checkAuth, checkUserScope };