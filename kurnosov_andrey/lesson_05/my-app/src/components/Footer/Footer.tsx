import './Footer.scss'

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


export const Footer = () => {
    return <Navbar sticky="bottom" expand={false} className="border-top">
        <Container>
            <Nav className="layout-footer-usage">
                <small><a href="http://www.onlinewebfonts.com">oNline Web Fonts</a></small>
            </Nav>
            <span className="layout-footer-author"> (c) Курносов Андрей </span>
        </Container>
    </Navbar>
}
