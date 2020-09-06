import { usersStub } from '../common/stubData';
import { Reducer } from "redux";
import { UsersActionTypes } from '../actions/users';

export type UsersReducerState = {
    loading: boolean;
    items: User[];
};

const initialState: UsersReducerState = {
    loading: false,
    items: usersStub
}
export const usersReducer: Reducer<UsersReducerState> = (state = initialState, action) => {
    switch (action.type) {
        case UsersActionTypes.USERS_LOAD:
            return { ...state, ...usersStub }
        default:
            return state;
    }
}