import React, { useState } from 'react';
import { TaskGeneratorComponent } from './components/TaskGeneratorComponent';
import { TaskListComponent } from './components/TaskListComponent';
import { SimpleTask, TodoListState } from '../shared/types';

function Lesson1Component(){
    const [tasks, setTasks] = useState<SimpleTask[]>([]);
    const handleTaskCreate = (task: SimpleTask) => {
        setTasks([...tasks,task]);
    };

    const handleChangeTaskList = (changedTasks: SimpleTask[]) => {
        setTasks([...changedTasks]);
    }; 

    return (
    <>
        <TaskListComponent tasks={tasks} onChangeTaskList={handleChangeTaskList}/>
        <TaskGeneratorComponent onCreateTask={handleTaskCreate}/>
    </>
    );
};

export { Lesson1Component };