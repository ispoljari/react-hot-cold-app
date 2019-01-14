import React, { Component } from 'react';
import { Banner, Feedback, Form, Progress, Reset, Info, Author } from './components';
import { getInitialState, getFeedback } from './util';

import './App.css';

class App extends Component { 
  state = getInitialState();

  resetGame = () => this.setState(getInitialState());

  updateAppState = guess => {
    const { actual } = this.state;
    const absDiff = Math.abs(guess - actual);
    const { feedbackMessage, feedbackColor } = getFeedback(absDiff);

    this.setState(prevState => ({
        guess,
        allGuesses: [...prevState.allGuesses, {guess, feedbackColor}],
        attempt: prevState.attempt + 1,
        feedbackMessage,
        block: absDiff === 0
      })
    ); 
  }

  render() {
    const { allGuesses, feedbackMessage, block, attempt, guess } = this.state;

    const guessList = allGuesses.map((item, index) => 
      <li key={index} style={{backgroundColor: item.feedbackColor}}>
        <span>{item.guess}</span>
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
              <Feedback feedback={feedbackMessage}/>
              <Form block = {block} returnGuessToApp={value => this.updateAppState(value)}/>
              <Progress attempt={attempt} guess={guess} guessList={guessList}/>
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