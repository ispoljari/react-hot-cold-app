import React, { Component } from 'react';
import Banner from './components/Banner';
import Feedback from './components/Feedback';
import Form from './components/Form';
import Progress from './components/Progress';
import Reset from './components/Reset';
import Info from './components/Info';
import Author from './components/Author';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      actual: this.generateRandomNumber(),
      guess: undefined,
      allGuesses: [],
      attempt: 0,
      feedback: 'Waiting...',
      block: false
    }
  }

  generateRandomNumber = () => Math.floor(Math.random()*100) + 1;

  resetGame = () => {
    this.setState(this.getInitialState());
  }

  updateAppState = guess => {
    const absDiff = Math.abs(guess - this.state.actual)
    const feedbackString = this.getFeedback(absDiff);

    this.setState(prevState => ({
        guess,
        allGuesses: [...prevState.allGuesses, guess],
        attempt: prevState.attempt + 1,
        feedback: feedbackString,
        block: absDiff === 0 ? true : false
      })
    ); 
  }

  getFeedback = absDiff => {
    if (absDiff === 0) {
      return 'You Won! Reset the game to play again.';
    } else if (absDiff < 4 && absDiff !== 0) {
      return 'Extremely Hot!';
    } else if (absDiff >= 4 && absDiff < 10) {
      return 'Hot';
    } else if (absDiff >= 10 && absDiff < 20) {
      return 'Warm';
    } else {
      return 'Cold';
    } 
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
              <Form block = {this.state.block} returnGuessToApp={value => this.updateAppState(value)}/>
              <Progress attempt={this.state.attempt} guess={this.state.guess} guessList={guessList}/>
              <Reset resetGame = {this.resetGame}/>
              <Info />
            </main>
            <footer role="contentinfo">
              <Author />
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;