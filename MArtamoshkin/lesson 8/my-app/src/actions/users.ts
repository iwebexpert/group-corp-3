import { ActionCreator } from 'redux';
export enum UsersActionTypes {
    USERS_LOAD = 'USERS_LOAD'
}

export type UsersLoad = {
    type: UsersActionTypes.USERS_LOAD;
}

export const usersLoad: ActionCreator<UsersLoad> = () => ({
    type: UsersActionTypes.USERS_LOAD
});