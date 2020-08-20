import React, {ReactElement} from "react";
import {Message} from "./Message";

function Messages({messages}: MessageProps): ReactElement{
    const messageView = messages.map((item, index) => <Message Author={item.Author} MessageText={item.MessageText} key={index}/>);
    return (<>
        {messageView}
    </>)
}

export {Messages}
