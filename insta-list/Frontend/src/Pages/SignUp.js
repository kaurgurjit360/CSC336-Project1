import React, { Component } from 'react';
import Navbar_Homepage from '../Components/Navbar_Homepage.js'
import Form from 'react-bootstrap/Form'
import Button from '@material-ui/core/Button';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitHandler = event => {
    event.preventDefault()
    console.log(this.state)
    //axios.post()
    fetch("http://localhost:3000/api/alluser", this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
    render() {
      const {userName, password} = this.state
        return (
          <div>
            <form>
              <div>
                <p> Enter a username: </p>
                <input type="text" name="userName" value={userName} onChange={this.changeHandler}/>
                <p> </p>
              </div>
              <div>
              <p> Enter a password: </p>
                <input type="password" name="password" value={password} onChange={this.changeHandler}/>
                <p> </p>
              </div>
                <Button variant="primary" type="submit" onClick={this.submitHandler}>
                  Submit
                </Button>
            </form>
          </div>
        );
    }
}

export default SignUp
