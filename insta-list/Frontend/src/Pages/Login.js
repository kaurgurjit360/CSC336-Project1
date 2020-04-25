import React, { Component } from 'react';
import Navbar_Homepage from '../Components/Navbar_Homepage.js'
import Form from 'react-bootstrap/Form'
import Button from '@material-ui/core/Button';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      userName: "",
      password:"",
      isLoggedIn: false
    }
  }

  sendInfo = () => {
    this.setState ({
      isLoggedIn: true
    })
    console.log("userName is: ", this.userName, " and password is: ", this.password);
  }

  handleChangeUsername =  (event) => {
    console.log(this.userName);
    this.setState({
      userName: event.target.value
    });
  }

  handleChangePassword =  (event) => {
    this.setState({
      password: event.target.value
    });
  }
    render() {
      let content;
      if(this.state.isLoggedIn) {
        content = (
          <div>
            <p> Welcome, {this.state.userName}! </p>
            <p> </p>
            <p> Go to the homepage to search for songs and add them to your playlist! </p>
          </div>
        );
      }

      else {
        content = (
          <div>
            <form>
              <p> Enter a username: </p>
              <input type="text" value={this.state.userName} onChange={this.handleChangeUsername}/>
              <p> </p>
              <p> Enter a password: </p>
              <input type="password" value={this.state.password} onChange={this.handleChangePassword}/>
              <p> </p>
              <Button variant="primary" type="submit" onClick={this.sendInfo}>
                Submit
              </Button>
            </form>
          </div>
        );
      }

        return (
          <div>
            {content}
          </div>
        );
    }
}

export default Login
