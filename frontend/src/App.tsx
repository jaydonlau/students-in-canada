import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Normalize } from 'styled-normalize';

import HomePage from 'HomePage';
import LoginPage from 'LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <Normalize />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        /* make sure this is last route */
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
