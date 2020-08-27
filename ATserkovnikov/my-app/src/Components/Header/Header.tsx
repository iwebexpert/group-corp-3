import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import './Header.scss'

export const Header: React.FC = () => {
    return (
        <Container className="header">
            <Row>
                <Col>
                    Чат
                </Col>
            </Row>
        </Container>
    );
};
