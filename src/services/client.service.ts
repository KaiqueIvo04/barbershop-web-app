import { api } from '@src/boot/axios';
import type HttpQuery from '@src/domain/classes/http.query';
import type GeneralCredential from '@src/domain/interfaces/general/general.credential.interface';
import type ClientForm from '@src/domain/types/client/client.form.type';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type Client from '@src/domain/interfaces/client/client.interface';

function getAll(httpQuery?: HttpQuery): Promise<AxiosResponse<Client[], unknown>> {
   return api.get<Client[]>(`/clients/${httpQuery ? httpQuery.toQueryString() : ''}`);
}

function getById(
   clientId: string,
   axiosOptions?: AxiosRequestConfig,
): Promise<AxiosResponse<Client, unknown>> {
   return api.get<Client>(`/clients/${clientId}/`, axiosOptions);
}

function add(client: ClientForm): Promise<AxiosResponse<Client, unknown>> {
   return api.post<Client>('/clients/', client);
}

function update(
   clientId: string,
   client: Omit<ClientForm, keyof GeneralCredential>,
): Promise<AxiosResponse<Client, unknown>> {
   return api.patch<Client>(`/clients/${clientId}/`, client);
}

export { getAll, getById, add, update };