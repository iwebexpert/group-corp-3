import React from "react";
import { NewTodo } from "./NewTodo";
import { TodoList } from "./TodoList";

interface TodoState {
  todos: TodoEntity[];
}

export class Todo extends React.Component<{}, TodoState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  public render() {
    return (
      <div className="todo">
        <div className="todo__list">
          {this.state.todos.length ? (
            <TodoList
              updatedTodo={(todo, index) => this.onUpdatedTodo(todo, index)}
              removedTodo={(todo, index) => this.onRemovedTodo(todo, index)}
              todos={this.state.todos}
            />
          ) : (
            <p className="todo__empty-message">Нет задач</p>
          )}
        </div>
        <div className="todo__new">
          <NewTodo
            createdNewTodo={(newTodo) => this.onCreatedNewTodo(newTodo)}
          />
        </div>
      </div>
    );
  }

  private onCreatedNewTodo(todo: TodoEntity): void {
    this.setState({
      todos: this.state.todos.concat([todo]),
    });
  }

  private onRemovedTodo(todo: TodoEntity, index: number): void {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos: todos,
    });
  }

  private onUpdatedTodo(todo: TodoEntity, index: number): void {
    this.setState({
      todos: this.state.todos.map((original, i) => (index === i ? {...original, ...todo} : original))
    });
  }
}
