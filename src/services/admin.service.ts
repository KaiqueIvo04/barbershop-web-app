import { api } from 'src/boot/axios';
import type HttpQuery from 'src/domain/classes/http.query';
import type Admin from 'src/domain/interfaces/admin/admin.interface';
import type GeneralCredential from 'src/domain/interfaces/general/general.credential.interface';
import type AdminForm from 'src/domain/types/admin/admin.form.type';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

function getAll(httpQuery?: HttpQuery): Promise<AxiosResponse<Admin[], unknown>> {
   return api.get<Admin[]>(`/admins/${httpQuery ? httpQuery.toQueryString() : ''}`);
}

function getById(
   adminId: string,
   axiosOptions?: AxiosRequestConfig,
): Promise<AxiosResponse<Admin, unknown>> {
   return api.get<Admin>(`/admins/${adminId}/`, axiosOptions);
}

function add(admin: AdminForm): Promise<AxiosResponse<Admin, unknown>> {
   return api.post<Admin>('/admins/', admin);
}

function update(
   adminId: string,
   admin: Omit<AdminForm, keyof GeneralCredential>,
): Promise<AxiosResponse<Admin, unknown>> {
   return api.patch<Admin>(`/admins/${adminId}/`, admin);
}

export { getAll, getById, add, update };