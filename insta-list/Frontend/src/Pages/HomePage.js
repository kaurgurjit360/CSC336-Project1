import React, {Component} from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';


class HomePage extends Component {
    constructor() {
            super()
            this.state = {
                search: "",
                songs: [

                    {id: 1, name: "New York" },
                    {id: 2, name: "New York" },
                    {id: 3, name: "No Idea" },
                    {id: 4, name: "New" }

                
                ]
            }
            // this.handleChange = this.handleChange.bind(this)
        }
    handleChange =  (event) => {
        this.setState({
            search: event.target.value
        });
    }

    findSongs = () => {
        let result = this.state.songs.filter(song => {
        return song.name.includes(this.state.search)
            
        })
        console.log(result)
        // console.log(array)
    
    }




    componentDidMount() {
        // fetch()
    }


    render() {
        return (
            <div>
        <br/>
        {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
        </Form> */}
        <form>
            <input type= "text" value={this.state.search} placeholder="Search" onChange={this.handleChange}/>
             <h1> {this.state.search}</h1>
             <Button variant="outline-primary" onClick={this.findSongs}>Search</Button>
        </form>

        <h4> See all songs </h4>
        <ListGroup>
                <ListGroup.Item>Song1</ListGroup.Item>
                <ListGroup.Item>Song2</ListGroup.Item>
        </ListGroup>
        <h4> See all artists </h4>
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
        </ListGroup>  
        </div>
        );
    }

}

export default HomePage;


