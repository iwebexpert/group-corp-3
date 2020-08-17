import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList(props: TodoListProps) {
  const onRemoved = (todo: TodoEntity, index: number): void => {
    props.removedTodo(todo, index);
  };

  const onUpdated = (updatedTodo: TodoEntity, index: number): void => {
    props.updatedTodo(updatedTodo, index);
  };

  const todos = props.todos.map((t, index) => (
    <li key={index}>
      <TodoItem
        todo={t}
        updatedTodo={(updated) => onUpdated(updated, index)}
        removedTodo={() => onRemoved(t, index)}
      />
    </li>
  ));
  return <ul className="todo-list">{todos}</ul>;
}
