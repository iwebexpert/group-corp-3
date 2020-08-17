import React from 'react';

export class ToDoListForm extends React.Component<ToDoListFormProps, ToDoListFormState> {
    public state: ToDoListFormState = {
        name: ''
    };

    private inputRef = React.createRef<HTMLInputElement>();

    protected handleInputChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const newState = {[event.target.name]: event.target.value} as Pick<ToDoListFormState, keyof ToDoListFormState>;
        this.setState(newState);
    };

    protected handleMessageSend = () => {
        const { handlerOnSend } = this.props;
        handlerOnSend(this.state);
        this.setState({name: ''});
    };

    public render(){
        const { name } = this.state;

        return (
            <>
                <div>
                    <br/>
                    <input ref={this.inputRef}
                           type="text"
                           name="name"
                           placeholder="Введите наименование таска"
                           onChange={this.handleInputChange}
                           value={name} />
                </div>
                <br/>
                <div>
                    <button onClick={this.handleMessageSend}>Создать таск</button>
                </div>
            </>
        );
    }
}
