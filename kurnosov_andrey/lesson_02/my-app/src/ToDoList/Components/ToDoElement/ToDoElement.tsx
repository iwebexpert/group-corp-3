import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ToDo, ToDoStatus } from '../../Logic/ToDoService';
import { IconCheckbox } from '../../../Common/IconCheckbox/IconCheckbox';


type Props = {
    todo: ToDo;
    onChange: (x: ToDo) => void;
    onRemove: (x: ToDo) => void;
}

type State = {
    todo: ToDo,
    showContent: boolean,
}

export class ToDoElement extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            todo: props.todo,
            showContent: false
        };
    }

    private handleCheckedStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        const todo = {
            ...this.state.todo,
            status: event.target.checked ? ToDoStatus.COMPLETE : ToDoStatus.TODO
        };

        this.setState({ todo });
        this.props.onChange(todo);
    }

    private handleCheckedShowContent = (checked: boolean) => {
        this.setState({ showContent: checked });
    }

    private handleOnRemoveBtn = () => {
        this.props.onRemove(this.state.todo);
    }

    public render() {
        const isComplete = this.state.todo.status === ToDoStatus.COMPLETE;
        const contentShowChekboxId = 'show-todo-content-' + this.state.todo.id;

        const showIcon = <FontAwesomeIcon icon="angle-down" />
        const hideIcon = <FontAwesomeIcon icon="angle-up" />

        return <>
            <li className="todo-element">
                <div className="todo-element-header">
                    <label className="todo-element-header-line" htmlFor={contentShowChekboxId}>
                        {
                            this.state.todo.content && 
                            <IconCheckbox
                                id={contentShowChekboxId}
                                checked={this.state.showContent}
                                checkedIcon={hideIcon}
                                uncheckedIcon={showIcon}
                                onChange={this.handleCheckedShowContent}
                            />
                        }
                        <span className="todo-element-header-name">{this.state.todo.name}</span>

                    </label>

                    <input
                        type='checkbox'
                        checked={isComplete}
                        onChange={this.handleCheckedStatus}
                    />

                    {/* TODO: Кнопка удаления слишком близко к галочке */}
                    <button onClick={this.handleOnRemoveBtn}>
                        <FontAwesomeIcon icon="trash" />
                    </button>
                </div>
                {
                    this.state.showContent &&
                    <div className="todo-element-content">
                        {this.state.todo.content}
                    </div>
                }
            </li>
        </>
    }
}