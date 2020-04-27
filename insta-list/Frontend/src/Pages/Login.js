import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Form } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      userId:'',
      userName:'',
      password:'',
      isLoggedIn: false
    }
  }

  sendInfo = (event) => {
    event.preventDefault()
    if(this.state.userName==="" || this.state.password==="")
    {
      alert("Please enter username and password ! ")
    }
    else{

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
    let flag = result
    if(flag.length)
    {
      result=JSON.parse(result)

      event.persist()

          this.setState({
            userId: result[0].id,
            isLoggedIn: true
            })

    }
    else
    {
      alert("Invalid username or password! ")
    }

  })
  .then(()=>{
    // save info on local storage
    const { userId,userName, password, isLoggedIn } = this.state;
    localStorage.setItem('userName', userName);
    localStorage.setItem('userId',userId)

   })
  .catch(error => console.log('error', error));

    console.log("userName is: ", this.state.userName, " and password is: ", this.state.password);


     // localStorage.setItem('user', rememberMe ? user : '');
 }
}
 logOut = (event) => {
   event.preventDefault()
   const { userId,userName, password, isLoggedIn } = this.state;
   localStorage.removeItem(userName);
   localStorage.removeItem('userName')
   localStorage.removeItem('userId')

   this.setState({
     userName:'',
     password:'',
     userId:'',
     isLoggedIn: false
   })
  }

  changeHandler = (event) => {
    event.target.value=event.target.value.replace(/ /g,'')
    this.setState({[event.target.name]: event.target.value})
  }

  componentDidMount() {
    //userName
    if (localStorage.getItem("userName")===null) {
      this.setState({
        userName:'',
        isLoggedIn: false
      })
      console.log("SUCCESS")
    }
    else {
      console.log("FAILURE!")
      this.setState({
        userName: localStorage.getItem("userName"),
        isLoggedIn: true
      })
    }

    // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    // const userName = isLoggedIn ? localStorage.getItem('userName') : '';
    // this.setState({ userName, isLoggedIn });
  }

  render() {
    console.log("is user loggedin?", this.state.isLoggedIn)

    let content;
    if(this.state.isLoggedIn) {

      content = (
        <div>
          <br />
          <br />
          <div style={{color: "white"}}>
          <h3> Welcome, {this.state.userName}! </h3>
          <br />
          <p> Go to the homepage to search for songs and add them to your playlist! </p>
          <br />
          <br />
          <Button variant="primary" type="submit" onClick={this.logOut}style={{color: "white"}} variant="outline-success" size='lg'><h3>Log Out</h3> </Button>
        </div>
        </div>
      );
    }

    else {
      content = (
        <div>
        <form>
        <br/>
        <div style={{color: "white"}}>
          <h3> Enter a username: </h3>
          </div>
          <Form.Group>
             <Form.Control size= 'lg' type="text" name="userName" value={this.state.userName} pattern="[A-Za-z0-9]+" onChange={this.changeHandler} placeholder="Enter Username" />  
          </Form.Group> 
          <br/>
          <div style={{color: "white"}}>
          <h3> Enter a password: </h3>
          </div>
          <Form.Group>
             <Form.Control size= 'lg' type="password" name="password" value={this.state.password} pattern="[A-Za-z0-9]+" onChange={this.changeHandler} placeholder="Enter Password" />  
          </Form.Group> 
          <br/>
          <Button type="submit" onClick={this.sendInfo} style={{color: "white"}} variant="outline-success" size='lg'><h3>Log in</h3></Button>
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
