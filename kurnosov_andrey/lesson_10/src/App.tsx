
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Langs, LangContext, mixinLangContextValue } from './Langs';
import { Themes, ThemeContext } from './Theme';
import { AuthContext, User } from './Auth';
import { AboutPage } from './components/AboutPage/AboutPage';
import { Provider } from 'react-redux';
import { store } from './store';
import { ChatsPage } from './components/ChatsPage/ChatsPage';

function App() {

    const [lang, setLang] = useState<Langs>(Langs.RU);
    const langContextValue = mixinLangContextValue({
        lang,
        change: setLang
    });

    const [theme, setTheme] = useState<Themes>(Themes.light);
    const themeContextValue = { theme, change: setTheme };

    const [user, setUser] = useState<User>({ id: '1', name: '' })
    const authContextValue = { user, change: setUser };
    return <>
        <BrowserRouter>
            <Provider store={store}>
                {/*TODO: Вынести провайдеры в Redux */}
                <AuthContext.Provider value={authContextValue}>
                    <LangContext.Provider value={langContextValue}>
                        <ThemeContext.Provider value={themeContextValue}>
                            <Layout
                                header={<Header />}
                                body={
                                    <Switch>
                                        <Route path="/" exact>
                                            <AboutPage />
                                        </Route>
                                        <Route path="/about">
                                            <AboutPage />
                                        </Route>
                                        <Route path="/chats/:id">
                                            <ChatsPage />
                                        </Route>
                                        <Route path="/chats">
                                            <ChatsPage />
                                        </Route>
                                        <Route path="*">
                                            <div className="text-danger text-center"> 404 </div>
                                        </Route>
                                    </Switch>
                                }
                                footer={<Footer />}
                            />
                        </ThemeContext.Provider>
                    </LangContext.Provider>
                </AuthContext.Provider>
            </Provider>
        </BrowserRouter>
    </>;
}

export default App;
