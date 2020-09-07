import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SettingsModal } from '../components/SettingsModal';
import {
  settingsChange,
  settingsModalClose,
} from '../state/settings/settingsActions';
import { AppState } from '../state/store';
import i18n from '../i18n/i18n';

export const SettingsModalContainer: FC<{}> = () => {
  const dispatch = useDispatch();

  const settings = useSelector((state: AppState) => state.settings.settings);
  const visible = useSelector((state: AppState) => state.settings.modalVisible);

  useEffect(() => {
    i18n.changeLanguage(settings.language);
    document.body.className = '';
    document.body.className = `${
      settings.theme === 'dark' ? 'bg-dark' : 'bg-white'
    }`;
  }, [settings]);

  const handleSettingsModalClose = () => {
    dispatch(settingsModalClose());
  };

  const handleSettingsChange = (settings: Settings) => {
    dispatch(settingsChange(settings));
  };

  return (
    <SettingsModal
      settings={settings}
      visible={visible}
      theme={settings.theme}
      onSettingsModalClose={handleSettingsModalClose}
      onSettingsChange={handleSettingsChange}
    ></SettingsModal>
  );
};
