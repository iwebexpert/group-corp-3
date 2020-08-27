import React from "react";
import {TasksItems} from "./TaskItems";
import {TaskForm} from "./TaskForm";

export class TasksBlock extends React.Component<any, TasksBlockState>{
    public state: TasksBlockState = {
        tasks: []
    };

    public addHandle = (task: TaskFormState) => {
        console.log(task);
        this.setState({ tasks: this.state.tasks.concat({
                taskId: Math.random().toString(36).substr(2, 9),
                title: task.taskText,
                isReady: true})
        })
    };

    public deleteHandle = (taskId: string) => {
        console.log(taskId);
        this.setState({tasks: this.state.tasks.filter((item) => item.taskId !== taskId)});
    };

    public render(): React.ReactElement {
        return <>
            <TasksItems tasks={this.state.tasks} deleteHandler={this.deleteHandle}/>
            <hr/>
            <TaskForm taskText="" addHandler={this.addHandle}/>
        </>;
    }
}
