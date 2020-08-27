import React, { ReactElement, useEffect } from 'react';
import Message from '../Message';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    messagesContainer:{
        maxHeight: '55vh',
        minHeight: '55vh',
        overflow: 'auto'
    }
  }));
  
function MessagesList({items, sendMessage}: MessagesListProps): ReactElement{
    const classes = useStyles();
    const messagesEndRef = React.createRef<HTMLDivElement>()

    let timeOut:number = 0;
    
    const scrollToBottom = () => {
        if(messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(()=> {
        scrollToBottom();
        if(items.length && items[items.length-1].author){
            timeOut = window.setTimeout(() => sendMessage({text:`Эй, ${items[items.length-1].author}! Что случилось?`}), 2500);
        }
    return () => {
        clearTimeout(timeOut);
    }}, [items]);

    const messages = items.map((item, index) => <Message item= {item} key={ index } />);
    return (
    <Box px={2} className={classes.messagesContainer}>
        {messages}
        <div ref={messagesEndRef} />
    </Box>);
}

export default MessagesList;