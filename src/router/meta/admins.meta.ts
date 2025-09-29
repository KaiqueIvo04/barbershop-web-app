import { UserType } from "src/domain/enums/user.type.enum";
import type { RouteMeta } from 'vue-router';

export default <RouteMeta>{
   icon: 'manage_accounts',
   label: 'Administradores',
   requiresAuth: true,
   userConfigs: {
      [UserType.ADMIN]: {},
   },
};