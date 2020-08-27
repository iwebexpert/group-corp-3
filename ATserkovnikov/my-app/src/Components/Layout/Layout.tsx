import React from 'react';
import {Header} from '../Header';
import {Content} from '../Content';
import {Footer} from '../Footer';
import {Col, Container, Row} from "react-bootstrap";

import './Layout.scss'

export const Layout: React.FC = () => {
    return (
            <Container fluid>
                <Row className="justify-content-sm-center">
                    <Col lg={10} md={12}>
                        <Row>
                            <Header/>
                        </Row>
                        <Row>
                            <Content/>
                        </Row>
                        <Row>
                            <Footer/>
                        </Row>
                    </Col>
                </Row>
            </Container>
    );
};
