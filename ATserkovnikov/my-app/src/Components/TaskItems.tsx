import React from "react";
import {TaskItem} from "./TaskItem";

export class TasksItems extends React.Component<TaskItemsProps>{
    static defaultProps: TaskItemsProps = {
        Tasks: [],
        DeleteHandler: () => void {}
    };

    public render(): React.ReactElement {

        const { Tasks } = this.props;

        const tasksItems = Tasks
            .map((item, index) =>
                <TaskItem
                    TaskItem={item}
                    DeleteHandler={this.props.DeleteHandler}
                    key={index}
                />);

        return (<>{tasksItems}</>);
    }
}
