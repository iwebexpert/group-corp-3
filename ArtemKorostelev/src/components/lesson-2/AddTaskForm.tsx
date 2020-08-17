import React, {PureComponent} from 'react';

export default class AddTaskForm extends PureComponent<AddTaskFormProps> {

    public state = {
        value: '',
    }

    public addNewItem = () => {
        if (this.state.value) {
            this.props.addItem(this.state.value);
            this.setState({value: ''})
        }
    };

    public render() {
        const { value } = this.state;
        return (
            <form>
                <div>Add new task to your TODO-list</div>

                <div className="input-group mb-3">
                    <input type="text" className={'form-control'} value={value}
                           onChange={(event) => this.setState({value: event.target.value})}
                    />
                    <div className="input-group-append">
                        <button type="submit" onClick={this.addNewItem} disabled={!value}
                                className={'btn btn-outline-primary'}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
