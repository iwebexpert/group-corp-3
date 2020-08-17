import React from "react";
import {ConfigContextConsumer} from "../App";

export class TaskForm extends React.Component<TaskFormProps, TaskFormState>{
    public state: TaskFormState = {
        TaskText: ""
    };

    protected handlerInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newState = {[event.target.name]: event.target.value} as Pick<TaskFormState, keyof TaskFormState>;
        this.setState(newState);
    };

    protected handleTaskSend = () => {
        this.props.AddHandler(this.state);
        this.setState({ TaskText: ""});
    };

    public render(): React.ReactElement {
        return (
            <>
            <ConfigContextConsumer>
                {
                    globalOptions => globalOptions && (
                        <>
                            <textarea name="TaskText" placeholder={globalOptions.lang === 'ru'? "Введите задание" : "Set task" } value={this.state.TaskText} onChange={this.handlerInputChange}/>
                            <button onClick={this.handleTaskSend} disabled={this.state.TaskText === ""}>
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
