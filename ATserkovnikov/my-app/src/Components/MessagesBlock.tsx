import React, {useEffect, useState} from "react";
import {Messages} from "./Messages";
import {MessageForm} from "./MessageForm";

function MessagesBlock({messages, authors}: MessagesBlockProps) {
    const [curMessages, setMessage] = useState(messages);
    const [curAuthors, setAuthor] = useState(authors);

    let newAuthor: string = "";
    const [curAuthor, setNewAuthor] = useState(newAuthor);

    useEffect(() => {
        setTimeout(()=>{
            if (curAuthor !== "")
                setMessage(curMessages.concat({ Author: "Бот", MessageText: "Привет! " + curAuthor}));

            setAuthor(curAuthors.concat(curAuthor));
        }, 1000);
    }, [curAuthor]);

    return (<>
        <Messages messages={curMessages} />
        <hr/>
        <MessageForm MessageFormData={{Author: "", MessageText: ""}} AddMessageHandler={(newData: MessageData) => {

            if (curAuthors.find(c => c === newData.Author) === undefined)
                setNewAuthor(newData.Author);

            setMessage(curMessages.concat(newData))}
        } />
        </>)
}

export {MessagesBlock}
