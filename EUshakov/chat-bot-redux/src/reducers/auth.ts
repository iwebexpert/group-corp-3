import { Reducer } from "redux";
import { AuthActions, AuthActionTypes } from "../actions/auth";

export type AuthReducerState = {
    isLoggedIn: boolean,
    userName: string
}

const initialState = {
    isLoggedIn: true,
    userName: "Dear me"
};


export const authReducer: Reducer<AuthReducerState, AuthActions> = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.AUTH_LOGIN: {
            return {
                ...state,
                isLoggedIn: true,
                userName: action.payload
            };
        }
        case AuthActionTypes.AUTH_LOGOUT: {
            return {
                ...state,
                isLoggedIn: false,
                userName: ''
            };
        }
        default:
            return state;
    }
}