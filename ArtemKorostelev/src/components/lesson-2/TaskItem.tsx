import React, {PureComponent} from 'react';
import {Row} from "react-bootstrap";

export default class TaskItem extends PureComponent<TaskItemProps> {

    render() {
        const { text, checked, id, switchTaskState, removeTask } = this.props;
        return (
            <Row noGutters={true} className={'pl-4 pr-4'}>
                <input className="form-check-input" type="checkbox" id={id}
                       checked={checked} onChange={() => switchTaskState(id, checked)}
                />
                <label className="form-check-label" htmlFor={id}>
                    { text }
                </label>
                <button className={'btn btn-outline-danger ml-3'} onClick={() => removeTask(id)}>x</button>
            </Row>
        );
    }
}
