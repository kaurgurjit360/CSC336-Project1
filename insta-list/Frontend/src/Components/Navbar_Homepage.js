import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

export default class Navbar_Homepage extends Component {
    render() {

        return (
            <div>
                  <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="home">InstaList</Navbar.Brand>
                        <Nav className="ml-auto">
                        <Nav.Link href="home" >Home</Nav.Link>
                        <Nav.Link href="login" exact to= "/Pages/login" >Log In</Nav.Link>
                        <Nav.Link href="signup" exact to= "/Pages/SignUp">Sign Up</Nav.Link>
                        <Nav.Link href="library" exact to= "/Pages/MyLibraries">My Library</Nav.Link>
                        </Nav>
                    </Navbar>
            </div>
        )
    }
}
