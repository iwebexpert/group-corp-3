import React from "react";
import {ConfigContextConsumer} from "../App";
import {LangEnum} from "../Models/Enums";

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
                            <textarea name="TaskText" placeholder={globalOptions.options.lang === LangEnum.rus ? "Введите задание" : "Set task" } value={this.state.taskText} onChange={this.handlerInputChange}/>
                            <button onClick={this.handleTaskSend} disabled={this.state.taskText === ""}>
                                {globalOptions.options.lang === LangEnum.rus? "Сохранить" : "Save" }
                            </button>
                        </>
                    )
                }
            </ConfigContextConsumer>
            </>
        );
    }
}
