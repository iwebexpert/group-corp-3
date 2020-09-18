import { Reducer } from 'redux';
import { SettingsActions, SettingsActionTypes } from '../actions';

export type SettingsReducerState = {
  loading: boolean;
  modalVisible: boolean;
  settings: Settings;
};

const defaultSettings: Settings = {
  user: {
    id: '00000001',
    name: 'Boris',
  },
  theme: 'light',
  language: 'en',
}

const initialState: SettingsReducerState = {
  loading: false,
  modalVisible: false,
  settings: defaultSettings,
};

export const settingsReducer: Reducer<SettingsReducerState, SettingsActions> = (state = initialState, action) => {
  switch (action.type) {
    case SettingsActionTypes.SETTINGS_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SettingsActionTypes.SETTINGS_LOAD_SUCCESS:
      return {
        ...state,
        settings: action.payload,
        loading: false,
      };

    case SettingsActionTypes.SETTINGS_LOAD_FAILURE:
    case SettingsActionTypes.SETTINGS_UPDATE_FAILURE:
      console.warn(action.payload);
      return {
        ...state,
        settings: defaultSettings,
        loading: false,
      };

    case SettingsActionTypes.SETTINGS_UPDATE_REQUEST:
      return {
        ...state,
        settings: action.payload,
      };

    case SettingsActionTypes.SETTINGS_MODAL_OPEN:
      return {
        ...state,
        modalVisible: true,
      };

    case SettingsActionTypes.SETTINGS_MODAL_CLOSE:
      return {
        ...state,
        modalVisible: false,
      };

    default:
      return state;
  }
}