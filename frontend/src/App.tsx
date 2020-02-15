import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Normalize } from 'styled-normalize';
import GlobalStyles from './styles/global';

import HomePage from 'containers/HomePage';
import LoginPage from 'containers/LoginPage';

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
      <GlobalStyles />
    </Router>
  );
}

export default App;
