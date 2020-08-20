import React from "react";
import {ConfigContextConsumer} from "../App";

export class TaskItem extends React.Component<TaskItemProps, TaskData>{
    public state = {
        TaskId: '',
        Title: '',
        IsReady: false
    };

    private readyHandle = () => {
        const newState: TaskData = this.state;
        newState.IsReady = !newState.IsReady;
        this.setState(newState);
    };

    private handleTaskDelete = () => {
        this.props.DeleteHandler(this.props.TaskItem.TaskId);
        const newState: TaskData = this.state;
        newState.IsReady = false;
        this.setState(newState);
    };

    public render(): React.ReactElement {
        return (
            <ConfigContextConsumer>
                {
                    globalOptions => globalOptions && (
                        <div>
                            {this.state.TaskId}
                            <input type="checkbox" checked={this.state.IsReady} onChange={this.readyHandle}/>
                            <span>{this.props.TaskItem.Title}</span>
                            <button onClick={this.handleTaskDelete} disabled={!this.state.IsReady}>
                                {globalOptions.lang === 'ru'? "Удалить" : "Delete" }
                            </button>
                        </div>
                    )}
            </ConfigContextConsumer>);
    }
}

