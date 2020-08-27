import React, { useState } from 'react';
import { grey } from '@material-ui/core/colors';
import Layout from './components/Layout';
import MessengerContainer from './components/Messenger/MessengerContainer';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  defaultBackground:{
      backgroundColor: grey[100],
  },
}));

function App() {
  const classes = useStyles();
  const [items, setItems] = useState<Message[]>([{text: 'Привет!'}]);

  const sendMessage = (message: Message) => {
    setItems(prevState => [...prevState, message]);
  };
  
  return (
      <Layout>
        <MessengerContainer/>
      </Layout>
  );
}

export default App;
