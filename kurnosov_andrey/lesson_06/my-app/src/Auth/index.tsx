import React from "react"

export type User = {
    id: string;
    name: string;
}

export type AuthContextValue = {
    user: User,
    change: (user: User) => void
};

export const AuthContext = React.createContext<AuthContextValue>({
    user: {
        id:'',
        name:'',
    },
    change(user: User) {}
});