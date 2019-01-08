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
      actual: this.generateRandomNumber(),
      guess: undefined,
      allGuesses: [],
      attempt: 0,
      feedback: 'Waiting...',
      block: false
    }
  }

  generateRandomNumber = () => Math.floor(Math.random()*100) + 1;

  updateGuess = guess => {
    this.setState({
      guess,
      allGuesses: [...this.state.allGuesses, guess],
      attempt: this.state.attempt + 1
    }, () => {
      this.updateFeedback();
    }); 
  }

  resetGame = () => {
    this.setState({
      actual: this.generateRandomNumber(),
      guess: undefined,
      allGuesses: [],
      attempt: 0,
      feedback: 'Waiting...',
      block: false
    });
  }

  blockGame = () => {
    this.setState({
      block: true
    });
  }

  updateFeedback = () => {
    const absDiff = Math.abs(this.state.guess - this.state.actual)
    let feedbackString;

    if (absDiff === 0) {
      feedbackString = 'You Won! Reset the game to play again.';
      this.blockGame();
    } else if (absDiff < 4 && absDiff !== 0) {
      feedbackString = 'Extremely Hot!';
    } else if (absDiff >= 4 && absDiff < 10) {
      feedbackString = 'Hot';
    } else if (absDiff >= 10 && absDiff < 20) {
      feedbackString = 'Warm';
    } else {
      feedbackString = 'Cold';
    } 

    this.setState({
      feedback: feedbackString
    });
  }

  render() {
    const guessList = this.state.allGuesses.map((guess, index) => 
      <li key={index} className={`guess-${index}`}>
        <span>{guess}</span>
      </li>
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <header role="banner">
              <Banner />
            </header>
            <main role="main">
              <Feedback feedback={this.state.feedback}/>
              <Form block = {this.state.block} returnGuessToApp={value => this.updateGuess(value)}/>
              <Progress attempt={this.state.attempt} guess={this.state.guess} guessList={guessList}/>
              <Reset resetGame = {() => this.resetGame}/>
              <Info />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;