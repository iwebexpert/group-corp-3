import React, {useContext} from 'react';
import {Header} from './Header';
import {Content} from './Content';
import {Footer} from './Footer';
import {Alert, Col, Container, Row} from "react-bootstrap";
import {ConfigContext} from "../../App";
import {themes} from "../../theme";

import './Layout.scss'
import {useSelector} from "react-redux";
import {AppState} from "../../reducers";
import {Loading} from "./Loading";


export const Layout: React.FC = () => {
    const {options} = useContext(ConfigContext);
    const curTheme = themes[options.chatTheme];

    const loading = useSelector((state: AppState) => (state.chats.loading));

    const error = useSelector((state: AppState) => (state.chats.errors));
    const errorDiv = error ? <Alert key={1} variant="danger">
        Возникла ошибка! Обновите страницу
    </Alert> : null;

    return (
        <Container fluid>
            <Row className="justify-content-sm-center">
                <Loading loading={loading} />
                <Col md={2}/>
                <Col>
                    <Row>
                        <Header/>
                    </Row>
                    <Row style={{backgroundColor: curTheme.background}}>
                        {errorDiv}
                        <Content />
                    </Row>
                    <Row>
                        <Footer/>
                    </Row>
                </Col>
                <Col md={2}/>
            </Row>
        </Container>
    );
};
