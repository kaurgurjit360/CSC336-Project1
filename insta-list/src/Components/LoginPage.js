import React, { Component } from 'react';
import MenuAppBar from './Components/navbar.js';
import Artists from '../Artists.js';

class LoginPage extends Component {
    render() {
        return (
            <div>
            <MenuAppBar />
            <div style={{color: "red"}}> here is a random list of Artists from DB: <Artists /> </div>
            </div>
        );
    }
}

export default LoginPage;