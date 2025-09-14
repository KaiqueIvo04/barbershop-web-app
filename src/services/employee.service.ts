import { api } from '@src/boot/axios';
import type HttpQuery from '@src/domain/classes/http.query';
import type GeneralCredential from '@src/domain/interfaces/general/general.credential.interface';
import type EmployeeForm from '@src/domain/types/employee/employee.form.type.';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type Employee from '@src/domain/interfaces/employee/employee.interface';

function getAll(httpQuery?: HttpQuery): Promise<AxiosResponse<Employee[], unknown>> {
   return api.get<Employee[]>(`/employees/${httpQuery ? httpQuery.toQueryString() : ''}`);
}

function getById(
   employeeId: string,
   axiosOptions?: AxiosRequestConfig,
): Promise<AxiosResponse<Employee, unknown>> {
   return api.get<Employee>(`/employees/${employeeId}/`, axiosOptions);
}

function add(employee: EmployeeForm): Promise<AxiosResponse<Employee, unknown>> {
   return api.post<Employee>('/employees/', employee);
}

function update(
   employeeId: string,
   employee: Omit<EmployeeForm, keyof GeneralCredential>,
): Promise<AxiosResponse<Employee, unknown>> {
   return api.patch<Employee>(`/employees/${employeeId}/`, employee);
}

export { getAll, getById, add, update };