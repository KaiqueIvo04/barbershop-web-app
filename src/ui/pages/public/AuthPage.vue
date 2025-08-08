<template>
  <q-page class="flex flex-center">
    <q-card class="login-card q-pa-lg">
      <div class="div-card row">
        <!-- Seção da Imagem -->
        <div class="col-12 col-md-6 image-section">
          <q-img src="~assets/logos/logo2.png" class="logo-image" no-spinner fit="contain" />
        </div>

        <!-- Seção do Formulário -->
        <div class="col-12 col-md-6 form-section">
          <q-form class="login-form">
            <q-input v-model="email" label="Email" outlined class="q-mb-md input-field" />
            <q-input v-model="password" label="Senha" type="password" outlined class="q-mb-md input-field" />
            <q-btn label="Entrar" color="primary" class="submit-btn" size="md" />
          </q-form>
        </div>
      </div>
    </q-card>
  </q-page>
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

.image-section {
  display: flex;
  align-items: center;
  justify-content: center;
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