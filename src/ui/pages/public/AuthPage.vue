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
                     <!-- Input de e-mail  -->
                     <q-input
                        v-model="email"
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
                        @click="authenticate"
                        class="w-p-100 min-h-px-2"
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
import { useQuasar } from 'quasar';
import { auth } from '@src/services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { UserType } from '@src/domain/enums/user.type.enum';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type Admin from '@src/domain/interfaces/admin/admin.interface';
import type Employee from '@src/domain/interfaces/employee/employee.interface';
import type Client from '@src/domain/interfaces/client/client.interface';
import { getById as getByIdAdmin } from '@src/services/admin.service';
import { getById as getByIdClient } from '@src/services/client.service';
import { getById as getByIdEmployee } from '@src/services/employee.service';
import { useLoggedStore } from '@src/stores/userLogged.store';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const email = ref('');
const password = ref('');
const showPassword = ref(false);

const loggedUserStore = useLoggedStore()
const router = useRouter()

type AllUsers = Admin | Employee | Client;
let user: AllUsers | undefined = undefined;

async function authenticate() {
   try {
      // Send login requisiton
      const responseToken: string = (
         await auth({ email: email.value, password: password.value })
      ).data.access_token;

      // Decode token typing returned object
      const tokenDecoded = jwtDecode<{
         exp: number;
         iat: number;
         iss: string;
         scope: [];
         sub: string;
         sub_type: UserType;
      }>(responseToken);

      // Get infor of user logged
      // Pass the token manually in headers, because the token of local storage was not setted yet.
      const userResponse = await getUserById(tokenDecoded.sub, tokenDecoded.sub_type, {
         headers: {
            Authorization: `bearer ${responseToken}`,
         },
      });

      // Set user data and redirect to your first route
      if (userResponse && userResponse.data) {
         user = userResponse.data
         loggedUserStore.setCredential(user, responseToken)
         const routeName = loggedUserStore.availableRoutes.length
            ? loggedUserStore.availableRoutes[0]?.name
            : 'NotFoundPage';
         await router.push({ name: routeName });
      }
   } catch (error) {
      password.value = '';
      alert(error);
   }
}

function getUserById(
   id: string,
   type: UserType,
   axiosOptions?: AxiosRequestConfig,
): Promise<AxiosResponse<AllUsers, unknown>> | undefined {
   if (type === UserType.ADMIN) return getByIdAdmin(id, axiosOptions)
   else if (type === UserType.EMPLOYEE) return getByIdEmployee(id, axiosOptions)
   else return getByIdClient(id, axiosOptions)
}
</script>

<style scoped></style>
