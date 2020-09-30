import React, {useState} from 'react';
import {Layout} from "./components/Layout";
import {ChatThemeEnum, LangEnum, Options, OptionsContext} from "./models";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const initState: Options = {
    author: "Андрей",
    chatTheme: ChatThemeEnum.light,
    lang: LangEnum.rus,
    confirmCondition: true
};

export const ConfigContext = React.createContext<OptionsContext>({
    options: initState,
    changeContextHandle: () => {}
});

export const ConfigContextConsumer = ConfigContext.Consumer;

export const App: React.FC = () => {
    const [curContext, setCurContext] = useState(initState);
    const updateContext = (context: Options) => setCurContext(context);

    return (
        <ConfigContext.Provider value={{ options: curContext, changeContextHandle: updateContext }}>
            <Layout/>
        </ConfigContext.Provider>
    );
};

