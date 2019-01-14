import React, { Component } from 'react';
import { Banner, Feedback, Form, Progress, Reset, Info, Author } from './components';
import { getInitialState, getFeedback } from './util';

import styled from 'styled-components';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

const StyledHeader = styled.div`
  max-width: 380px;
  margin: 0 auto;
`;

const StyledMain = styled(StyledHeader)`
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
`;

const StyledFooter = styled.footer`
  margin-top: 20px;
`

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
      <Grid >
        <Row >
          <Col>
            <StyledHeader as="header" role="banner">
              <Banner />
            </StyledHeader>
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledMain as="main" role="main">
              <Feedback feedback={feedbackMessage}/>
              <Form block = {block} returnGuessToApp={value => this.updateAppState(value)}/>
              <Progress attempt={attempt} guess={guess} guessList={guessList}/>
              <Reset resetGame = {this.resetGame}/>
              <Info />
            </StyledMain>
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledFooter role="contentinfo">
              <Author />
            </StyledFooter>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;