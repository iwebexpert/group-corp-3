import React, { useRef, useEffect } from 'react';
import { MessagesAreaProps, MessageAuthor } from '../../shared/types';

function MessagesAreaComponent({messages}:MessagesAreaProps){
    let messagesEnd: HTMLDivElement | null;

    const getClassesByAuthor = (author: MessageAuthor): string => {
       return author === MessageAuthor.User ?  'alert alert-primary float-right mr-2' : 'alert alert-success float-left ml-2';   
    };   

    const scrollToBottom = () => {messagesEnd?.scrollIntoView({ behavior: "smooth" })};
    
    useEffect(scrollToBottom, [messages]);

    let content = messages.map((x, idx)=><div key={idx} className="message"><div className={getClassesByAuthor(x.author)}>{x.content}</div></div>);
    return (
        <div className="chat">
            {content} 
            <div ref={(el) => { messagesEnd = el; }} />
        </div>
    );
};
export { MessagesAreaComponent };