import React, { useState, useEffect } from 'react';
import { SettingsProvider } from '../contexts/SettingsContext';
import i18n from '../common/i18n';

const UserSettingsProvider: React.FC = ({ children }) => {
  const [name, setName] = useState<string>('JohnDoe');
  const [theme, setTheme] = useState<string>('dark');
  const [language, setLanguage] = useState<string>('ru');
  const settings: Settings = {
    name,
    theme,
    language,
    setName,
    setTheme,
    setLanguage
  };

  useEffect(() => {
    document.body.className = '';
    document.body.className = `theme-${theme}`;
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (<SettingsProvider value={settings}>{children}</SettingsProvider>);
}

export { UserSettingsProvider };