import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../App';
import HomePage from '../containers/Pages/HomePage';
import GamesPage from '../containers/Pages/GamesPage';

export default (
    <Router history={ browserHistory }>
        <Route path="/" component={ App } >
            <IndexRoute component={ HomePage } />
            <Route path="games" component={ GamesPage } />
        </Route>
    </Router>
);