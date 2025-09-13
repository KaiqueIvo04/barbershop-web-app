import type { AxiosResponse } from "axios";
import { api } from "src/boot/axios";
import type GeneralCredential from "src/domain/interfaces/general/general.credential.interface";

function auth(credential: GeneralCredential): Promise<AxiosResponse<{ access_token: string }, unknown>> {
    return api.post<{ access_token: string}>('/auth/', credential);
}

export { auth };