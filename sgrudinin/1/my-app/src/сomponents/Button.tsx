import React, { MouseEventHandler } from 'react';


type Props = {
    text: string,
    callback: MouseEventHandler
};

//const Message = ({text, author = 'text test'}: Props) => { return <div>Message: {text} - {author}</div>};

function Button({ text,callback}: Props){
return (<button onClick = {callback}>{text}</button>);
}

export {Button};
