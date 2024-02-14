import { RegistrationFormObject } from "./LoginRegisterInterfaces";

export interface SearchAllUserObject{
    userName: string;
    currentUser: string;
}

export interface UserData extends RegistrationFormObject{
    id: string;
    createdAt: any;
    updatedAt: any;
}

export interface FollowUserAPIObject{
    currentUserId: string;
    followedUserId: string;
}

export interface GetFollowingUsersAPIObject{
    currentUserId: string;
}
