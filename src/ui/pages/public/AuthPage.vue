<template>
   <q-card class="login-card q-pa-lg w-p-100">
      <!-- w-p-100 é personalizado -->
      <div class="div-card row">
         <!-- Seção da Imagem -->
         <div class="col-12 col-md-6 flex flex-center">
            <div class="q-ma-lg w-p-100 row justify-center">
              <q-img
                 class="logo-image"
                 style="border-radius: 50%"
                 fit="contain"
                 src="~assets/logos/logo.png"
                 no-spinner
                 alt="Logo da barbearia"
              />
            </div>
         </div>

         <!-- Seção do Formulário -->
         <div class="col-12 col-md-6 row justify-center">
            <!-- Alinha apenas na horizontal-->
            <q-form class="q-ma-lg w-p-100">
               <div class="h-p-100 column justify-center">
                  <!-- h-p-100 é personalizado -->
                  <div>
                     <!-- Input de e-mail  -->
                     <q-input
                        v-model="email"
                        label="Email"
                        placeholder="Digite seu email"
                        filled
                        autocomplete="email"
                     >
                        <template v-slot:prepend>
                           <!-- Ícone de E-mail -->
                           <q-icon
                              name="mail_outline"
                              size="18px"                           
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
                           />
                        </template>
                        <template v-slot:append>
                           <!-- Ícone de Visibilidade -->
                           <q-icon
                              :name="showPassword ? 'visibility_off' : 'visibility'"
                              @click="showPassword = !showPassword"
                              class="cursor-pointer"
                           />
                        </template>
                     </q-input>
                  </div>
                  <!-- Botões -->
                  <div class="q-mt-lg">
                     <q-btn
                        class="submit-btn"
                        color="primary"
                        label="Entrar"
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

// Refs
const email = ref('');
const password = ref('');
const showPassword = ref(false);
// const isLoading = ref(false);
</script>

<style scoped>
.login-card {
   max-width: 800px;
   min-height: 400px;
   border-radius: 15px;
}

.submit-btn {
   width: 100%;
   min-height: 44px;
}

/* Responsividade para mobile */
@media (max-width: 1023px) {
   .div-card {
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }

   .login-card {
      width: 90%;
      max-width: 500px;
      margin: 16px;
   }

   .logo-image {
      max-width: 300px;
   }

   .submit-btn {
      min-height: 48px;
   }
}
</style>
