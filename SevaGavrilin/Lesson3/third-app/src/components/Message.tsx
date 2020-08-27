import React, { Fragment } from 'react';

type Props = {
    text: string;
}

function Message( {text}: Props){
    return(<>
        <hr/>
        Text: {text} !
    </>);
}

export { Message };