import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import App from './App';
import Qoutes from './Qoutes';

const Routes = () => (
  <Router>
    <div className="nav">
      <Link to="/">
        <h2>Maths-Up</h2>
      </Link>
      <ul>
        <Link to="/qoutes">
          <li>Qoutes</li>
        </Link>
        <Link to="/calculator">
          <li>Calculator</li>
        </Link>
      </ul>
    </div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/qoutes" component={Qoutes} />
      <Route exact path="/calculator" component={App} />
    </Switch>
  </Router>
);

export default Routes;
