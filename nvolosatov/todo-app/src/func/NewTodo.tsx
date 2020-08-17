import React, { useState } from "react";

export function NewTodo(props: NewTodoProps) {
  const [title, setTitle] = useState<string>("");
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    setBtnDisabled(!event.target.value);
  };

  const onClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    create();
  };

  const onEnterPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      create();
    }
  };

  const create = (): void => {
    if (btnDisabled) {
      return;
    }

    const todo: TodoEntity = {
      title: title,
      comleted: false,
    };
    props.createdNewTodo(todo);
    
    setTitle("");
    setBtnDisabled(true);
  };

  return (
    <div className="new">
      <input onChange={onChange} value={title} onKeyDown={onEnterPress} />
      <button className="new__btn" onClick={onClick} disabled={btnDisabled}>
        Создать
      </button>
    </div>
  );
}
