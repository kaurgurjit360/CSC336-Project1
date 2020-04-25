import React, { Component } from 'react';
import Navbar_Homepage from '../Components/Navbar_Homepage.js'
import Form from 'react-bootstrap/Form'
import Button from '@material-ui/core/Button';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      userName:'Albert',
      password:'',
      isLoggedIn: false
    }
  }

  sendInfo = (event) => {

    event.preventDefault()
<<<<<<< HEAD
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


=======
    var myHeaders = new Headers();

//var formdata = new FormData();  

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
 // body: formdata,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/find/login/"+this.state.userName+"&"+this.state.password, requestOptions)
  .then(response => response.text())
  .then(result => {
    if(result!= null)
    {
        event.preventDefault()
          this.setState({
            isLoggedIn: true
            })
    }
    else{
      event.preventDefault()
      alert('Invalid username or password')
    }
  })
  .catch(error => console.log('error', error));
   
>>>>>>> e54359aa82666aeec1c954c3e2495f79f2a84bb1
    console.log("userName is: ", this.state.userName, " and password is: ", this.state.password);
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
    render() {
      console.log("is user loggedin?", this.state.isLoggedIn)
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
