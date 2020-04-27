import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class MyLibraries extends Component {

  constructor(props) {
      super(props);
        this.state = {
          id: localStorage.getItem("userId"),
          loggedIn: localStorage.getItem("userName") !==null,
          userName: localStorage.getItem("userName"),
          likesongs:[]

    };
  }



  componentDidMount() {

    fetch("http://localhost:3000/api/likesongdetail/"+this.state.id)
    .then(response => response.json())
    .then(result => {
      
      this.setState({ likesongs: result })
      console.log(this.state.likesongs)
    })
    .catch(error => console.log('error', error));
    //checking if the local storage if userid is there or not


}


  unlikeSong(event) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("id",event.target.id );

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/deletelikesong", requestOptions)
  .then(response => response.text())
  .then(result => alert(result+" Please refresh the page to see the changes !"))
  .catch(error => console.log('error', error));
  }


    render() {
      let header;
      let body;
      let songs;
      
      if (this.state.loggedIn) {
        header = (
          <div>
            <h4> {this.state.userName}'s Playlist </h4>
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
          console.log("User has songs")
          body = (
            <div>
            <ListGroup>{
            this.state.likesongs ?
            this.state.likesongs.map(likesongs => {
                  return  <ListGroup.Item ><strong >SONG NAME: </strong>{likesongs.song.song_name}{
                    <Button id={likesongs.id} type="button" onClick={this.unlikeSong}>
                      Unlike Song
                    </Button>
                    }
                    <br/>
                    <strong >ALBUM NAME : </strong>{likesongs.song.album.album_name }
                    <br/>
                    <strong >ARTIST NAME : </strong>{likesongs.song.artist.artist_name }
                  
                    </ListGroup.Item>
           }) : <strong >LIKED SONG</strong>
        }
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
