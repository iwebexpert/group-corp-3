import React from "react";

export class NewTodo extends React.Component<NewTodoProps, NewTodoState> {
  constructor(props: NewTodoProps) {
    super(props);
    this.state = {
      title: "",
      btnDisabled: true,
    };
  }

  public render() {
    return (
      <div className="new">
        <input
          onChange={(e) => this.onChange(e)}
          value={this.state.title}
          onKeyDown={(e) => this.onEnterPress(e)}
        />
        <button
          className="new__btn"
          onClick={(e) => this.onClick(e)}
          disabled={this.state.btnDisabled}
        >
          Создать
        </button>
      </div>
    );
  }

  private onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      title: event.target.value,
      btnDisabled: !event.target.value,
    });
  }

  private onClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    this.create();
  }

  private onEnterPress(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === "Enter") {
      this.create();
    }
  }

  private create(): void {
    if (this.state.btnDisabled) {
      return;
    }

    const todo: TodoEntity = {
      title: this.state.title,
      comleted: false,
    };
    this.props.createdNewTodo(todo);
    this.setState({ title: "", btnDisabled: true });
  }
}
