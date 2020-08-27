import React from "react";
import './Header.scss';
import { Badge, Navbar, Nav } from 'react-bootstrap';
import { Settings } from "../Settings";

const Header = () => {
    return (<Navbar className="w-100 px-0 justify-content-between">
        <Navbar.Brand href="/">
            <h2 className="panel-title">
                bot <Badge
                    className="badge-chat">chat</Badge>
            </h2>
        </Navbar.Brand>
        <Nav.Item><Settings /></Nav.Item>
    </Navbar>);
}

export { Header };
