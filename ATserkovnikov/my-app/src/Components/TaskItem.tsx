import React from "react";
import {ConfigContextConsumer} from "../App";

export class TaskItem extends React.Component<TaskItemProps, TaskData>{
    public state = {
        taskId: '',
        title: '',
        isReady: false
    };

    private readyHandle = () => {
        const newState: TaskData = this.state;
        newState.isReady = !newState.isReady;
        this.setState(newState);
    };

    private handleTaskDelete = () => {
        this.props.deleteHandler(this.props.taskItem.taskId);
        const newState: TaskData = this.state;
        newState.isReady = false;
        this.setState(newState);
    };

    public render(): React.ReactElement {
        return (
            <ConfigContextConsumer>
                {
                    globalOptions => globalOptions && (
                        <div>
                            {this.state.taskId}
                            <input type="checkbox" checked={this.state.isReady} onChange={this.readyHandle}/>
                            <span>{this.props.taskItem.title}</span>
                            <button onClick={this.handleTaskDelete} disabled={!this.state.isReady}>
                                {globalOptions.lang === 'ru'? "Удалить" : "Delete" }
                            </button>
                        </div>
                    )}
            </ConfigContextConsumer>);
    }
}

