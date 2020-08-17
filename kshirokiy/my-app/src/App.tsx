import React, {Component} from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import Messages from './Messages/Messages';
import ToDoList from './ToDoList/ToDoList';
import {ToDoListForm} from './ToDoListForm/ToDoListForm';


class App extends Component {
    state = {
        items: [],
        task: []
    }

    renderNewMessage() {
        const message = 'Нормально',
              items = [message, ...this.state.items]
        this.setState({items})
    }

    handlerTaskCreate(data: ToDoListFormState) {
        this.setState({task: [...this.state.task, data]});
    }

    render() {
        return (
            <div className="App" style={{textAlign: 'left'}}>
                <p>
                    <b>1.Lesson</b>
                </p>
                <Button onClick={this.renderNewMessage.bind(this)}>Click on button</Button>
                <br/>
                <Messages items={this.state.items}></Messages>

                <p>
                    <b>2.Lesson</b>
                </p>
                <ToDoList tasks={this.state.task}></ToDoList>
                <ToDoListForm handlerOnSend={this.handlerTaskCreate.bind(this)}></ToDoListForm>

            </div>
        );
    }
}

export default App;
