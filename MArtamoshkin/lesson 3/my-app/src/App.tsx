import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Chat } from './Chat/Chat';
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
