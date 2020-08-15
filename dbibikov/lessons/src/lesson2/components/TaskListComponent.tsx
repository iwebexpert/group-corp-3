import React from 'react';
import { TaskListProps, SimpleTask } from '../../shared/types';


export class TaskListComponent extends React.Component<TaskListProps>{
    static defaultProps: TaskListProps = {
        tasks: []
    }

    private deleteTask = (id: number): void => {
        this.props.tasks.splice(id, 1);
        this.props.onChangeTaskList?.call(this, this.props.tasks);
    }
    
    private toggleCheck(item: SimpleTask): void {
        item.isCompleted = !item.isCompleted;
        this.props.onChangeTaskList?.call(this, this.props.tasks);
    }

    public render(){ 
        const tasks = this.props.tasks.map((item: SimpleTask, index) => 
            <div className="card task-card" key={ index }>             
                <label className="task-body"> 
                <input type="checkbox" onChange={()=> this.toggleCheck(item)} checked={item.isCompleted}></input> 
                    <span>{item.body} </span>
                </label>
                <button type="button" className="btn btn-outline-danger" onClick={ ()=> this.deleteTask(index)}>Delete Task</button>               
            </div>
        );
        return (
            <div>
                {tasks}
            </div> 
        );
    }
}