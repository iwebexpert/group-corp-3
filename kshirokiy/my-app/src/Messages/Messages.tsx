import React from 'react';

class Messages extends React.Component<any, any> {
    public state: any = {
        greeting: null
    };

    renderMessages(items: any) {
        return items.map((item: string | Item, index: number) => {
            if (typeof item === 'string') {
                return <li key={index}>{item}</li>
            } else {
                return <li key={index}>
                    Автор: {item.author} <br/>
                    Сообщение: {item.message} <br/>
                </li>
            }
        });
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        if (this.props.items.length && (this.props.items.length !== prevProps.items.length)) {
            this.setState({
                greeting: `Приветствую, ${this.props.items[this.props.items.length - 1].author}!`
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.state.greeting}
                </div>
                <ol>
                    {this.renderMessages(this.props.items)}
                </ol>
            </React.Fragment>
        )
    }
}

export default Messages;
