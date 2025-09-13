import type { UserType } from '@enums/user.type.enum';

export default interface GeneralUserEntity {
   type: UserType;
   last_login: string;
   active: boolean;
   scopes: []
}