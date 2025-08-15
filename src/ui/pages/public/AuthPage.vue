<template>
  <q-card class="login-card q-pa-lg">
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
      <div class="col-12 col-md-6 form-section">
        <!-- Input de e-mail  -->
        <q-form class="login-form">
          <q-input class="q-mb-md input-field" v-model="email" label="Email" filled placeholder="Digite seu email">
            <template v-slot:prepend>
              <q-icon name="mail_outline" size="18px" left />
            </template>
          </q-input>

          <!-- Input de senha  -->
          <q-input class="q-mb-md input-field" v-model="password" label="Senha" filled type="password"
            placeholder="Digite sua senha">
            <template v-slot:prepend>
              <q-icon name="lock_outline" size="18px" left />
            </template>
          </q-input>

          <!-- Botão de Entrar -->
          <q-btn label="Entrar" color="primary" class="submit-btn" size="md" />

          <router-link
            :to="{ name: 'IndexPage' }"
            class="text-center"
          >
            <p class=" text-caption q-mt-md">Voltar</p>
          </router-link>
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
  width: 100%;
  max-width: 800px;
  min-height: 400px;
  border-radius: 15px;
}

.div-card {
  width: 100%;
  min-height: 350px;
}

.logo-image {
  width: 100%;
  max-width: 350px;
  min-width: 150px;
  height: auto;
}

.form-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.login-form {
  width: 100%;
  max-width: 300px;
  min-width: 250px;
}

.input-field {
  min-height: 56px;
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
    min-width: 120px;
  }

  .form-section {
    padding: 16px;
  }

  .login-form {
    max-width: 350px;
    min-width: 280px;
  }

  .input-field {
    min-height: 60px;
    font-size: 16px;
  }

  .submit-btn {
    min-height: 48px;
    font-size: 16px;
  }
}

/* Para telas muito pequenas */
@media (max-width: 480px) {
  .login-card {
    width: 95%;
    margin: 8px;
    min-height: 500px;
  }

  .logo-image {
    max-width: 180px;
    min-width: 100px;
  }

  .login-form {
    min-width: 260px;
  }
}
</style>