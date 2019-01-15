import React, {Component} from 'react';

import {
  Modal,
  ModalDialog,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button, 
  Typography
} from '@smooth-ui/core-sc';

import * as Styled from './style';

class Info extends Component {
  state = {
    show: false
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  }

  handleShow = () => {
    this.setState({
      show: true
    });
  }


  render() {
    return (
      <Styled.Info>
        <Button variant="info" width={1} minHeight={40} fontSize={22} type="button" onClick={this.handleShow}>
          How To Play
        </Button>
        <Modal opened={this.state.show} onClose={this.handleClose}>
          <ModalDialog>
            <ModalContent>

              <ModalHeader>
                <Typography variant="h2" textAlign="center" color="black">
                  Game Rules
                </Typography>
              </ModalHeader>
      
              <ModalBody fontSize={20} color="black">
                This is a Number Guessing Game with the following rules:
                <br />
                <br />
                1. The machine picks a random number between 1 to 100 and keeps it hidden.
                <br />
                <br />
                2. You need to guess until you can find the hidden secret number.
                <br />
                <br />
                3. You will get feedback on how close or far your guess is in the form of the following keywords ("cold", "warm", "hot", "extremely hot").
                <br />
                <br />
                Everything clear?
              </ModalBody>
      
              <ModalFooter>
                <Button variant="success" size="md" width={0.3} mt={10} minHeight={40} fontSize={22} type="button" onClick={this.handleClose}>
                  YES
                </Button>
              </ModalFooter>

            </ModalContent>
          </ModalDialog>
        </Modal>
      </Styled.Info>
    );
  }
}

export default Info;