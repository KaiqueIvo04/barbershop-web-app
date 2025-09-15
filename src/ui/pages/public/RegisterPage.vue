<template>
   <q-card
      :class="$q.screen.lt.md ? 'w-p-90 ma-4' : 'w-p-100 max-w-px-40 min-h-px-20'"
      class="q-pa-lg"
   >
      <div
         :class="$q.screen.lt.md ? 'items-center justify-center' : 'justify-between'"
         class="row"
      >
         <!-- Seção da Imagem -->
         <div
            :class="$q.screen.lt.md ? 'mb-6' : undefined"
            class="col-10 col-md-6 flex flex-center"
         >
            <q-img
               :ratio="1"
               class="logo-image"
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
         </div>

         <!-- Seção do Formulário -->
         <div class="col-10 col-md-5 row justify-center bg-blue-grey-1 rounded-borders">
            <q-form class="h-p-100 ma-4">
               <div class="h-p-100 column justify-center">
                  <div>
                     <!-- Input de nome -->
                     <q-input
                        v-model="name"
                        label="Nome"
                        placeholder="Digite seu nome"
                        filled
                     >
                        <template v-slot:prepend>
                           <q-icon
                              name="person_outline"
                              size="18px"
                              left
                           />
                        </template>
                     </q-input>

                     <!-- Input de e-mail -->
                     <q-input
                        v-model="email"
                        class="q-mt-md"
                        label="Email"
                        placeholder="Digite seu email"
                        filled
                     >
                        <template v-slot:prepend>
                           <q-icon
                              name="mail_outline"
                              size="18px"
                              left
                           />
                        </template>
                     </q-input>

                     <!-- Input de senha  -->
                     <q-input
                        v-model="password"
                        :type="showPassword ? 'text' : 'password'"
                        class="q-mt-md"
                        label="Senha"
                        placeholder="Digite sua senha"
                        filled
                        autocomplete="current-password"
                     >
                        <template v-slot:prepend>
                           <q-icon
                              name="lock_outline"
                              size="18px"
                              left
                           />
                        </template>
                        <template v-slot:append>
                           <!-- Ícone de Visibilidade -->
                           <q-icon
                              :name="showPassword ? 'visibility_off' : 'visibility'"
                              @click="showPassword = !showPassword"
                              class="cursor-pointer"
                              size="18px"
                           />
                        </template>
                     </q-input>
                     <q-input
                        v-model="confirmPassword"
                        :type="showPassword ? 'text' : 'password'"
                        class="q-mt-md"
                        label="Confirmar senha"
                        placeholder="Confirme sua senha"
                        filled
                     >
                        <template v-slot:prepend>
                           <q-icon
                              name="check"
                              size="18px"
                              left
                           />
                        </template>
                        <template v-slot:append>
                           <q-icon
                              :name="showPassword ? 'visibility_off' : 'visibility'"
                              @click="showPassword = !showPassword"
                              class="cursor-pointer"
                              size="18px"
                           />
                        </template>
                     </q-input>
                  </div>
                  <!-- Botões -->
                  <div class="q-mt-lg">
                     <q-btn
                        class="w-p-100 min-h-px-2"
                        color="primary"
                        label="Cadastrar"
                        size="md"
                     />
                     <router-link
                        :to="{ name: 'IndexPage' }"
                        class="text-center"
                     >
                        <p class="q-mt-md">Voltar</p>
                     </router-link>
                  </div>
               </div>
            </q-form>
         </div>
      </div>
   </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);
</script>

<style scoped></style>
