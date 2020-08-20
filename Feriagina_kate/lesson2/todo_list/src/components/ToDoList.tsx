import React from 'react';

import {TaskList} from './TaskList';
import {TaskForm} from './TaskForm';
import {TaskListProps, ToDoListState, TaskItem} from './types'

export class ToDoList extends React.Component<any, ToDoListState> {
    public state: ToDoListState = {
        items: this.props.items,
    };

    public handleTaskCreate = (task: TaskItem) => {
        this.setState({items: [...this.state.items, task]});
    };

    public handleChangeTaskList = (tasks: TaskItem[]) => {
        this.setState({items:[...tasks]});
    }

    public render(){
        return (
        <>
            <TaskList items={this.state.items} handlerOnChange = {this.handleChangeTaskList} />
            <TaskForm handlerOnCreate={this.handleTaskCreate} />
        </>
        );
    }
}