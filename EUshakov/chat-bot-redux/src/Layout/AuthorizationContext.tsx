import React from 'react';
import { AuthReducerState } from '../reducers/auth';

export const defaultAuth: AuthReducerState = { isLoggedIn: true, userName: 'Dear me' };
export const AuthorizationContext = React.createContext<AuthReducerState>(defaultAuth);