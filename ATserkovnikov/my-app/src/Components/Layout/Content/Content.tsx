import React from 'react';
import {ChatList} from '../../ChatList';
import {Col, Container, Row} from "react-bootstrap";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {ChatContent} from "../../ChatContent";

import './Content.scss'
import {PageNotFound} from "../../PageNotFound";

export const Content: React.FC = () => {
    return (
        <BrowserRouter>
            <Container>
                 <Row>
                     <Col md={4} className="p-0">
                         <ChatList/>
                     </Col>
                     <Col md={8} className="p-0">
                         <Switch>
                             <Route path="/" exact>
                                 <Redirect to="/chat/0" />
                             </Route>
                             <Route path="/chat/:id" component={ChatContent} />
                             <Route path="*" component={PageNotFound}/>
                         </Switch>
                     </Col>
                 </Row>
             </Container>
        </BrowserRouter>
    );
};
