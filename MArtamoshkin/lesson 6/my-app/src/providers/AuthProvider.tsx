import React from 'react';
import { UserProvider } from '../contexts/UserContext';

const AuthProvider: React.FC = ({ children }) => {
    const stubUser: User = {
        id: 1,
        avatar: 'https://html5css.ru/w3images/avatar3.png', 
        name: 'John Doe'
      }
    
      return (<UserProvider value={stubUser}>{children}</UserProvider>);
}

export { AuthProvider };