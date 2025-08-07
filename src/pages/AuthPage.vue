<template>
  <q-page class="row">
    <q-card class="q-pa-lg col-3">
      <q-form class="">
        <q-img
          height="200px"
          src="~assets/images/logo.png"
          no-spinner
        />
        <q-input model-value="" label="Email" />
        <q-input model-value="" label="Password" />
        <q-btn>Entrar</q-btn>
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
</script>
<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
