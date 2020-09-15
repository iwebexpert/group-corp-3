import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { SettingsModal } from '../components/SettingsModal';
import { AppState } from '../state/store';
import {
  SettingsActions,
  settingsChange,
  settingsModalClose,
} from '../state/actions';
import i18n from '../i18n/i18n';
import { Dispatch } from 'redux';

type StateProps = {
  settings: Settings;
  visible: boolean;
};

type DispatchProps = {
  onSettingsChange: (settings: Settings) => void;
  onSettingsModalClose: () => void;
};

type Props = StateProps & DispatchProps;

export const SettingsModalContainer: FC<Props> = ({
  settings,
  visible,
  onSettingsChange,
  onSettingsModalClose,
}) => {
  useEffect(() => {
    i18n.changeLanguage(settings.language);
    document.body.className = '';
    document.body.className = `${
      settings.theme === 'dark' ? 'bg-dark' : 'bg-white'
    }`;
  }, [settings]);

  return (
    <SettingsModal
      settings={settings}
      visible={visible}
      theme={settings.theme}
      onSettingsModalClose={onSettingsModalClose}
      onSettingsChange={onSettingsChange}
    ></SettingsModal>
  );
};

const mapStateToProps = (state: AppState): StateProps => {
  return {
    settings: state.settings.settings,
    visible: state.settings.modalVisible,
  };
};

const mapDispathToProps = (
  dispatch: Dispatch<SettingsActions>
): DispatchProps => {
  return {
    onSettingsChange: (settings: Settings) =>
      dispatch(settingsChange(settings)),
    onSettingsModalClose: () => dispatch(settingsModalClose()),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(SettingsModalContainer);
