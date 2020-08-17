import { TaskModel } from "../models/TaskModel";
import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export interface TaskItemParams {
    onChangeStatusTask: (task: TaskModel) => void;
    onDeleteTask: (task: TaskModel) => void;
    task: TaskModel;
}

export const TaskItem: React.FC<TaskItemParams> = (params: TaskItemParams) => {
    const { task } = params;

    const [enabled, setEnabled] = useState(task.enabled);

    const handleChange = () => {
        setEnabled(!enabled);
        task.enabled = !enabled;
        params.onChangeStatusTask(task);
    }

    const deleteItem = () => {
        params.onDeleteTask(task);
    }

    return <Row className="mb-2">

        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <Row>
                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                    <Form.Check className="col-12" checked={enabled} onChange={handleChange}></Form.Check>
                </Col>
                <Col xs={9} sm={9} md={9} lg={9} xl={9}>
                    <Form.Label className={`${(enabled ? 'completed-task' : 'not-completed-task')}`}>{task.value}</Form.Label>
                </Col>
            </Row>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Button variant="danger" className="col-12" onClick={() => deleteItem()}>
                ⨉
            </Button>
        </Col>
    </Row>
}