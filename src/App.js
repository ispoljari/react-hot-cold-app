import React, { Component } from 'react';
import Banner from './components/Banner';
import Feedback from './components/Feedback';
import Form from './components/Form';
import Progress from './components/Progress';
import Reset from './components/Reset';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Feedback />
        <Form />
        <Progress />
        <Reset />
      </div>
    );
  }
}

export default App;
