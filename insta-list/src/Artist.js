import React, { Component } from 'react';

class Artists extends Component {
    state = {
        artists: []
    }
    //when our artist component renders, this function goes to the localhost of API and gets us all the artists
    componentDidMount() {
        fetch("http://localhost:8888/")
        .then(res => res.json() )
        .then((artists) => {
            this.setState({
                artists: artists
            });
          });
        }
    render() {
        return (
            <div>
                <ul>
                {
                   this.state.artists.map(artist => {
                       return <li> {artist.name} </li>
                   }) 
                }
                </ul>
            </div>
        );
    }
}

export default Artists;