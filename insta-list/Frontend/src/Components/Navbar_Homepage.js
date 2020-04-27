import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

export default class Navbar_Homepage extends Component {

  sampleFunctionChild() {
    console.log("Sample function child")
  }

    render() {
      console.log("This is a new page!")
        return (
            <div>
                  <Navbar bg="light" variant="light">
                        <Navbar.Brand href="home"><h2><strong>INSTALIST</strong></h2></Navbar.Brand>
                        <Nav className="ml-auto">
                        <Nav.Link href="home" ><h5>Home</h5></Nav.Link>
                        <Nav.Link href="login" exact to= "/Pages/login" ><h5>Log In</h5></Nav.Link>
                        <Nav.Link href="signup" exact to= "/Pages/SignUp"><h5>Sign Up</h5></Nav.Link>
                        <Nav.Link href="library" exact to= "/Pages/MyLibraries"><h5>Liked Songs</h5></Nav.Link>
                        </Nav>
                    </Navbar>
            </div>
        )
    }
}
