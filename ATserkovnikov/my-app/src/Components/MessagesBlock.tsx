import React, {useEffect, useState} from "react";
import {Messages} from "./Messages";
import {MessageForm} from "./MessageForm";

function MessagesBlock({messages, authors}: MessagesBlockProps) {
    const [curMessages, setMessage] = useState(messages);
    const [curAuthors, setAuthor] = useState(authors);

    useEffect(() => {
        setTimeout(()=>{
            if (curAuthors.length > 0)
                setMessage(curMessages.concat({ Author: "Бот", MessageText: "Привет! " + curAuthors[curAuthors.length - 1]}));
        }, 1000);
    }, [curAuthors]);

    return (<>
        <Messages messages={curMessages} />
        <hr/>
        <MessageForm MessageFormData={{Author: "", MessageText: ""}} AddMessageHandler={(newData: MessageData) => {

            if (curAuthors.find(c => c === newData.Author) == undefined)
                setAuthor(curAuthors.concat(newData.Author));
            setMessage(curMessages.concat(newData))}
        } />
        </>)
}

export {MessagesBlock}
