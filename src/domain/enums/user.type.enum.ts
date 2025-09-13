enum UserType {
    ADMIN = 'admin',
    EMPLOYEE = 'employee',
    CLIENT = 'client'
}

const USER_TYPE_DETAILS: Record<
    UserType,
    {
        label: string;
    }
> = {
    admin: {
        label: 'Administrador',
    },
    employee: {
        label: 'Funcionário',
    },
    client: {
        label: 'Cliente'
    }
};

export { UserType, USER_TYPE_DETAILS };