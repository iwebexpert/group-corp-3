import React from 'react';


type Props = {
    text: string,
    author?: string
};

const Message = ({text, author = 'text test'}: Props) => { return <div>Message: {text} - {author}</div>};

// function Message({text, author}: Props){
// return (<div>Message: {text} - {author}</div>);
// }

export {Message}
