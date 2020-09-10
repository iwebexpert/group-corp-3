import React from "react";

import './Footer.scss'
import {Col, Container, Row} from "react-bootstrap";

export const Footer: React.FC = () => {
    return (
        <Container className="footer" fluid>
            <Row>
                <Col>
                    Футер
                </Col>
            </Row>
        </Container>
    );
};
