import { UserType } from "src/domain/enums/user.type.enum";
import type { RouteMeta } from 'vue-router';

export default <RouteMeta>{
   icon: 'schedule',
   label: 'Agendamentos',
   requiresAuth: true,
   userConfigs: {
      [UserType.ADMIN]: {},
      [UserType.EMPLOYEE]: {},
   },
};