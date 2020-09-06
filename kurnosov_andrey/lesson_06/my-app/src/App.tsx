
import './App.css';
import React from 'react';

import { Layout } from './components/Layout/Layout';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ChatsPage } from './components/ChatsPage/ChatsPage';

function App() {
  return <>
    <Layout
      header={<Header />}
      body={<ChatsPage />}
      footer={<Footer />}  
    /> 
    </>;
}

export default App;
