import React, { ReactNode } from 'react';
import './task-item.css';
export type TaskProps = {
    name: string;
    isCompleted: boolean;
    deleteRequested: () => void;
    completionChanged: (isComplete: boolean) => void
}

export class TaskItem extends React.Component<TaskProps>{
    onCompleteChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.completionChanged(event.target.checked);
    }

    render(): ReactNode {
        const taskStyle = this.props.isCompleted
            ? 'completed-task'
            : undefined;

        return <div className="task-item">
            <label>
                <input type="checkBox" defaultChecked={this.props.isCompleted} onChange={this.onCompleteChanged} />
                <span className={taskStyle} >{this.props.name}</span>
            </label>
            <button onClick={() => this.props.deleteRequested()} >x</button>
        </div>
    }
}