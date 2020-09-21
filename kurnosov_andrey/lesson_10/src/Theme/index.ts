import React from "react";

export enum Themes {
    light = 'light',
    dark = 'dark'
};

export const ThemeContext = React.createContext({theme: Themes.light, change: (theme: Themes) => {}});

//TODO: Вынести значения цветов для тем в scss-переменные