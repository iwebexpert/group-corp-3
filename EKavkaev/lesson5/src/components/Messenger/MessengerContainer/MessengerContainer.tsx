import React, { useState } from 'react';
import MessagesList from '../MessegesList';
import MessageForm from '../MessageForm';
import { Container, Paper, Grid, Box, Typography, makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  defaultBackground:{
      backgroundColor: grey[100],
  },
  chatContainer:{
    overflow: 'auto'
  }
}));

function MessengerContainer() {
  const classes = useStyles();
  const [items, setItems] = useState<Message[]>([{text: 'Привет!'}]);

  const sendMessage = (message: Message) => {
    setItems(prevState => [...prevState, message]);
  };
  
  return (
      <Box display='flex' flexDirection='column' height='100%' maxWidth={500}>
            <MessagesList items={items} sendMessage={sendMessage} />
            <MessageForm sendMessage={sendMessage} />
      </Box>
  );
}

export default MessengerContainer;
