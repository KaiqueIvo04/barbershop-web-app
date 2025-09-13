<template>
   <q-layout view="hHh lpR fff">
      <q-header
         class="bg-primary text-white"
         elevated
      >
         <q-toolbar class="row">
            <q-btn
               @click="
                  leftDrawerOpen ? (leftDrawerOpen = false) : (leftDrawerOpen = true)
               "
               icon="menu"
               dense
               flat
               round
            />

            <q-toolbar-title class="row justify-center">
               <router-link
                  :to="HomePage"
                  class="row items-center"
               >
                  <img
                     class="logo-centered shadow-2"
                     width="60px"
                     src="~assets/logos/logo.png"
                  />
               </router-link>
            </q-toolbar-title>
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

const leftDrawerOpen = ref(false);
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
