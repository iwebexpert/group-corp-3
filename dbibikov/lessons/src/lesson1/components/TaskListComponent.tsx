import React from 'react';
import { TaskListProps, SimpleTask } from '../../shared/types';

function TaskListComponent({ tasks = [], onChangeTaskList }: TaskListProps) {

    const deleteTask = (id: number): void => {
        if(onChangeTaskList){
            tasks.splice(id, 1);     
            onChangeTaskList(tasks);
        }    
    };

    const toggleCheck = (item: SimpleTask): void => {
        if(onChangeTaskList){
            item.isCompleted = !item.isCompleted;
            onChangeTaskList(tasks)
        }       
    };

    const content = tasks.map((item: SimpleTask, index) => 
        <div className="card task-card" key={ index }>             
            <label className="task-body"> 
            <input type="checkbox" onChange={()=> toggleCheck(item)} checked={item.isCompleted}></input> 
                <span>{item.body} </span>
            </label>
            <button type="button" className="btn btn-outline-danger" onClick={ ()=> deleteTask(index)}>Delete Task</button>               
        </div>
    );
        return (
            <div>
                {content}
            </div> 
        );
    
};

export { TaskListComponent };