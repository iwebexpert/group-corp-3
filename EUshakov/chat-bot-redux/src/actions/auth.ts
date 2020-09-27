import { ActionCreator } from 'redux';

export enum AuthActionTypes {
    AUTH_LOGIN = 'AUTH_LOGIN',
    AUTH_LOGOUT = 'AUTH_LOGOUT'
}

export type AuthLoginAction = {
    type: AuthActionTypes.AUTH_LOGIN,
    payload: string,
};

export type AuthLogoutAction = {
    type: AuthActionTypes.AUTH_LOGOUT
}

export type AuthActions = AuthLoginAction | AuthLogoutAction;

export const authLogin: ActionCreator<AuthLoginAction> = (userName) => ({
    type: AuthActionTypes.AUTH_LOGIN,
    payload: userName
});

export const authLogout: ActionCreator<AuthLogoutAction> = () => ({
    type: AuthActionTypes.AUTH_LOGOUT
});