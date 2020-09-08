import React, { useEffect } from 'react';
import i18n from '../common/i18n';
import { useSelector } from 'react-redux';
import { AppState } from '../reducers';

const UserSettingsProvider: React.FC = ({ children }) => {
  const { theme, language } = useSelector<AppState,  Settings>((state: AppState) => state.appSettings.settings);

  useEffect(() => {
    document.body.className = '';
    document.body.className = `theme-${theme}`;
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (<>{children}</>);
}

export { UserSettingsProvider };