import './Layout.scss'

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

type Props = {
    header: JSX.Element;
    body: JSX.Element;
    footer: JSX.Element;
}

export const Layout = (props: Props) => {
    return ( <div className="layout-container">
        {props.header}
        <Container fluid="md" className="layout-body mt-3 mb-2">
            {props.body}
        </Container>
        {props.footer}
   </div>);
}