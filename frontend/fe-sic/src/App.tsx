import React, { Fragment } from 'react';
import { Normalize } from 'styled-normalize';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <Fragment>
      <Normalize />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
