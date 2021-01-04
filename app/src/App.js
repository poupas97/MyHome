import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Routes from './pages/constants';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        {Object.entries(Routes).map(([, value]) =>
          <Route key={value.path} exact path={value.path} component={value.component} />)}
        <Route key='/not-found' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
