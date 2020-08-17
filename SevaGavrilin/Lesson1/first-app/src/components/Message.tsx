import React, { Fragment } from 'react';

type Props = {
    text: string;
    author?: string;
}

function Message(props: Props){
    return(<>
        Text: {props.text} {props.author}
    </>);
}

export { Message };