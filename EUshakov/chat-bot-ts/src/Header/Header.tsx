import React, { useState } from 'react';
import { Row, Col, Button, Navbar, Form, FormControl, Modal } from 'react-bootstrap';
import { AppSettings } from '../AppSettings/AppSettings';

export type HeaderProps = {
    isLoggedin: boolean,
    userName: string,
    login: (userName: string) => void,
    logout: () => void
};
export const Header: React.FC<HeaderProps> = ({ isLoggedin, userName, login, logout }) => {
    const [userNameForm, setUserNameForm] = useState('');

    const loginStatus = <>
        <Navbar.Text className="mx-3"> {isLoggedin
            ? <>Signed in as: <a href="#login">{userName}</a></>
            : <>Please log in!</>}
        </Navbar.Text>
        <Form inline>
            <AppSettings login={login} logout={logout} />
        </Form>

    </>
    return <Navbar expand="md">
        <Navbar.Brand>
            AutoBot Chat
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            {loginStatus}
        </Navbar.Collapse>
    </Navbar >
}