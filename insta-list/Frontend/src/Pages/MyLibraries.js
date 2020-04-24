import React, { Component } from 'react';
import Navbar_Homepage from '../Components/Navbar_Homepage.js'
import FacebookLogin from 'react-facebook-login';
import ls from 'local-storage'

class MyLibraries extends Component {
    render() {
      let loggedIn = false;
      let user = "John Doe";
      console.log("is user logged in?", loggedIn);
      let content;
      let likedSongs;
      let likedPlaylists;


      if (loggedIn) {
        likedSongs = (
          <div>
            <p>1. Song 1 - Artist - Album</p>
            <p>2. Song 2 - Artist - Album</p>
          </div>
        );

        likedPlaylists = (
          <div>
            <p>1. playlistName - Creator</p>
            <p>2. playlistName - Creator</p>
          </div>
        );
      } else {
        likedSongs = (
          <div>
            <p>No liked songs so far!</p>
          </div>
        );

        likedPlaylists = (
          <div>
            <p>No liked Playlists so far!</p>
          </div>
        );
      }

        return (
          <div>

            <h4>{user}'s Library </h4>
            <h5>Liked Songs:</h5>
                {likedSongs}
            <h5> Liked Playlists: </h5>
                {likedPlaylists}
          </div>
        );
    }
}

export default MyLibraries

//     return JSON.parse(localStorage.getItem('ticker') || '{}');
