import React, { MouseEventHandler, ReactNode } from 'react';

type Props = {
    callback: MouseEventHandler,
    // children: string,
    // children: JSX.Element,
    children: ReactNode,
};

function Button2({ children, callback }: Props){
    return (
    <button onClick={ callback }>{children}</button>
    );
}

export { Button2 };