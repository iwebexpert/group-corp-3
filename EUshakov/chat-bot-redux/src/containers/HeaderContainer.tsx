import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin, authLogout } from '../actions/auth';
import { Header } from '../Header/Header';
import { AppState } from '../reducers';

export const HeaderContainer: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const auth = useSelector((state: AppState) => state.auth);

    const handleLogin = (userName: string) => dispatch(authLogin(userName));
    const handleLogout = () => dispatch(authLogout());

    return <Header userName={auth.userName} isLoggedin={auth.isLoggedIn} login={handleLogin} logout={handleLogout} />
}