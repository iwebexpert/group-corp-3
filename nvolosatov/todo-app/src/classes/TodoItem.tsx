import React from "react";

export class TodoItem extends React.Component<TodoItemProps> {
  public render() {
    const classes = ["todo-item__text"];
    if (this.props.todo.comleted) {
      classes.push("todo-item__text_comleted");
    }

    return (
      <div className="todo-item">
        <input
          className="todo-item__completed"
          type="checkbox"
          checked={this.props.todo.comleted}
          onChange={(e) => {
            this.onCompletedChange(e);
          }}
        />
        <span className={classes.join(" ")}>{this.props.todo.title}</span>
        <button onClick={(e) => this.onRemoveClick(e)}>
          X
        </button>
      </div>
    );
  }

  private onCompletedChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const updated = { ...this.props.todo };
    updated.comleted = event.target.checked;
    this.props.updatedTodo(updated);
  }

  private onRemoveClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    this.props.removedTodo();
  }
}
