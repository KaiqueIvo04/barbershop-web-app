import { defineStore } from 'pinia';
import type LoggedUserStore from 'src/domain/interfaces/logged-user/logged.user.store.interface';
import { USER_KEY, TOKEN_KEY, THEME_KEY } from 'src/utils/localStorage.util';
import { api } from 'src/boot/axios';
import routes from 'src/router/routes';
import Theme from 'src/domain/enums/theme.enum';
import { Dark } from 'quasar';

export const useLoggedUserStore = defineStore('loggedUser', {
   state: (): LoggedUserStore => {
      return {
         user: undefined,
         availableRoutes: [],
         theme: undefined,
         token: undefined,
      };
   },

   actions: {
      setCredential(user: LoggedUserStore['user'], token: string) {
         // 1. Sets user in `localStorage` and in store variable.
         localStorage.setItem(USER_KEY, JSON.stringify(user));
         this.user = user;

         // 2. Sets token in `localStorage` and in store variable.
         localStorage.setItem(TOKEN_KEY, token);
         this.setToken(token);

         // 3. Sets availables routes.
         this.setAvailableRoutes(user);
      },

      getCredential() {
         // 1. Gets user of `localStorage`.
         const localStorageUser = localStorage.getItem(USER_KEY);
         // 2. Gets token of `localStorage`.
         const localStorageToken = localStorage.getItem(TOKEN_KEY);

         // 3. Sets credentials and headers of axios api.
         if (localStorageUser && localStorageToken) {
            this.setCredential(JSON.parse(localStorageUser), localStorageToken);
         }
      },

      setTheme(theme: Theme) {
         localStorage.setItem(THEME_KEY, theme);
         Dark.set(theme === Theme.DARK);
      },

      getTheme() {
         // 1. Gets theme of `localStorage`.
         const localStorageTheme = localStorage.getItem(THEME_KEY);

         // 2. Sets theme.
         if (localStorageTheme) {
            this.setTheme(localStorageTheme as Theme);
         }
      },

      clearTheme() {
         localStorage.removeItem(THEME_KEY);
         this.theme = undefined;
      },

      setAvailableRoutes(user: LoggedUserStore['user']) {
         this.availableRoutes = routes.flatMap((parentRoute) => {
            if (
               user &&
               parentRoute.meta &&
               parentRoute.meta.requiresAuth &&
               parentRoute.children
            ) {
               return parentRoute.children
                  .filter(
                     (childRoute) =>
                        childRoute.meta &&
                        childRoute.meta.userConfigs &&
                        Object.keys(childRoute.meta.userConfigs).includes(user.type) &&
                        childRoute.name &&
                        childRoute.component,
                  )
                  .map((childRoute) => ({
                     name: String(childRoute.name),
                     icon: childRoute.meta?.icon as string | undefined,
                     label: childRoute.meta?.label as string | undefined,
                  }));
            }

            return [];
         });
      },

      clearCredential() {
         // 1. Clears user in `localStorage` and in store variable.
         localStorage.removeItem(USER_KEY);
         this.user = undefined;

         // 2. Clears token in `localStorage` and in store variable.
         localStorage.removeItem(TOKEN_KEY);
         this.setToken(undefined);

         // 3. Clears availables routes.
         this.availableRoutes = [];
      },

      setToken(token?: string) {
         if (token) {
            this.token = token;
            api.defaults.headers.common['Authorization'] = `bearer ${token}`;
         } else {
            this.token = undefined;
            delete api.defaults.headers.common['Authorization'];
         }
      },
   },
});
