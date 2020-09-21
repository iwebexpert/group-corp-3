import { ActionCreator, Dispatch } from 'redux';
import { AppState } from '../store';

// Define actions types
export enum SettingsActionTypes {
  // Load
  SETTINGS_LOAD_REQUEST = 'SETTINGS_LOAD_REQUEST',
  SETTINGS_LOAD_SUCCESS = 'SETTINGS_LOAD_SUCCESS',
  SETTINGS_LOAD_FAILURE = 'SETTINGS_LOAD_FAILURE',

  // Update
  SETTINGS_UPDATE_REQUEST = 'SETTINGS_UPDATE_REQUEST',
  SETTINGS_UPDATE_SUCCESS = 'SETTINGS_UPDATE_SUCCESS',
  SETTINGS_UPDATE_FAILURE = 'SETTINGS_UPDATE_FAILURE',

  // Other
  SETTINGS_MODAL_OPEN = 'SETTINGS_MODAL_OPEN',
  SETTINGS_MODAL_CLOSE = 'SETTINGS_MODAL_CLOSE',
}

// Define actions functions types
// Load
export type SettingsLoadRequestAction = {
  type: SettingsActionTypes.SETTINGS_LOAD_REQUEST;
};

export type SettingsLoadSuccessAction = {
  type: SettingsActionTypes.SETTINGS_LOAD_SUCCESS;
  payload: Settings;
};

export type SettingsLoadFailureAction = {
  type: SettingsActionTypes.SETTINGS_LOAD_FAILURE;
  payload: string;
};

// Update
export type SettingsUpdateRequestAction = {
  type: SettingsActionTypes.SETTINGS_UPDATE_REQUEST;
  payload: Settings;
};

export type SettingsUpdateSuccessAction = {
  type: SettingsActionTypes.SETTINGS_UPDATE_SUCCESS;
};

export type SettingsUpdateFailureAction = {
  type: SettingsActionTypes.SETTINGS_UPDATE_FAILURE;
  payload: string;
};

// Other
export type SettingsModalOpenAction = {
  type: SettingsActionTypes.SETTINGS_MODAL_OPEN;
};

export type SettingsModalCloseAction = {
  type: SettingsActionTypes.SETTINGS_MODAL_CLOSE;
};

// All actions
export type SettingsActions =
  // Load 
  SettingsLoadRequestAction |
  SettingsLoadSuccessAction |
  SettingsLoadFailureAction |

  // Update
  SettingsUpdateRequestAction |
  SettingsUpdateSuccessAction |
  SettingsUpdateFailureAction |

  // Other
  SettingsModalOpenAction |
  SettingsModalCloseAction;

// Exporting actions
// Load
export const settingsLoad = () =>
  async (dispatch: Dispatch, getState: () => AppState, { baseUrl }: ThunkExtraArgs) => {
    try {
      dispatch(settingsLoadRequest());
      const result = await fetch(`${baseUrl}/settings`);
      dispatch(settingsLoadSuccess(await result.json()));
    } catch (error) {
      dispatch(settingsLoadFailure(error));
    }
  };

export const settingsLoadRequest: ActionCreator<SettingsLoadRequestAction> = () => ({
  type: SettingsActionTypes.SETTINGS_LOAD_REQUEST,
});

export const settingsLoadSuccess: ActionCreator<SettingsLoadSuccessAction> = (payload: Settings) => ({
  type: SettingsActionTypes.SETTINGS_LOAD_SUCCESS,
  payload
});

export const settingsLoadFailure: ActionCreator<SettingsLoadFailureAction> = (payload: string) => ({
  type: SettingsActionTypes.SETTINGS_LOAD_FAILURE,
  payload
});

// Load
export const settingsUpdate = (settings: Settings) =>
  async (dispatch: Dispatch, getState: () => AppState, { baseUrl }: ThunkExtraArgs) => {
    try {
      dispatch(settingsUpdateRequest(settings));
      const result = await fetch(`${baseUrl}/settings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(settings),
      });
      await result.json();
      dispatch(settingsUpdateSuccess());
    } catch (error) {
      dispatch(settingsUpdateFailure(error));
    }
  };

export const settingsUpdateRequest: ActionCreator<SettingsUpdateRequestAction> = (payload: Settings) => ({
  type: SettingsActionTypes.SETTINGS_UPDATE_REQUEST,
  payload
});

export const settingsUpdateSuccess: ActionCreator<SettingsUpdateSuccessAction> = () => ({
  type: SettingsActionTypes.SETTINGS_UPDATE_SUCCESS,
});

export const settingsUpdateFailure: ActionCreator<SettingsUpdateFailureAction> = (payload: string) => ({
  type: SettingsActionTypes.SETTINGS_UPDATE_FAILURE,
  payload
});

// Other
export const settingsModalOpen: ActionCreator<SettingsModalOpenAction> = () => ({
  type: SettingsActionTypes.SETTINGS_MODAL_OPEN,
});

export const settingsModalClose: ActionCreator<SettingsModalCloseAction> = () => ({
  type: SettingsActionTypes.SETTINGS_MODAL_CLOSE,
});