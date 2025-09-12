<template>
   <q-layout view="hHh lpR fff">
      <q-header
         class="bg-primary text-white"
         elevated
      >
         <q-toolbar>
            <q-btn
               @click="leftDrawerOpen ? 
               leftDrawerOpen = false : 
               leftDrawerOpen = true"
               icon="menu"
               dense
               flat
               round
            />

            <q-toolbar-title>
               <q-avatar>
                  <img src="~assets/logos/logo.png" />
               </q-avatar>
               Cheff Barbearia
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

const leftDrawerOpen = ref(false);

</script>
