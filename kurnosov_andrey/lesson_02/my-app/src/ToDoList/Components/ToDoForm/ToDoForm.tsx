import React from "react";

import { ToDo, UnSavedToDo, ToDoStatus } from "../../Logic/ToDoService";
import { LangContext, Langs, LangText, LangString } from "../../../Langs";



type Props = {
    onSubmit: (x: UnSavedToDo) => void
}
type State = UnSavedToDo;

export class ToDoForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = this.createEmpty();
    }

    private createEmpty(): UnSavedToDo {
        return {
            content: '',
            name: '',
            status: ToDoStatus.TODO
        };
    }

    protected handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newState = { [event.target.name]: event.target.value } as Pick<ToDo, 'name' | 'content'>;
        this.setState(newState);
    };

    private handleSubmit = () => {
        this.props.onSubmit(this.state);
        this.clear();
    }

    private clear = () => {
        this.setState(this.createEmpty());
    }


    public render() {
        const namePlaceholder: LangString = {
            [Langs.RU]: 'Введите название',
            [Langs.EN]: 'Print task',
        }
        const contentPlaceholder: LangString = {
            [Langs.RU]: 'Введите краткое описание',
            [Langs.EN]: 'Print description'
        }
        const saveText = {
            [Langs.RU]: 'Сохранить',
            [Langs.EN]: 'Save'
        };
        return (
            <LangContext.Consumer>
                {lang => <div className="todo-form">
                    <div className="todo-form-name">
                        <input
                            type="text"
                            name="name"
                            placeholder={lang.translate(namePlaceholder)}
                            onChange={this.handleInputChange} value={this.state.name} />
                    </div>
                    <div className="todo-form-content">
                        <textarea
                            name="content"
                            placeholder={lang.translate(contentPlaceholder)}
                            onChange={this.handleInputChange}
                            value={this.state.content} />
                    </div>
                    <div className="todo-form-save-button">
                        <button onClick={this.handleSubmit} disabled={!this.state.name}>
                            <LangText text={saveText} />
                        </button>
                    </div>
                </div>}
            </LangContext.Consumer>);
    }
}