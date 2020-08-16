import React, {PureComponent} from "react";
import ToDo from "./ToDo";
import AddTaskForm from "./AddTaskForm";

export default class Lesson2 extends PureComponent<any, Lesson2State> {

    public state = {
        tasks: []
    }

    public addItem(text: string): void {
        this.setState((): Lesson2State => {
            const task: TaskItemProps = {
                id: Date.now().toString(),
                text,
                checked: false,
                removeTask: this.removeTask,
                switchTaskState: this.switchTaskState
            };
            return { tasks: [...this.state.tasks, task] };
        });
    }

    public removeTask = (id: string): void => {
        this.setState((state): Lesson2State => {
            const tasks= state.tasks.filter((task) => task.id !== id);
            return { tasks };
        });
    };

    public switchTaskState = (id: string, curState: boolean) => {
            this.setState((state: Lesson2State): Lesson2State => {
                const tasks = [...state.tasks].map((task: any) => {
                    if (task.id === id) {
                        task.checked = !curState;
                    }
                    return task;
                });
                return { tasks };
            });
    };

    public render() {
        const { tasks } = this.state;
        return (<>
            <h3>TODO-list</h3>
            <ToDo tasks={tasks} />
            <AddTaskForm addItem={(event) => this.addItem(event)}/>
        </>)
    }
}
