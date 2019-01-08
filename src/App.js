import React, { Component } from 'react';
import Banner from './components/Banner';
import Feedback from './components/Feedback';
import Form from './components/Form';
import Progress from './components/Progress';
import Reset from './components/Reset';
import Info from './components/Info';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actual: this.generateRandomNumber(),
      guess: undefined,
      allGuesses: [],
      attempt: 0
    }
  }

  generateRandomNumber = () => Math.floor(Math.random()*100) + 1;

  updateGuess = guess => {
    this.setState(prevState => ({
      guess,
      allGuesses: [...prevState.allGuesses, guess],
      attempt: this.state.attempt + 1
    })); 
  }

  resetGame = () => {
    this.setState({
      actual: this.generateRandomNumber(),
      guess: undefined,
      allGuesses: [],
      attempt: 0
    });
  }

  render() {
    const guessList = this.state.allGuesses.map((guess, index) => 
      <li key={index} className={`guess-${index}`}>
        <span>{guess}</span>
      </li>
    );

    return (
      <div>
        <header role="banner">
          <Banner />
        </header>
        <main role="main">
          <Feedback guess={this.state.guess} actual={this.state.actual}/>
          <Form returnGuessToApp={value => this.updateGuess(value)}/>
          <Progress attempt={this.state.attempt} guess={this.state.guess} guessList={guessList}/>
          <Reset resetGame = {() => this.resetGame}/>
          <Info />
        </main>
      </div>
    );
  }
}

export default App;
