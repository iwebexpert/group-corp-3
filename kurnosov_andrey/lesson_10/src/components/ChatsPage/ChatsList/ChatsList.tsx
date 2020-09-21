import './ChatsList.scss'

import React, { useState } from 'react'
import classnames from 'classnames'
import { Nav, Form, FormControl, InputGroup, Button, Spinner, Badge } from 'react-bootstrap';

type ChatsListProps = {
    selectedId: number | null;
    loading: boolean;
    list: { id: number; name: string; unreadedMessagesCount: number }[];
    onSelect: (el: { id: number; name: string }) => void;
    onAddChat: (chat: { name: string }) => void;
}

export const ChatsList = (props: ChatsListProps) => {


    const list = props.list.map((el, i) => {
        const className = classnames(
            { 'border-top': i !== 0 }
        )
        return (
            <Nav.Item className={className}
                key={el.id}
                onClick={() => props.onSelect(el)}
            >
                <Nav.Link className="d-flex justify-content-between" active={props.selectedId === el.id}>
                    {el.name}
                    {el.unreadedMessagesCount ?
                        <div className="d-flex align-items-center">
                            <Badge pill variant="success"> {el.unreadedMessagesCount} </Badge>
                        </div>
                        : null
                    }
                </Nav.Link>
            </Nav.Item>
        )
    });

    const [validated, setValidated] = useState<boolean>(false);
    const [chatName, _setChatName] = useState<string>('');
    const setChatName = (name: string) => {
        setValidated(name.length > 0);
        _setChatName(name);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const form = e.currentTarget;
        if (form.checkValidity()) {
            props.onAddChat({ name: chatName });
            setChatName('');
        }
    }

    return <>
        {props.loading && <Spinner animation="border" />}
        <Nav className="flex-column" variant="pills">
            {list}
        </Nav>
        {/* TODO: Вынести в компонент */}
        <Form noValidate validated={validated} onSubmit={onSubmit}>
            <Form.Group>
                <InputGroup>
                    <FormControl
                        name="name"
                        value={chatName}
                        onChange={e => setChatName(e.target.value)}
                        minLength={3}
                        maxLength={20}
                        pattern={'^[А-Яа-яA-Za-z0-9]{3,20}$'}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary" type="submit" disabled={!chatName.length}>+</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form.Group>
        </Form>
    </>
}