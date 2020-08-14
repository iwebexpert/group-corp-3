import React from "react";
import { TodoItem } from "./TodoItem";

export class TodoList extends React.Component<TodoListProps> {
  public render() {
    const todos = this.props.todos.map((t, index) => (
      <li key={index}>
        <TodoItem
          todo={t}
          updatedTodo={(updated) => {
            this.onUpdated(updated, index);
          }}
          removedTodo={() => {
            this.onRemoved(t, index);
          }}
        />
      </li>
    ));

    return <ul className="todo-list">{todos}</ul>;
  }

  public onRemoved(todo: TodoEntity, index: number): void {
    this.props.removedTodo(todo, index);
  }

  public onUpdated(updatedTodo: TodoEntity, index: number) {
    this.props.updatedTodo(updatedTodo, index);
  }
}
