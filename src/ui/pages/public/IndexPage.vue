<template>
   <q-card
      class="q-pa-xl"
      style="border-radius: 15px"
   >
      <q-img
         style="border-radius: 50%; max-width: 376px"
         fit="contain"
         src="~assets/logos/logo.png"
         no-spinner
      >
         <template v-slot:loading>
            <div class="absolute-full flex flex-center">
               <q-skeleton
                  class="bg-grey-3"
                  type="QAvatar"
                  size="200px"
               />
            </div>
         </template>
      </q-img>

      <p class="text-center q-mt-md q-mb-sm text-h6">Bem-vindo a Cheff Barbearia</p>

      <q-btn
         @click="router.push({ name: 'AuthPage' })"
         class="q-mt-sm q-py-md w-p-100"
         color="primary"
      >
         ENTRAR COM EMAIL E SENHA
      </q-btn>

      <p class="text-center q-mt-md q-mb-sm text-h6">OU</p>

      <q-btn
         @click="router.push({ name: 'RegisterPage' })"
         class="q-mt-sm q-py-md w-p-100"
         color="primary"
      >
         FAÇA SEU CADASTRO DE CLIENTE
      </q-btn>
   </q-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
@media (max-width: 1024px) {
   .q-card {
      max-width: 90%;
   }
}
</style>
