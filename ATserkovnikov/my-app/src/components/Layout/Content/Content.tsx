import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Route, Switch, Redirect} from "react-router-dom";
import ChatContentContainer from "../../../containers/ChatContentContainer";
import {PageNotFound} from "../../PageNotFound";
import ChatList from "../../ChatList/ChatList";

import './Content.scss'

export const Content: React.FC = () => {
    return (
        <Container>
             <Row>
                 <Col md={4} className="p-0">
                     <Route path="/chat/:id" component={ChatList} />
                 </Col>
                 <Col md={8} className="p-0">
                     <Switch>
                         <Route path="/" exact>
                             <Redirect to="/chat/0" />
                         </Route>
                         <Route path="/chat/:id" component={ChatContentContainer} />
                         <Route path="*" component={PageNotFound}/>
                     </Switch>
                 </Col>
             </Row>
         </Container>
    );
};
