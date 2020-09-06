
import './App.css';
import React, { useContext, useState } from 'react';

import { Layout } from './components/Layout/Layout';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ChatsPage } from './components/ChatsPage/ChatsPage';
import { Langs, LangContext, mixinLangContextValue } from './Langs';

function App() {

    const [lang, setLang] = useState<Langs>(Langs.RU); 
    const langContextValue = mixinLangContextValue({
        lang,
        change: setLang
    });

    return <>
        <LangContext.Provider value={langContextValue}>
            <Layout
                header={<Header />}
                body={<ChatsPage />}
                footer={<Footer />}  
            /> 
        </LangContext.Provider>
    </>;
}

export default App;
