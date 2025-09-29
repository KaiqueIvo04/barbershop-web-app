<template>
   <q-layout view="hHh lpR fff">
      <q-header
         class="bg-primary text-white"
         elevated
      >
         <q-toolbar class="row justify-between">
            <q-btn
               @click="
                  leftDrawerOpen ? (leftDrawerOpen = false) : (leftDrawerOpen = true)
               "
               icon="menu"
               dense
               flat
               round
            />

            <router-link :to="SchedulesPage">
               <img
                  class="logo-centered shadow-2"
                  width="60px"
                  src="~assets/logos/logo.png"
               />
            </router-link>

            <div class="row justify-center gutter-1">
               <q-btn
                  @click="toggleTheme"
                  flat
               >
                  <q-icon
                     class="cursor-pointer"
                     name="compare"
                     size="24px"
                  />
               </q-btn>
               <q-btn
                  @click="logout"
                  flat
               >
                  <q-icon
                     class="cursor-pointer"
                     name="logout"
                     size="24px"
                  />
               </q-btn>
            </div>
         </q-toolbar>
      </q-header>

      <q-drawer
         v-model="leftDrawerOpen"
         show-if-above
         side="left"
         bordered
      >
         <q-list>
            <q-item
               v-for="availableRoute in loggedUserStore.availableRoutes"
               :key="availableRoute.name"
               :to="{ name: availableRoute.name }"
               :focused="route.name === availableRoute.name"
               clickable
            >
               <div
                  :class="
                     route.name === availableRoute.name ? 'text-primary ' : undefined
                  "
                  class="row items-center"
               >
                  <q-icon
                     :name="availableRoute.icon"
                     class="mx-4"
                     size="1.4rem"
                  ></q-icon>
                  <p
                     :class="
                        route.name === availableRoute.name
                           ? 'text-weight-bold my-0'
                           : 'my-0'
                     "
                  >
                     {{ availableRoute.label }}
                  </p>
               </div>
            </q-item>
         </q-list>
      </q-drawer>

      <q-page-container>
         <router-view />
      </q-page-container>

      <q-footer
         class="bg-grey-8 text-white"
         elevated
      >
         <q-toolbar>
            <q-toolbar-title>
               <q-avatar>
                  <img src="~assets/logos/logo.png" />
               </q-avatar>
               <div>Cheff Barbearia</div>
            </q-toolbar-title>
         </q-toolbar>
      </q-footer>
   </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLoggedUserStore } from '@src/stores/userLogged.store';
import { useRouter, useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
import Theme from 'src/domain/enums/theme.enum';
import SchedulesPage from '../pages/private/SchedulesPage.vue';

const $q = useQuasar();

const loggedUserStore = useLoggedUserStore();
const router = useRouter();
const route = useRoute();
const leftDrawerOpen = ref(false);

function toggleTheme() {
   loggedUserStore.setTheme($q.dark.isActive ? Theme.LIGHT : Theme.DARK);
}

const loggingOut = ref(false);
async function logout() {
   if (loggedUserStore.token) {
      loggingOut.value = true;

      try {
         loggedUserStore.clearCredential();

         await router.push({ name: 'IndexPage' });
      } catch (error) {
         alert(error);
      } finally {
         loggingOut.value = false;
      }
   }
}
</script>

<style lang="scss" scoped>
.logo-centered {
   position: absolute;
   z-index: 1;
   top: 60%;
   left: 50%;
   transform: translate(-50%, -50%);

   image-rendering: -moz-crisp-edges;
   border-radius: 50px;
}
</style>
