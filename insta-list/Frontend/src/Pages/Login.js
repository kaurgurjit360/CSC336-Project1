import React, { Component } from 'react';
import Navbar_Homepage from '../Components/Navbar_Homepage.js'
import Form from 'react-bootstrap/Form'
import Button from '@material-ui/core/Button';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName:'',
      password:'',
      isLoggedIn: false
    }
  }

  sendInfo = (event) => {

    event.preventDefault()
    fetch("http://localhost:3000/api/login") 
        .then(res => res.json())
         .then(res=>{ 
      if(res!= null) 
      { event.preventDefault()
        this.setState ({
          isLoggedIn: true
        })
      }
      else
      {
        event.preventDefault()
        alert('Invalid username or password')
      }

    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
   
    console.log("userName is: ", this.state.userName, " and password is: ", this.state.password);
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
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
              <input type="text" name="userName" value={this.state.userName} onChange={this.changeHandler}/>
              <br/>
              <p> Enter a password: </p>
              <input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
              <br/>
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
