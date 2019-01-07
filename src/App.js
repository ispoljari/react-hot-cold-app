import React, { Component } from 'react';
import Banner from './components/Banner';
import Feedback from './components/Feedback';
import Form from './components/Form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Feedback />
        <Form />
      </div>
    );
  }
}

export default App;
