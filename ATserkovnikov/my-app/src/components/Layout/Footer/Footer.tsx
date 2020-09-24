import React from "react";

import './Footer.scss'
import {Col, Container, Row} from "react-bootstrap";

export const Footer: React.FC = () => {
    return (
        <Container className="footer" fluid>
            <Row>
                <Col>
                    {process.env.REACT_APP_NAME}&nbsp;{process.env.REACT_APP_VERSION}
                </Col>
            </Row>
        </Container>
    );
};
