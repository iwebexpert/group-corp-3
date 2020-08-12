import React, { MouseEventHandler, ReactNode, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    callback: MouseEventHandler,
    // children: string,
    // children: JSX.Element,
    children: ReactNode
};

function Button2({ children, callback, ...htmlAttributes }: Props){
    return (
    <button {...htmlAttributes} onClick={ callback }>{children}</button>
    );
}

export { Button2 };