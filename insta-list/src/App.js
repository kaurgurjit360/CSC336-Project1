import React from 'react'
import HomePage from './Components/HomePage'
import LoginPage from './Components/LoginPage'
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './style.css'




const useStyles = makeStyles((theme) => ({
    root: {
      
      flexGrow: 1,
     
    },
    title: {
      flexGrow: 1,
      variant: "regular",
      
    },
    search:{
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    }
  },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1/4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


function App (){
    const classes = useStyles();
     
        return(
        <div>
        <Router>

    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Insta-List
          </Typography>
          
            
          <div className={classes.search}>
   
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          </div>
          <Button color="inherit"><Link to="/">Home</Link></Button>
          <Button color="inherit"><Link to="/login">Login</Link></Button>
          
        </Toolbar>
      </AppBar>

      <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage/>
            </Route>
        </Switch>
      </Router>
</div>

        );
    


}

export default App