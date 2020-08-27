import React from "react";
import {TaskItem} from "./TaskItem";

export class TasksItems extends React.Component<TaskItemsProps>{
    static defaultProps: TaskItemsProps = {
        tasks: [],
        deleteHandler: () => void {}
    };

    public render(): React.ReactElement {

        const { tasks } = this.props;

        const tasksItems = tasks
            .map((item, index) =>
                <TaskItem
                    taskItem={item}
                    deleteHandler={this.props.deleteHandler}
                    key={index}
                />);

        return (<>{tasksItems}</>);
    }
}
