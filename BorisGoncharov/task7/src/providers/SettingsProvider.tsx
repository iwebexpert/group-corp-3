import React, { useState, useEffect } from 'react';
import { SettingsProvider } from '../contexts/SettingsContext';
import i18n from '../i18n/i18n';

export const SettingsProviderWrapper: React.FC = ({ children }) => {
  const [name, setName] = useState<string>('Boris');
  const [theme, setTheme] = useState<string>('light');
  const [language, setLanguage] = useState<string>('en');
  const [version, setVersion] = useState<string>('0.0.7');
  const settings: Settings = {
    name,
    setName,
    theme,
    setTheme,
    language,
    setLanguage,
    version,
    setVersion,
  };

  useEffect(() => {
    document.body.className = '';
    document.body.className = `${theme === 'Dark' ? 'bg-dark' : 'bg-white'}`;
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return <SettingsProvider value={settings}>{children}</SettingsProvider>;
};
