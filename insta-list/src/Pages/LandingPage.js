import React, { Component } from 'react';
import MenuAppBar from './Components/navbar.js';
import Artists from '../Artists.js';
import background_image from './pictures/background_image.jpg';

var sectionStyle = {
  width: "100%",
  height: "auto",
};

 
class LandingPage extends Component {
    render() {
        return (
            <div>
                <MenuAppBar />
                    <div style={{color: "red"}}> here is a random list of Artists from DB: <Artists />  </div>
                    <img style= {sectionStyle} src={background_image}/>
            </div>
        );
    }
}

export default LandingPage;