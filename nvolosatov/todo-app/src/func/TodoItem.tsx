import React from "react";

export function TodoItem(props: TodoItemProps) {
  const onCompletedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const updated = { ...props.todo };
    updated.comleted = event.target.checked;
    props.updatedTodo(updated);
  };

  const onRemoveClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    props.removedTodo();
  };

  const classes = ["todo-item__text"];
  if (props.todo.comleted) {
    classes.push("todo-item__text_comleted");
  }

  return (
    <div className="todo-item">
      <input
        className="todo-item__completed"
        type="checkbox"
        checked={props.todo.comleted}
        onChange={onCompletedChange}
      />
      <span className={classes.join(" ")}>{props.todo.title}</span>
      <button onClick={onRemoveClick}>X</button>
    </div>
  );
}
