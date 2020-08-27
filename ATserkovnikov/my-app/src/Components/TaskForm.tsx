import React from "react";
import {ConfigContextConsumer} from "../App";

export class TaskForm extends React.Component<TaskFormProps, TaskFormState>{
    public state: TaskFormState = {
        taskText: ""
    };

    protected handlerInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newState = {[event.target.name]: event.target.value} as Pick<TaskFormState, keyof TaskFormState>;
        this.setState(newState);
    };

    protected handleTaskSend = () => {
        this.props.addHandler(this.state);
        this.setState({ taskText: ""});
    };

    public render(): React.ReactElement {
        return (
            <>
            <ConfigContextConsumer>
                {
                    globalOptions => globalOptions && (
                        <>
                            <textarea name="TaskText" placeholder={globalOptions.lang === 'ru'? "Введите задание" : "Set task" } value={this.state.taskText} onChange={this.handlerInputChange}/>
                            <button onClick={this.handleTaskSend} disabled={this.state.taskText === ""}>
                                {globalOptions.lang === 'ru'? "Сохранить" : "Save" }
                            </button>
                        </>
                    )
                }
            </ConfigContextConsumer>
            </>
        );
    }
}
