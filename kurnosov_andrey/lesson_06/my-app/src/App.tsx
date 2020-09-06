
import './App.css';
import React, { useContext, useState } from 'react';

import { Layout } from './components/Layout/Layout';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ChatsPage } from './components/ChatsPage/ChatsPage';
import { Langs, LangContext, mixinLangContextValue } from './Langs';
import { Themes, ThemeContext } from './Theme';
import { AuthContext } from './Auth';

function App() {

    const [lang, setLang] = useState<Langs>(Langs.RU); 
    const langContextValue = mixinLangContextValue({
        lang,
        change: setLang
    });

    const [theme, setTheme] = useState<Themes>(Themes.light);
    const themeContextValue = {theme, change: setTheme};

    return <>
        <AuthContext.Provider value={{user : {id: '1', name:'User'}}}>
            <LangContext.Provider value={langContextValue}>
                <ThemeContext.Provider value={themeContextValue}>
                    <Layout
                        header={<Header />}
                        body={<ChatsPage />}
                        footer={<Footer />}  
                    /> 
                </ThemeContext.Provider>
            </LangContext.Provider>
        </AuthContext.Provider>
    </>;
}

export default App;
