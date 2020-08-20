import React from "react"
import { MessageModel } from "../models/MessageModel"
import { Row, Col } from "react-bootstrap";
import { Message } from "./Message";

export interface MessageFieldProps {
    messages: MessageModel[]
}

export const MessageField: React.FC<MessageFieldProps> = (props: MessageFieldProps) => {
    const firstUserId = props.messages[0]?.author.id;

    const renderMessage = (message: MessageModel) => {
        if (message.author.id === firstUserId) {
            return <>
                <div className="col-8"><Message message={message}></Message></div>
                <div className="col-4"></div>
            </>
        }
        return <>
            <div className="col-4"></div>
            <div className="col-8"><Message message={message}></Message></div>
        </>
    }

    const mainBlockStyle = {
        maxHeight: '30em',
        'overflow-y': 'scroll'

}

return <div style={mainBlockStyle}>
    {props.messages.map((q, index) => <Row key={index}>{renderMessage(q)}</Row>)}
</div>
}