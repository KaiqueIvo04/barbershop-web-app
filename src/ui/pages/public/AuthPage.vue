<template>
  <q-card class="login-card q-pa-lg w-p-100"> <!-- w-p-100 é personalizado -->
    <div class="div-card row">
      <!-- Seção da Imagem -->
      <div class="col-12 col-md-6 flex flex-center">
        <q-img 
          src="~assets/logos/logo.png" 
          class="logo-image" no-spinner 
          fit="contain" 
          style="border-radius: 50%"
        />
      </div>

      <!-- Seção do Formulário -->
      <div class="col-12 col-md-6 row justify-center"> <!-- Alinha apenas na horizontal-->
        <q-form class="q-my-lg">
          <div class="h-p-100 column justify-center"> <!-- h-p-100 é personalizado -->
            <div>
              <!-- Input de e-mail  -->
              <q-input class="" v-model="email" label="Email" filled placeholder="Digite seu email">
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
              <q-btn label="Entrar" color="primary" class="submit-btn" size="md" />
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
import { ref } from 'vue'

const email = ref('')
const password = ref('')
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

  .form-section {
    padding: 16px;
  }

  .submit-btn {
    min-height: 48px;
  }
}
</style>