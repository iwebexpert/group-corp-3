import React from 'react';
import { TaskGeneratorProps, TaskGeneratorState, SimpleTask } from '../../shared/types';

export class TaskGeneratorComponent extends React.Component<TaskGeneratorProps, TaskGeneratorState>{
    public state: TaskGeneratorState = {
        taskBody: ''
    }

    private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const newState: TaskGeneratorState = { taskBody : event.target.value};
      this.setState(newState);
    }

    private createTask = (): void => {
        const task: SimpleTask= { body: this.state.taskBody, isCompleted : false };
        this.props.onCreateTask?.call(this, task);
        this.setState({ taskBody : ''});
    }
    
    public render(){ 
        return (
            <div className="form-inline">
                <input type="text" 
                    className="form-control w-50"  
                    placeholder="TaskBody"  
                    onChange={this.handleInputChange} 
                    value={this.state.taskBody}
                    ></input>
                <button className="btn btn-primary ml-1" onClick={this.createTask} disabled={this.state.taskBody?.length < 1}>Create Task</button>
            </div>
        );
    }
}