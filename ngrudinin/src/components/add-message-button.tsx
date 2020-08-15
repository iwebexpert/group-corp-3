import React from "react"

export interface AddMessageButtonProps {
    onAddMessage: (message: string) => void
}

export const AddMessageButton: React.FC<AddMessageButtonProps> = (props: AddMessageButtonProps) => {
    const castMessage = () => {
        props.onAddMessage('test');
    }
    return <div><input type="button" onClick={() => castMessage()} value="Добавить сообщение"></input></div>
}