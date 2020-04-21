import React, { Component } from 'react';
import MenuAppBar from './Components/navbar.js';
import Artists from '../Artists.js';

class LandingPage extends Component {
    render() {
        return (
            <div>
            <MenuAppBar />
            <div style={{color: "red"}}> here is a random list of Artists from DB: <Artists /> </div>
            </div>
        );
    }
}

export default LandingPage;