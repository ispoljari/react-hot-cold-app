import React, { Component } from 'react';
import Banner from './components/Banner';
import Feedback from './components/Feedback';
import Form from './components/Form';
import Progress from './components/Progress';
import Reset from './components/Reset';
import Info from './components/Info';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: this.generateRandomNumber()
    }
  }

  generateRandomNumber = () => Math.floor(Math.random()*100) + 1;

  render() {
    return (
      <div>
        <Banner />
        <Feedback randNum = {this.state.randomNumber}/>
        <Form />
        <Progress />
        <Reset />
        <Info />
      </div>
    );
  }
}

export default App;
