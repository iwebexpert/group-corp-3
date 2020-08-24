import React, { Fragment, ReactElement, MouseEventHandler, ReactNode } from 'react';

type Props = {
    text: string;
    callback: MouseEventHandler;
    children: ReactNode;
}

function Button ({ text, callback, children }: Props){
    return(
    <button onClick={ callback }>{text} - {children}</button>
    )
}



export { Button };
