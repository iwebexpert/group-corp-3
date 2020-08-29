import React, {useContext} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {OptionsModal} from '../../Options/OptionsModal';
import {ConfigContext} from '../../../App'

import './Header.scss'

export const Header: React.FC = () => {
    const {options, changeContextHandle} = useContext(ConfigContext);

    return (
        <Container className="header">
            <Row>
                <Col/>
                <Col>
                    Чат
                </Col>
                <Col className="text-right">
                    <OptionsModal options={options} changeContextHandle={changeContextHandle} />
                </Col>
            </Row>
        </Container>
    );
};
