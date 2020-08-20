import React from "react";
import {TasksItems} from "./TaskItems";
import {TaskForm} from "./TaskForm";

export class TasksBlock extends React.Component<any, TasksBlockState>{
    public state: TasksBlockState = {
        Tasks: []
    };

    public addHandle = (task: TaskFormState) => {
        console.log(task);
        this.setState({ Tasks: this.state.Tasks.concat({
                TaskId: Math.random().toString(36).substr(2, 9),
                Title: task.TaskText,
                IsReady: true})
        })
    };

    public deleteHandle = (taskId: string) => {
        console.log(taskId);
        this.setState({Tasks: this.state.Tasks.filter((item) => item.TaskId !== taskId)});
    };

    public render(): React.ReactElement {
        return <>
            <TasksItems Tasks={this.state.Tasks} DeleteHandler={this.deleteHandle}/>
            <hr/>
            <TaskForm TaskText="" AddHandler={this.addHandle}/>
        </>;
    }
}
