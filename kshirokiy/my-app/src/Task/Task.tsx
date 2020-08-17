import React from 'react';

export class Task extends React.Component<any, any> {
    public render() {
        const {name} = this.props;
        return (
            <React.Fragment>
                <li className={'task-item'}>
                    <input type="checkbox"/>
                    <span>{name}</span>
                    <span className={'close'}></span>
                </li>
            </React.Fragment>);
    }
}
