import React from "react"
import { MessageModel } from "../models/MessageModel"
import { Col, Row } from "react-bootstrap"

export interface MessageProps {
    message: MessageModel;
}

export const Message: React.FC<MessageProps> = (props: MessageProps) => {
    return <>
        <Row>
            <Col>
                <h6>{props.message.author.name}</h6>
            </Col>
        </Row>
        <Row>
            <Col>
                <h5>{props.message.text}</h5>
            </Col>
        </Row>
    </>
}