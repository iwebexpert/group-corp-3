import React from 'react';
import './PageNotFound.scss'
import {Col, Container, Row} from "react-bootstrap";

export const PageNotFound: React.FC= () => {
    return (
        <Container>
            <Row>
                <Col>
                    Чат не найден
                </Col>
            </Row>
        </Container>
    );
};
