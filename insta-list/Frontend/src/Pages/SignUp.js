import React, { Component } from 'react';
import Navbar_Homepage from '../Components/Navbar_Homepage.js'
import Form from 'react-bootstrap/Form'
import Button from '@material-ui/core/Button';

class SignUp extends Component {
  constructor(){
    super(props);
    this.state={
      
    }
  }

    render() {
        return (
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitHandler}>
              Submit
            </Button>
          </Form>
        );
    }
}

export default SignUp
