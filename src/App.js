import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Shop from './Shop.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={Shop}/>
        
      </div>
    );
  }
}

export default App;
