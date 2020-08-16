import React, { Component } from 'react';

class TodoCreate extends Component<TodoCreateProps, TodoCreateState> {
    public state: TodoCreateState = {
        value: ''
    }

    protected handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({
            value: e.target.value
        });
    };

    protected onSubmitHandler(e: any): void {
        e.preventDefault();

        this.setState({ value: '' });
        this.props.onSubmit(this.state.value);
    }

    public render() {
        return (<div className="card card-body my-3">
            <form onSubmit={this.onSubmitHandler.bind(this)}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Введите текст задачи"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <div className="input-group-append">
                        <button type="submit" disabled={!this.state.value.trim()} className="btn btn-outline-secondary">Добавить</button>
                    </div>
                </div>
            </form>
        </div>);
    }
}

export { TodoCreate };