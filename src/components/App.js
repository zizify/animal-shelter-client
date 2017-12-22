import React, { Component } from 'react';
import Dashboard from './Dashboard';
import {cats, dogs} from '../animal-data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard catToAdopt={cats[0]} dogToAdopt={dogs[0]}/>
      </div>
    );
  }
}

export default App;
