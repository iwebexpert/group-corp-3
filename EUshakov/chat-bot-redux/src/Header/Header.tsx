import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppSettings } from '../AppSettings/AppSettings';

export type HeaderProps = {
    isLoggedin: boolean,
    userName: string,
    login: (userName: string) => void,
    logout: () => void
};
export const Header: React.FC<HeaderProps> = ({ isLoggedin, userName, login, logout }) => {
    const loginStatus = <>
        <Navbar.Text className="mx-3"> {isLoggedin
            ? <>Signed in as: <a href="#login">{userName}</a></>
            : <>Please log in!</>}
        </Navbar.Text>
        <AppSettings login={login} logout={logout} />
    </>
    return <Navbar expand="md">
        <Navbar.Brand >
            AutoBot Chat
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {loginStatus}
        </Navbar.Collapse>
    </Navbar >
}