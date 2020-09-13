import { Reducer } from "redux";
import { SettingsActionTypes } from "../actions/settings";

export type SettingsReducerState = {
    settings: Settings;
};

const initialState: SettingsReducerState = {
    settings: { theme: 'dark', language: 'ru', name: 'JohnDoe' }
};

export const settingsReducer: Reducer<SettingsReducerState> = (state = initialState, action) => {
    switch (action.type) {
        case SettingsActionTypes.EDIT_SETTINGS:
            return {
                ...state,
                settings: { ...state.settings, ...action.payload }
            }
        default:
            return state;
    }
};
