import React, { Component } from 'react';
import Snowflakes from "magic-snowflakes";
import Picker from './components/Picker';
import { names, getRandomName } from './constants/Names';

import './App.css';

class App extends Component {

  componentDidMount(){
    Snowflakes();
  }

  render() {
    return (
      <div className="App">
        <Picker names={names} currentPlayer={getRandomName(names)}></Picker>
      </div>
    );
  }
}

export default App;
