import React from 'react';

import {TaskListProps, TaskItem} from './types';

export class TaskList extends React.Component<TaskListProps> {

    //Установка значения по умолчанию
    static defaultProps: TaskListProps = {
        items: [],
    }

    protected delete = (id: number): void =>{
        this.props.items.splice(id,1);

        this.props.handlerOnChange && this.props.handlerOnChange.call(this, this.props.items);
    }

    protected setDone(it: TaskItem): void {
        it.isDone = !it.isDone;
        this.props.handlerOnChange && this.props.handlerOnChange.call(this, this.props.items);
    }

    public render(){
        const { items } = this.props;

        const tasks = items.map((item: TaskItem, index) => 
        
        <li>
            <label style={{ textDecoration: item.isDone ? 'line-through' : undefined }}>
            <input type="checkbox" checked={item.isDone} onChange = { () => this.setDone(item)}/> {item.text}
            </label>
            <button type="button" onClick={ ()=> this.delete(index)}>X</button>
        </li>
        );
        return (<>
            <ol>{tasks}</ol>
        </>);
    }
}