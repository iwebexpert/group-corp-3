import React, { useState } from 'react';
import './layout.css';
import { HeaderComponent } from './components/HeaderComponent';
import { ChatListComponent } from './components/ChatListComponent';
import { ChatComponent } from './components/ChatComponent';
import {Container, Row, Col, Spinner} from 'react-bootstrap';
 
 function LayoutComponent(){

     return (
     <>
        <HeaderComponent />
        <Container>
            <Row>
                <Col md={4}> <ChatListComponent/></Col>
                <Col md={8}><ChatComponent/></Col>
            </Row>
        </Container>
     </>
     );
 };
 export { LayoutComponent };