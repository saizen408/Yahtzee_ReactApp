import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import Game from './Game';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <div className="App">
            <Game />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
