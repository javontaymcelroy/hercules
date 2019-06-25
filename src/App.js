import { Component } from 'react';
import { Route } from 'react-router-dom';

import React from 'react';
import './App.scss';

import MarketingSite from './components/MarketingSite';
import AboutPage from './components/About';
import MarketingNav from './components/MarketingNav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={MarketingSite} />
        <Route exact path='/about' component={MarketingNav} />
        <Route exact path='/about' component={AboutPage} />
      </div>
    );
  }
}

export default App;
