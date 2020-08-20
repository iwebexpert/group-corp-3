import React, { useState } from 'react';
import { Messages } from './components/Messages';
import { MessageForm } from './components/MessageForm';
import { Container, Paper, Grid, Box, Typography, makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

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
      <Container className={classes.defaultBackground} maxWidth="sm">
        <Grid container spacing={2}>
        <Grid item sm={12}>
          <Box pl={2} pt={2} >
            <Typography variant="h6" component="h6">
                Chat
            </Typography>
          </Box>
        </Grid>
          <Grid item sm={12}>
          <Messages items={items} sendMessage={sendMessage} />
          </Grid>
          <Grid item sm={12}>
          <MessageForm sendMessage={sendMessage} />
          </Grid>
        </Grid>
    </Container>
  );
}

export default App;
