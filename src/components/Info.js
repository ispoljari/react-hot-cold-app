import React, {Component} from 'react';
import './Info.css';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

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
      <div className="text-center info">
        <button className="btn btn-info btn-block info__btn" type="button" onClick={this.handleShow}>
          How To Play
        </button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>One fine body...</Modal.Body>
  
          <Modal.Footer>
            <Button onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Info;