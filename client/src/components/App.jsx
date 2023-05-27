// C:\Users\josep\OneDrive\Desktop\lpt-wp\server\client\src\components\App.jsx
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Navigation from './Navigation';
import Landing from './Landing';
import Prices from './Prices';

// const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
  componentDidMount() { // Once component is visible, will be used to fetch current user. 
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Navigation className="box" />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/prices" element={<Prices />} />
           
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App)