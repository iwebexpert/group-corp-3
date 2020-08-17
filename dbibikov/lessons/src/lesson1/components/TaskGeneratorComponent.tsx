import React, {useState} from 'react';
import { TaskGeneratorProps, SimpleTask } from '../../shared/types';

function TaskGeneratorComponent ({ onCreateTask} :TaskGeneratorProps){
    const [taskBody, setTaskBody] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setTaskBody(event.target.value);
    };

    const createTask = (): void => {
        if(onCreateTask){
            const task: SimpleTask= { body: taskBody, isCompleted : false };
            onCreateTask(task);
            setTaskBody('');
        }
    };

    return (
        <div className="form-inline">
            <input type="text" 
                className="form-control w-50"  
                placeholder="TaskBody"  
                onChange={handleInputChange} 
                value={taskBody}
                ></input>
            <button className="btn btn-primary ml-1" onClick={createTask} disabled={taskBody?.length < 1}>Create Task</button>
        </div>
      );
    
};

export {TaskGeneratorComponent };