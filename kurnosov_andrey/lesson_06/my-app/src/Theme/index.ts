import React from "react";

export enum Themes {
    light = 'light',
    dark = 'dark'
};

export const ThemeContext = React.createContext({theme: Themes.light, change: (theme: Themes) => {}});