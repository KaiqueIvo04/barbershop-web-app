import type Client from 'src/domain/interfaces/client/client.interface';
import type GeneralEntity from '@src/domain/interfaces/general/general.credential.interface';
import type GeneralUserEntity from '@src/domain/interfaces/general/general.user.entity.interface';

// Create the type ClientForm removing properties of GeneralEntity and GeneralUserEntity
type ClientForm = Omit<Client, keyof GeneralEntity | keyof GeneralUserEntity>;

export default ClientForm;