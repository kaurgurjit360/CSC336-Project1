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
    console.log(this.state.userName)
    console.log(this.state.password)
    //axios.post()

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("id", "");
    urlencoded.append("name", this.state.userName);
    urlencoded.append("password", this.state.password);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:3000/api/newuser", requestOptions)
      .then(response => response.text())
      .then(result => {
        if(result != null)
        {
          alert("Registered ! \n You can log in now ! ")
        }
      })
      .catch(error => console.log('error', error));
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
