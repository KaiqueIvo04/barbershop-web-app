<template>
  <router-view />
</template>

<script setup lang="ts">
import { useLoggedUserStore } from '@stores/userLogged.store';

// Obter dados do usuário e tema associado ao login para manter o 
// estado do usuário mesmo quando a paǵina recarregar
const loggedUserStore = useLoggedUserStore();
loggedUserStore.getCredential();
loggedUserStore.getTheme();

</script>
