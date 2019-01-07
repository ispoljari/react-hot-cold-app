import React, { Component } from 'react';
import Banner from './components/Banner';
import Feedback from './components/Feedback';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Feedback />
      </div>
    );
  }
}

export default App;
