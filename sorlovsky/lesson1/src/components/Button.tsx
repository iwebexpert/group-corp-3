import React, { MouseEventHandler } from 'react';

type Props = {
    text: string,
    callback: MouseEventHandler,
};

function Button({ text, callback }: Props){
    return (
    <button onClick={ callback }>{text}</button>
    );
}

export { Button };