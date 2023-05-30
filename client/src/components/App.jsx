// C:\Users\josep\OneDrive\Desktop\lpt-cra\server\client\src\components\App.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Prices from './Prices';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const routes = (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
    );
  
    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default connect(null, actions)(App);