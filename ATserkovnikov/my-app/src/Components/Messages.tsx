import React, {ReactElement} from "react";
import {Message} from "./Message";

type Props = {
    items: string[]
}

function Messages({items}: Props): ReactElement{
    console.log(items);
    const messages = items.map((item, index) => <Message text={item} key={index}/>);
    return (<>
        {messages}
    </>)
}

export {Messages}
