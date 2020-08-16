import React from 'react';
import {Task} from '../Task/Task';

class ToDoList extends React.Component<ToDoListProps, any> {
    public render() {

        const {tasks} = this.props;
        const tasksList = tasks.map((item, index) => {
            return <Task name={item.name} key={index}/>;
        })

        return (
            <React.Fragment>
                <div className={'tasks'}>
                    <p>
                        Задачи:
                    </p>
                    <ul>
                        {tasksList}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default ToDoList;
