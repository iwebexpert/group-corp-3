import React from 'react';
import {TaskFormProps, TaskFormState} from './types'


export class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    public state: TaskFormState = {
        text: ""
    };

    protected handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newState = { text: event.target.value};
        this.setState(newState);
        console.log(newState);
    };

    protected handleCreate = () => {
        this.props.handlerOnCreate.call(this, {text: this.state.text, isDone: false});       
        this.setState({text: ''});
    };

    public render(){

        return (
        <>
            <div>
                <input type="text" name="task" placeholder="Введите задачу" onChange={this.handleInputChange} value={this.state.text} />
            </div>
            <div>
                <button onClick={this.handleCreate}>Save</button>
            </div>
        </>
        );
    }
}
