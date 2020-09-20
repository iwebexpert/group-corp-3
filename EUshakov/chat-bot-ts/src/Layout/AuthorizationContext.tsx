import React from 'react';

export type AuthorizationModel = {
    isLoggedIn: boolean,
    userName: string
}

export const defaultAuth: AuthorizationModel = { isLoggedIn: true, userName: 'Dear me' };
export const AuthorizationContext = React.createContext<AuthorizationModel>(defaultAuth);