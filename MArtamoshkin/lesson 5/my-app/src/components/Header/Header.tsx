import React from "react";
import './Header.scss';
import { Badge, Navbar } from 'react-bootstrap';

const Header = () => {
    return (<Navbar className="w-100 pl-0">
        <Navbar.Brand href="/">
            <h2 className="panel-title">
                bot <Badge
                    className="badge-chat">chat</Badge>
            </h2>
        </Navbar.Brand>
    </Navbar>);
}

export { Header };
