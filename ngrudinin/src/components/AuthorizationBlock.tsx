import React, { useState } from "react"
import { UserModel } from "../models/UserModel"
import { Form, Row, Col, Button } from "react-bootstrap"

export interface AuthorizationProps {
    onAuth: (user: UserModel) => void
}

export const AuthorizationBlock: React.FC<AuthorizationProps> = (props: AuthorizationProps) => {

    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const [value, setValue] = useState<{ id: number, name: string }>({
        id: getRandomInt(100 + 3),
        name: ''
    });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue({ ...value, name: event.target.value });
    }

    const authorize = () => {
        props.onAuth({
            id: value.id,
            name: value.name
        })
    }

    return <Row>
        <Col></Col>
        <Col>
            <Row className="mb-2">
                <Col>
                    <Form.Control
                        className="col-12"
                        placeholder="Имя"
                        onChange={handleNameChange}
                        value={value.name}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button disabled={!value} type="button" className="col-12" onClick={() => authorize()}>
                        Добавить
        </Button>
                </Col>
            </Row>
        </Col>
        <Col></Col>
    </Row>
}