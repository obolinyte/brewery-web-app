import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Shop from './Shop.js';

import MyOrders from './MyOrders.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={Shop}/>
      <Route exact path="/MyOrders" component={MyOrders}/>
      {/* <Route path="/" component={Header}/>   */}
      </div>
    );
  }
}

export default App;
