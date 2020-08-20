import React, { ReactElement, useEffect } from 'react';
import {List} from '@material-ui/core';
import { Message } from './Message';

function Messages({items, sendMessage}: MessagesListProps): ReactElement{
    let timeOut:number = 0;

    useEffect(()=> {
        if(items.length && items[items.length-1].author){
            timeOut = window.setTimeout(() => sendMessage({text:`Эй, ${items[items.length-1].author}! Что случилось?`}), 2000);
        }
    return () => {
        clearTimeout(timeOut);
    }}, [items]);

    const messages = items.map((item, index) => <Message item= {item} key={ index } />);
    return (<>{messages}</>);
}

export { Messages };