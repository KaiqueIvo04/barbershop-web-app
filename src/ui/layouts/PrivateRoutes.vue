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

            <router-link :to="HomePage">
               <img
                  class="logo-centered shadow-2"
                  width="60px"
                  src="~assets/logos/logo.png"
               />
            </router-link>

            <div class="row justify-center gutter-1">
               <q-btn flat @click="toggleTheme">
                  <q-icon
                     name="compare"
                     size="24px"
                     class="cursor-pointer"
                  />
               </q-btn>
               <q-btn flat @click="logout">
                  <q-icon
                     name="logout"
                     size="24px"
                     class="cursor-pointer"
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
         <!-- drawer content -->
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
import HomePage from '../pages/private/HomePage.vue';
import { useLoggedUserStore } from '@src/stores/userLogged.store';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import Theme from 'src/domain/enums/theme.enum';

const $q = useQuasar()

const loggedUserStore = useLoggedUserStore();
const router = useRouter();
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
   top: 60%;
   left: 50%;
   transform: translate(-50%, -50%);

   image-rendering: -moz-crisp-edges;
   border-radius: 50px;
}
</style>
