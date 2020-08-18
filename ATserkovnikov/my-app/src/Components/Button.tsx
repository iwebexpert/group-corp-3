import React, {MouseEventHandler, ReactNode} from "react";

type Props = {
    addItem: MouseEventHandler,
    children: ReactNode
}

function Button({addItem, children }: Props){
    return (<button onClick={addItem}>{children}</button>)
}

export {Button}
