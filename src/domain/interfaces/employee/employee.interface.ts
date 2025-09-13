import type GeneralCredential from "../general/general.credential.interface";
import type GeneralEntity from "../general/general.entity.interface";
import type GeneralPersonalData from "../general/general.personal.data.interface";
import type GeneralUserEntity from "../general/general.user.entity.interface";

export default interface Employee
    extends GeneralEntity,
    GeneralPersonalData,
    GeneralUserEntity,
    GeneralCredential {
    role: string,
    avaliable: boolean,
    responsiblwe_admin_id: string
}