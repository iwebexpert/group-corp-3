import React, {useContext} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {OptionsModal} from '../../Options/OptionsModal';
import {ConfigContext} from '../../../App'
import logo from '../../../../Images/images.jpg';

import './Header.scss'

export const Header: React.FC = () => {
    const {options, changeContextHandle} = useContext(ConfigContext);

    return (
        <Container className="header" fluid>
            <Row>
                <Col>
                    <Image src={logo} roundedCircle style={{height: "40px"}} />
                </Col>
                <Col>
                    {process.env.APP_TITLE}
                    {process.env.TEST}
                </Col>
                <Col className="text-right">
                    <OptionsModal options={options} changeContextHandle={changeContextHandle} />
                </Col>
            </Row>
        </Container>
    );
};
