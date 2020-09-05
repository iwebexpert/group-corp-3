import { ActionCreator } from 'redux';

// Define actions types
export enum SettingsActionTypes {
    // Loading actions
    SETTINGS_LOAD = 'SETTINGS_LOAD',
    SETTINGS_LOAD_SUCCESS = 'SETTINGS_LOAD_SUCCESS',
    SETTINGS_LOAD_ERROR = 'SETTINGS_LOAD_ERROR',

    // Main actions
    SETTINGS_CHANGE = 'SETTINGS_CHANGE',
    SETTINGS_MODAL_OPEN = 'SETTINGS_MODAL_OPEN',
    SETTINGS_MODAL_CLOSE = 'SETTINGS_MODAL_CLOSE',
}

// Define actions functions types
export type SettingsLoadAction = {
    type: SettingsActionTypes.SETTINGS_LOAD;
};

export type SettingsLoadSuccessAction = {
    type: SettingsActionTypes.SETTINGS_LOAD_SUCCESS;
    payload: Settings;
};

export type SettingsLoadErrorAction = {
    type: SettingsActionTypes.SETTINGS_LOAD_ERROR;
    payload: string;
};

export type SettingsChangeAction = {
    type: SettingsActionTypes.SETTINGS_CHANGE;
    payload: Settings;
};

export type SettingsModalOpenAction = {
    type: SettingsActionTypes.SETTINGS_MODAL_OPEN;
};

export type SettingsModalCloseAction = {
    type: SettingsActionTypes.SETTINGS_MODAL_CLOSE;
};

// All actions
export type SettingsActions = SettingsLoadAction | SettingsLoadSuccessAction | SettingsLoadErrorAction | SettingsChangeAction | SettingsModalOpenAction | SettingsModalCloseAction;

// Exporting actions
export const settingsLoad: ActionCreator<SettingsLoadAction> = () => ({
    type: SettingsActionTypes.SETTINGS_LOAD,
});

export const settingsLoadSuccess: ActionCreator<SettingsLoadSuccessAction> = (payload: Settings) => ({
    type: SettingsActionTypes.SETTINGS_LOAD_SUCCESS,
    payload
});

export const settingsLoadError: ActionCreator<SettingsLoadErrorAction> = (payload: string) => ({
    type: SettingsActionTypes.SETTINGS_LOAD_ERROR,
    payload
});

export const settingsChange: ActionCreator<SettingsChangeAction> = (payload: Settings) => ({
    type: SettingsActionTypes.SETTINGS_CHANGE,
    payload
});

export const settingsModalOpen: ActionCreator<SettingsModalOpenAction> = () => ({
    type: SettingsActionTypes.SETTINGS_MODAL_OPEN,
});

export const settingsModalClose: ActionCreator<SettingsModalCloseAction> = () => ({
    type: SettingsActionTypes.SETTINGS_MODAL_CLOSE,
});