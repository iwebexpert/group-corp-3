import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    useLocation,
    Link
} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const routes = [
        {
            path: "/lesson01",
            title: "Lesson #1",
            content: lazy(() => import('./components/lesson-1/MessagesList'))
        },
        {
            path: "/lesson02",
            title: "Lesson #2",
            content: lazy(() => import('./components/lesson-2/Lesson2'))
        },
        {
            path: "/lesson03",
            title: "Lesson #3",
            content: lazy(() => import('./components/lesson-3/Lesson3'))
        },
        {
            path: "/lesson04",
            title: "Lesson #4",
            content: lazy(() => import('./components/lesson-4/Lesson4'))
        },
        {
            path: "/lesson05",
            title: "Lesson #5",
            content: lazy(() => import('./components/lesson-5/Lesson5'))
        },
        {
            path: "/lesson06",
            title: "Lesson #6",
            content: lazy(() => import('./components/lesson-6/Lesson6'))
        },
        {
            path: "/lesson07",
            title: "Lesson #7",
            content: lazy(() => import('./components/lesson-7/Lesson7'))
        },
        {
            path: "/lesson07/:id",
            title: "Lesson #7",
            hidden: true,
            notExact: true,
            content: lazy(() => import('./components/lesson-7/Lesson7'))
        }
    ];

    const NoMatch = () => {
        let location = useLocation();

        return (
            <div>
                <h3>
                    No match for <code>{location.pathname}</code>
                </h3>
            </div>
        );
    }

    return (
        <Router>
            <Row>
                <Col md={2} className='text-center'>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {
                            routes.map(route => (!route.hidden) ? <li key={route.path}>
                                    <Link to={route.path}>{route.title}</Link>
                                </li> : false)
                        }
                    </ul>
                </Col>

                <Col md={10}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/lesson07" /> }
                        />
                        <Suspense fallback={<>azaza</>}>
                        {
                            routes.map(route =>
                                    <Route key={route.path} exact={!route.notExact}
                                           path={route.path} component={route.content} />
                           )
                        }
                        </Suspense>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Router>
    );
}

export default App;
