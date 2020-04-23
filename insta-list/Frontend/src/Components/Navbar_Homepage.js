import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import Button from '@material-ui/core/Button';

export default class Navbar_Homepage extends Component {
  state = {
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: ''
    }

    responseFacebook = response => {
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });

    }
    componentClicked = () => console.log("clicked");

    handleClick = () => {
      this.setState({
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
      })
    }

    render() {
      let fbContent;
      if (this.state.isLoggedIn) {
        console.log("state 1", this.state)
        fbContent = (
          <div style={{
            width: '400px',
            margin: 'auto',
            padding: '20px'
          }}>
            <img src={this.state.picture} alt={this.state.name} />
            <h2>Welcome, {this.state.name}!</h2>

            <Button variant="contained" color="primary" onClick={this.handleClick}>
              LOG OUT
            </Button>
          </div>
        );
      } else {
        console.log("state 2", this.state)
        fbContent = (<FacebookLogin
          appId="226680692000709"
          fields="name,email,picture"
          textButton="SIGN UP WITH FACEBOOK"
          onClick={this.componentClicked}
          callback={this.responseFacebook}/>);
      }
        return (
            <div>
                  <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="home">InstaList</Navbar.Brand>
                        <Nav className="ml-auto">
                        <Nav.Link href="home" >Home</Nav.Link>
                        {fbContent}
                        <Nav.Link href="login" exact to= "/Pages/login" >Log In</Nav.Link>
                        <Nav.Link href="library" exact to= "/Pages/MyLibraries">My Library</Nav.Link>
                        </Nav>
                    </Navbar>
            </div>
        )



    }

}
