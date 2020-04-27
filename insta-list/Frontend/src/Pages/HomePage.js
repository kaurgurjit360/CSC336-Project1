import React, {Component} from 'react'
import { Form } from 'react-bootstrap';

import { ListGroup } from 'react-bootstrap';
import {Button} from 'react-bootstrap'
class HomePage extends Component {
    constructor() {
            super()
            this.state = {
                userId:null,
                search: "",
                songs: []
            }
        }
    //handleChange detects any change in the form; anything that happens inside the form is an event. we are setting the value from inside the form (event.target.value) to state of search (which was created above).
    handleChange =  (event) => {
        this.setState({
            search: event.target.value
        });
    }
    //this is checking, if a user typed anything the search form. the array result will check if the song names from our song table are EQUAL to what is typed in the search. It will return a filtered array of those results
    findSongs = () => {
        if(this.state.search) {
        let result = this.state.songs.filter(song => {
         return song.song_name.includes(this.state.search)
            })
           return result
        }
    }
    //this is feteching all the songs from the db and giving was a JSON form of them. Then its setting the state of the songs to whatever is in the DB
    componentDidMount() {

        fetch("http://localhost:3000/api/allsong")
        .then(res => res.json())
        .then(data => this.setState({ songs: data }))

        //checking if the local storage if userid is there or not


    }

clickHandler=(evt)=>{
        //getting user Id from local storage

 console.log("User Id : ",localStorage.getItem('userId'), "song id : ",evt.target.id)
 if(localStorage.getItem('userId')===null)
{
    alert("Please log in !")
}
 else{


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");



var urlencoded = new URLSearchParams();
urlencoded.append("id", "");
urlencoded.append("userId",localStorage.getItem('userId')); // its taking playlist id for now and it should be user id
urlencoded.append("songId", evt.target.id);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/newlikesong", requestOptions)
  .then(response => response.text())
  .then(result => alert("Added to liked songs"))
  .catch(error => console.log('error', error));
    }

}



render() {
    return (
    <div>
     <br/>
     <Form.Group>
            <Form.Control value ={this.state.search} onChange={this.handleChange} size="lg" type="text" placeholder="Search Songs" />
    </Form.Group>
    {/* Below we are mapping through the filtered songs and as we map through them, we are adding them to the LIST. Next to each item in the list we add a dropdown button */}
    <ListGroup>
        {
            this.findSongs() ?
           this.findSongs().map(song => {
           return  <ListGroup.Item >{song.song_name }{

             <Button id={song.id} type="button" onClick={this.clickHandler}>
               Like Song
             </Button>
         
           }
                    </ListGroup.Item>
           }) : <strong >SEARCH A SONG</strong>
        }
    </ListGroup>
   
    </div>
    );
}
}
export default HomePage;
