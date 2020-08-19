import React from 'react';
import { TodoForm } from './todo-form/todo-form';
import { TaskItem } from './task-item/task-item';
export type TodoListProps = {
    initialItems: string[];
};
export type TodoListState = {
    todoItems: TodoItem[];
};
export type TodoItem = {
    id: number;
    name: string;
    isCompleted: boolean;
}

export class TodoList extends React.Component<TodoListProps, TodoListState> {
    public state: TodoListState = {
        todoItems: this.props.initialItems.map((name, idx) => ({ id: idx, name: name, isCompleted: false }))
    };
    addTodoItem = (newItemName: string) => {
        const newItem: TodoItem = {
            name: newItemName,
            isCompleted: false,
            id: this.state.todoItems.reduce((prev, current) => current.id > prev ? current.id : prev, 0) + 1
        };
        this.setState({ todoItems: [...this.state.todoItems, newItem] });
    }

    taskCompleted = (taskId: number, completion: boolean) => {
        let completedTask = this.state.todoItems.find(item => item.id === taskId);
        if (!completedTask) {
            return;
        }
        let changedTask = { ...completedTask, isCompleted: completion };
        let newItems = this.state.todoItems.filter(item => item.id !== taskId);
        this.setState({ todoItems: completion ? [...newItems, changedTask] : [changedTask, ...newItems] });
    }

    deleteItem = (itemId: number) => {
        this.setState({ todoItems: this.state.todoItems.filter(item => item.id != itemId) });
    }

    render() {
        return <div>
            {this.state.todoItems.map(todoItem => <TaskItem
                key={todoItem.id}
                isCompleted={todoItem.isCompleted}
                name={todoItem.name}
                completionChanged={(completion) => this.taskCompleted(todoItem.id, completion)}
                deleteRequested={() => this.deleteItem(todoItem.id)} />
            )}
            <TodoForm onAddItem={this.addTodoItem} />
        </div>
    }


}