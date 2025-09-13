import type GeneralEntity from '../general/general.entity.interface';
import type GeneralUserEntity from '../general/general.user.entity.interface';
import type GeneralCredential from '../general/general.credential.interface';
import type GeneralPersonalData from '../general/general.personal.data.interface';
import type Theme from 'src/domain/enums/theme.enum';

export default interface LoggedUserStore {
   user?: (GeneralEntity & GeneralUserEntity & GeneralCredential & GeneralPersonalData) | undefined;
   token?: string | undefined;
   availableRoutes: { name: string; icon?: string | undefined; label?: string | undefined}[];
   theme?: Theme | undefined;
}