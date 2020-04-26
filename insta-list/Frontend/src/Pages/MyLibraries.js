import React, { Component } from 'react';
import Navbar_Homepage from '../Components/Navbar_Homepage.js'
import ls from 'local-storage'

class MyLibraries extends Component {

  constructor(props) {
      super(props);
        this.state = {
          id: "this.props.userName",
          loggedIn: "this.props.isLoggedIn"
    };
  }

    render() {
      let loggedIn = localStorage.getItem("userName") !==null;
      let user = "";
      let header;
      let body;
      let likedSongs;

      if (loggedIn) {
        user = localStorage.getItem("userName")
        header = (
          <div>
            <h4> {user}'s Playlist </h4>
          </div>
        );
        /*
          if user has no liked songs:
              likedSongs = "No liked songs so far!"
          else:
            songsForUser = [] // get all songs for this user
            artsitsorUser = [] // get all songs for this user

            likedSongs = (
              <div>
                <p>1. Song 1 - Artist - Album</p>
                <p>2. Song 2 - Artist - Album</p>
              </div>
          );
        */
        // likedSongs = (
        // );
      } else {
        header = (
          <div>
            <h4> Sorry, you're not logged in yet. </h4>
          </div>
        );
        body = (
          <div>
            <p>Please sign up or login to see your personal playlist here!</p>
          </div>
        );
      }

        return (
          <div>
            {header}
            <h5> {body} </h5>
          </div>
        );
    }
}

export default MyLibraries

//     return JSON.parse(localStorage.getItem('ticker') || '{}');
