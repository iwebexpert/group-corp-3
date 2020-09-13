import React from "react";
import {Button, Form} from "react-bootstrap";
import {inject, observer} from "mobx-react";
import {ChatStore} from "../../../stores";

import './ChatForm.scss'

type  ChatFormProps = {
    chats?: ChatStore;
}

type ChatFormState = {
    checkCondition: boolean;
    chatName: string;
    validated: boolean;
}

@inject('chats')
@observer
export default class ChatForm extends React.Component<ChatFormProps, ChatFormState> {

    public state: ChatFormState = {
        checkCondition: true,
        chatName: '',
        validated: false
    };

    onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({...this.state, chatName: event.target.value});
    };

    handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;

        if (form.checkValidity()) {
            if (this.props.chats?.addChat) {
                this.props.chats?.addChat(this.state.chatName);
            }

            this.setState({...this.state, chatName: "", validated: false});
        } else {
            event.stopPropagation();
            this.setState({...this.state, validated: true});
        }
    };

    render() {
        return <Form noValidate
                     validated={this.state.validated}
                     method="POST"
                     onSubmit={this.handleSubmit}
        >
            <Form.Group>
                <Form.Control
                    type="input"
                    disabled={!this.state.checkCondition}
                    placeholder="Введите название чата"
                    required
                    minLength={3}
                    maxLength={30}
                    pattern="[a-zA-Zа-яА-ЯёЁ]*"
                    value={this.state.chatName}
                    onChange={this.onChangeHandler}
                />
                <Form.Control.Feedback type="invalid">
                    Не заполнено поле название чата
                </Form.Control.Feedback>
            </Form.Group>

            <Button
                type="submit"
                variant="success"
                disabled={!this.state.checkCondition}
            >
                Добавить
            </Button>
        </Form>;
    }
};
