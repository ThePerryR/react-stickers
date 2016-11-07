import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import Dashboard from './Dashboard';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
    </Route>
  </Router>
);
