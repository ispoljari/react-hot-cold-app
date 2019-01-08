import React, {Component} from 'react';
import './Info.css';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class Info extends Component {
  toggleModalInfo = () => {
    //something
  }

  render() {
    return (
      <div className="text-center info">
        <button className="btn btn-info btn-block info__btn" type="button" onClick={this.toggleModalInfo()}>
          How To Play
        </button>
        <Modal>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>One fine body...</Modal.Body>
  
          <Modal.Footer>
            <Button>
              Close
            </Button>
            <Button bsStyle="primary">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Info;