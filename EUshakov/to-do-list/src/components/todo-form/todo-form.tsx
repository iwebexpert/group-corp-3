import React from 'react';
import './todo-form.css';

export type TodoFormProps = {
    onAddItem: (todoItem: string) => void
};
export type TodoFormState = {
    newItemName: string
};

export class TodoForm extends React.Component<TodoFormProps, TodoFormState>{
    public state: TodoFormState = {
        newItemName: ''
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ newItemName: event.target.value });
    }

    addItem = () => {
        this.props.onAddItem(this.state.newItemName);
        this.setState({ newItemName: '' });
    }

    render() {
        return (<div className="todo-form">
            <input type="text"
                value={this.state.newItemName}
                onChange={this.handleChange}
                placeholder="Input task here" />
            <button onClick={this.addItem} disabled={this.state.newItemName.length < 1}>Create</button>
        </div>);
    }
}