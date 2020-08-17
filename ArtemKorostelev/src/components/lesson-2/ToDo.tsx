import React, { Component } from 'react';
import TaskItem from './TaskItem';

export default class ToDo extends Component<TodoProps> {

    render() {
        const { tasks } = this.props;
        return (
            <div>
                {tasks.map((task: TaskItemProps) =>
                    <TaskItem
                        key={task.id}
                        text={task.text}
                        id={task.id}
                        removeTask={task.removeTask}
                        switchTaskState={task.switchTaskState}
                        checked={task.checked}
                    />
                )}
            </div>
        );
    }
}
