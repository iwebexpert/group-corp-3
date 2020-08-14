import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { NewTodo } from "./NewTodo";

export function Todo() {
  const [todos, setTodos] = useState<TodoEntity[]>([]);

  const onCreatedNewTodo = (todo: TodoEntity): void => {
    setTodos(todos.concat([todo]));
  };

  const onRemovedTodo = (todo: TodoEntity, index: number): void => {
    const copy = [...todos];
    copy.splice(index, 1);
    setTodos(copy);
  };

  const onUpdatedTodo = (todo: TodoEntity, index: number): void => {
    setTodos(todos.map((original, i) => (index === i ? {...original, ...todo} : original)));
  };

  return (
    <div className="todo">
      <div className="todo__list">
        {todos.length ? (
          <TodoList
            updatedTodo={onUpdatedTodo}
            removedTodo={onRemovedTodo}
            todos={todos}
          />
        ) : (
          <p className="todo__empty-message">Нет задач</p>
        )}
      </div>
      <div className="todo__new">
        <NewTodo createdNewTodo={onCreatedNewTodo} />
      </div>
    </div>
  );
}
