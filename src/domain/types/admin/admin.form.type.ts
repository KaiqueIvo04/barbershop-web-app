import type Admin from '@src/domain/interfaces/admin/admin.interface';
import type GeneralEntity from '@src/domain/interfaces/general/general.credential.interface';
import type GeneralUserEntity from '@src/domain/interfaces/general/general.user.entity.interface';

// Create the type AdminForm removing properties of GeneralEntity and GeneralUserEntity
type AdminForm = Omit<Admin, keyof GeneralEntity | keyof GeneralUserEntity>;

export default AdminForm;