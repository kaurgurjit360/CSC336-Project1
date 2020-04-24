import React, {Component} from 'react'
import { Form } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';


class HomePage extends Component {
    constructor() {
            super()
            this.state = {
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
               return  <ListGroup.Item>{song.song_name } { <DropdownButton style= {{float: "right"}} id="dropdown-basic-button" title="Add to Playlist">
                                                          <Dropdown.Item href="#/action-1">Playlist 1</Dropdown.Item>
                                                          <Dropdown.Item href="#/action-2">Playlist 2</Dropdown.Item>
                                                         </DropdownButton>}
                        </ListGroup.Item>
               }) : <strong >SEARCH A SONG</strong>
            }   
        </ListGroup>
        {/* <h4> See all artists </h4>
        <ListGroup>
                <ListGroup.Item>artist1</ListGroup.Item>
                <ListGroup.Item>artist2</ListGroup.Item>
        </ListGroup>   
        <h4> See all albums </h4>
        <ListGroup>
                <ListGroup.Item>album1</ListGroup.Item>
                <ListGroup.Item>album</ListGroup.Item>
        </ListGroup>     
        <h4> See all genres </h4>
        <ListGroup>
                <ListGroup.Item>genres1</ListGroup.Item>
                <ListGroup.Item>genres2</ListGroup.Item>
        </ListGroup>   */}
        </div>
        );
    }

}

export default HomePage;


