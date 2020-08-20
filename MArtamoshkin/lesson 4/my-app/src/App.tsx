import React from 'react';
import './App.css';

import { Chat } from './components/Layout/Chat/Chat';
import { AuthProvider } from './common/AuthProvider';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Chat/>
            </AuthProvider>
        </div>
    );
}

export default App;
