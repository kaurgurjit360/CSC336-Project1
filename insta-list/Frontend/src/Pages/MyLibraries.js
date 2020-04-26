import React, { Component } from 'react';
import Navbar_Homepage from '../Components/Navbar_Homepage.js'
import ls from 'local-storage'
import { ListGroup } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

class MyLibraries extends Component {

  constructor(props) {
      super(props);
        this.state = {
          id: localStorage.getItem("userId"),
          loggedIn: localStorage.getItem("userName") !==null,
          userName: localStorage.getItem("userName")
    };
  }


  unlikeSong() {
    console.log("This song is being unliked")
  }

    render() {
      let header;
      let body;
      let likedSongs;
      let songs;

      if (this.isLoggedIn) {
        header = (
          <div>
            <h4> {this.userName}'s Playlist </h4>
          </div>
        );
        songs = [1] // array that will contain all the songs that the user has
        if (songs.length === 0) {
          body = (
            <div>
              <p> Oops, no liked songs as of yet.</p>
              <p> Go to the homepage and search for songs.</p>
              <p> As you like songs you find, they will appear here!</p>
            </div>
          );
        } else {
          console.log("Use has songs")
          body = (
            <div>
              <ListGroup>
                <ListGroup.Item>
                  1. Song 1 - Artist - Album
                  <Button variant="primary" type="submit" onClick={this.unlikeSong}>
                    Unlike Song
                  </Button>
                </ListGroup.Item>

                <ListGroup.Item>
                  2. Song 2 - Artist - Album
                  <Button variant="primary" type="submit" onClick={this.unlikeSong}>
                    Unlike Song
                  </Button>
                </ListGroup.Item>
              </ListGroup>

            </div>
          );
        }
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
            {body}
          </div>
        );
    }
}

export default MyLibraries

//     return JSON.parse(localStorage.getItem('ticker') || '{}');
