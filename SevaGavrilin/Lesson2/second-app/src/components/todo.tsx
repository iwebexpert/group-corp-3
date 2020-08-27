import React, { useRef } from 'react';


class Todo extends React.Component<TodoFormProps, TodoFormState> {

    public state: TodoFormState = {
        text: ''
    };

    protected handleChangeDone = () => {
        const { handlerOnAdd } = this.props;
        handlerOnAdd(this.state);
        this.setState({text: ''})
    };

    protected handleInputChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const newState = {[event.target.name]: event.target.value} as Pick<TodoFormState, keyof TodoFormState>
        this.setState(newState);
    }

    public render() {
        var { text } = this.state;

        return (
            <>
             <input type = "text" name = "text" value={text} onChange = {this.handleInputChange}/>
             <button onClick={this.handleChangeDone}>
                add
             </button>
            </>
        );
      }
    }
  

export { Todo };