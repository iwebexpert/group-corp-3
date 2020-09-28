import React from 'react';
import { UserProvider } from '../contexts/UserContext';

const AuthProvider: React.FC = ({ children }) => {
    const stubUser: User = {
        id: 0,
        avatar: 'https://html5css.ru/w3images/avatar1.png', 
        name: 'John Doe'
      };
    
      return (<UserProvider value={stubUser}>{children}</UserProvider>);
};

export { AuthProvider };