import React from 'react'
import HomePage from './Components/HomePage'
import './style.css'

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:3000/api/all")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render()
    {
        return(
            <div >
                <HomePage/>
                <div style= {{backgroundColor: "white"}}>
                <p className="App-intro">{this.state.apiResponse}</p>
                </div>
            </div>
        );
    }


}

export default App