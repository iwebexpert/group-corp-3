import React from 'react';
import ReactDom from 'react-dom';
const el = React.createElement('h1', {id: 'App'}, 'Test');

import {App} from 'components/App';

ReactDom.render(<div>112<App></App></div>, document.getElementById('root'));
