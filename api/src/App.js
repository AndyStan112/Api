import logo from './logo.svg';
import './App.css';
import './components/css/Team.css';
import React, {useEffect, useState} from "react";
import {HashRouter, Route} from "react-router-dom";
import axios from "axios";
import Team from './components/js/Team.js'

function App() {
	
	
      const [apitest, setapitest] = useState(null);
      const [text, setText] = useState(null)
      var tmp= [];
      function update(){

        axios({
          method: 'post',
          url: '/getteaminfolist', 
      }).then((response) => response.data, (error) => {
          console.log(error);
        }).then(users => {setText(users);console.log(users)});
        
      }
    useEffect(() => {update();const interval =setInterval(update,1000);return ()=>clearInterval(interval)}, []);
    console.log('here1');
    function test() {
    
      fetch("https://random-data-api.com/api/address/random_address")
      .then(response => response.json())
      .then(users => {
      
       setText(JSON.parse(users))
      
      
      })
    }
    function renderPlayers(){

      if (text != null){

        return text["teamInfoList"].map((x,y)=>{return (<Team data={x}/>) })
      }
      else return (<p>HI</p>)

    }
  return (
    <div className="App">
      <header className="App-header">
        <div className= "Teams">{
          renderPlayers()
        } 
        </div>
        
      </header>
    </div>
  );
}

export default App;
