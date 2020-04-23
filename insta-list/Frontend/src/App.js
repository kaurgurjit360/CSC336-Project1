import React from 'react'
import HomePage from './Pages/HomePage.js'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyLibraries from './Pages/MyLibraries';
import Login from './Pages/Login';
import Navbar_Homepage from './Components/Navbar_Homepage'
import { 
    BrowserRouter as Router, 
    Switch, 
    Route
  } from 'react-router-dom';

  
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
                <Navbar_Homepage />
                <Router>
                        <div className="container-fluid text-center">
                            <div className="row justify-content-center">
                                <Switch>
                                <Route path="/home" component={HomePage} />
                                <Route path="/login" component={Login} />
                                <Route path="/library" component={MyLibraries} />
                                </Switch>
                            </div>
                        </div>
                    </Router>
 
                {/* <div style= {{backgroundColor: "white"}}>
                <p className="App-intro">{this.state.apiResponse}</p>
                </div> */}
            </div>
        );
    }


}

export default App