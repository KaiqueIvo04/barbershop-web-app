<template>
  <q-card 
    class="q-pa-lg"
    :class="$q.screen.lt.md ? 'w-p-90 ma-4' : 'w-p-100 max-w-px-40 min-h-px-20'"
  >
    <div 
      class="row"
     :class="$q.screen.lt.md ? 'items-center justify-center' : 'justify-between'"
    >
      <!-- Seção da Imagem -->
      <div 
        class="col-10 col-md-6 flex flex-center"
        :class="$q.screen.lt.md ? 'mb-6' : undefined"
      >
        <q-img 
          src="~assets/logos/logo.png" 
          class="logo-image"
          no-spinner 
          fit="contain" 
          style="border-radius: 50%; max-width: 376px;"
        />
      </div>

      <!-- Seção do Formulário -->
      <div class="col-10 col-md-5 row justify-center bg-blue-grey-1 rounded-borders">
        <q-form class="h-p-100">
          <div class="h-p-100 column justify-center q-my-lg">
            <div>
              <!-- Input de e-mail  -->
              <q-input v-model="email" label="Email" filled placeholder="Digite seu email">
                <template v-slot:prepend>
                  <q-icon name="mail_outline" size="18px" left />
                </template>
              </q-input>

              <!-- Input de senha  -->
              <q-input class="q-mt-md" v-model="password" label="Senha" filled type="password"
                placeholder="Digite sua senha">
                <template v-slot:prepend>
                  <q-icon name="lock_outline" size="18px" left />
                </template>
              </q-input>
            </div>
            <!-- Botões -->
            <div class="q-mt-lg">
              <q-btn 
                label="Cadastrar" 
                color="primary" 
                class="w-p-100 min-h-px-2"
                size="md" 
              />
              <router-link :to="{ name: 'IndexPage' }" class="text-center">
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
import { ref } from 'vue'
import { useQuasar } from 'quasar';

const $q = useQuasar()

const email = ref('')
const password = ref('')
</script>

<style scoped>
</style>