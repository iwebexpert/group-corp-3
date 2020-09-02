import React from 'react';

export const SettingsContext = React.createContext({} as Settings);
export const SettingsProvider = SettingsContext.Provider;
export const SettingsConsumer = SettingsContext.Consumer;
