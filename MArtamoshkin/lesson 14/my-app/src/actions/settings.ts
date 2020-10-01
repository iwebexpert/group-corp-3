import { ActionCreator } from 'redux';
export enum SettingsActionTypes {
    EDIT_SETTINGS = 'EDIT_SETTINGS'
};

export type EditSettingsType = {
    type: SettingsActionTypes.EDIT_SETTINGS,
    payload: Settings
};

export const editSettings: ActionCreator<EditSettingsType>  = (settings: Settings) => ({
    type: SettingsActionTypes.EDIT_SETTINGS,
    payload: settings
});
