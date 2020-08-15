import React from 'react';
import { TaskGeneratorComponent } from './components/TaskGeneratorComponent';
import { TaskListComponent } from './components/TaskListComponent';
import { SimpleTask, TodoListState } from '../shared/types';


export class Lesson2Component extends React.Component<any, TodoListState>{
    public state: TodoListState = {
        tasks: []
    };

    private handleTaskCreate = (task: SimpleTask) => {
        this.setState({ tasks : [...this.state.tasks, task]});
    };

    private handleChangeTaskList = (tasks: SimpleTask[]) => {
        this.setState({ tasks : [...tasks]});
    }; 

    public render(){ 
        return (
        <>
            <TaskListComponent tasks={this.state.tasks} onChangeTaskList={this.handleChangeTaskList}/>
            <TaskGeneratorComponent onCreateTask={this.handleTaskCreate}/>
        </>
        );
    };
}