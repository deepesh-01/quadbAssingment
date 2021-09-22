import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import {CircularProgress} from '@material-ui/core'

import {Home} from './components/home';
import {Screen2} from './components/screen2';
import {Header} from './components/header';


function App() {

  const [data,setData] = useState(null);

  const fetchData = async () => {
    try{
        const state = await axios.get(`https://api.tvmaze.com/search/shows?q=all`);
        console.log("state in use effect : ", state.data[0].show.image.medium);
        setData(state.data);
        return true;
        }
    catch(err){
            console.log("Error occurred : ",err);
            return false;
        }
    } 
    useEffect( async () =>{
        try{
        const abc = await fetchData();
        console.log("fetchData() value : ", abc);
        }
        catch(err){
            console.log("Error in useEffect() : ",err);
        }
    },[]);

  return (
    <Router>
        <Header/>
        {data ? 
      <Switch>
      <Route path="/screen2"><Screen2/></Route>
      <Route path="/"><Home> {data} </Home></Route>
      </Switch>
        : <h1> <CircularProgress style={{display:"flex", justifyContent:"center"}} /> </h1>} 
    </Router>
    
  );
}

export default App;
