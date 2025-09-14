import type Employee from '@src/domain/interfaces/employee/employee.interface';
import type GeneralEntity from '@src/domain/interfaces/general/general.credential.interface';
import type GeneralUserEntity from '@src/domain/interfaces/general/general.user.entity.interface';

// Create the type EmployeeForm removing properties of GeneralEntity and GeneralUserEntity
type EmployeeForm = Omit<Employee, keyof GeneralEntity | keyof GeneralUserEntity>;

export default EmployeeForm;