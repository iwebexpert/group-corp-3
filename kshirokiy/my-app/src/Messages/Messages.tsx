import React from 'react';

class Messages extends React.Component<any, any> {

    renderMessages(items: any) {
        return items.map((item: string, index: number) => <li key={index}>{item}</li>);
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.renderMessages(this.props.items)}
                </ul>
            </React.Fragment>
        )
    }
}

export default Messages;
