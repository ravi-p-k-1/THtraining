export interface LoginFormObject{
    userName: string;
    password: string;
}

export interface RegistrationFormObject extends LoginFormObject{
    lastName: string;
    firstName: string;
    contact: string;
}
