import React, { FC, useState } from "react"
import { TaskModel } from "../models/TaskModel"
import { Form, Button, Row, Col } from "react-bootstrap";

export interface AddTaskBlockProps {
    onAddTask: (task: TaskModel) => void;
}

let id = 0;

export const AddTaskBlock: FC<AddTaskBlockProps> = (props: AddTaskBlockProps) => {

    const [value, setValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const addTask = () => {
        props.onAddTask({
            enabled: false,
            id: id++,
            value: value
        })

        setValue('');
    }

    return <Row>

        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <Form.Control
                className="col-12"
                placeholder="Задача"
                onChange={handleChange}
                value={value}
            />
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Button disabled={!value} type="button" className="col-12" onClick={() => addTask()}>
                Добавить
        </Button>
        </Col>
    </Row>
}