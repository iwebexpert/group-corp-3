import React from 'React';
import './app.scss';

export class App extends React.Component {
    state = {
        test: 1
    }

    render() {
        return <>
            <h2>{this.state.test}</h2>
        </>
    }
}
