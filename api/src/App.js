import "./App.css";

import React, { useEffect, useState } from "react";
import Team from "./components/Team";
import TeamKill from "./components/TeamKill";
import { tap, getJSONIfOK } from "./lib/util";
import lastAPICall from "./data1.json";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

function App() {
 
  const [teams, setTeams] = useState({
    left: [],
    right: [],
  });
  const [cache, setCache] = useState([]);
  //ECMAScript
  
  async function update() {
    try {
      const temp = [];
      const {
        allinfo: { TeamInfoList: teams = [], TotalPlayerList: players = [] },
      } = lastAPICall //await fetch("/getallinfo").then(getJSONIfOK).then(tap(console.log));
      const teamsWithPlayers = teams
        .sort((a, b) => a.teamId - b.teamId)
        .map((team) => ({
          ...team,
          players: players.filter((player) => player.teamId === team.teamId),
        }))
        .map((team)=>{
          temp.push(team);
          return team;
        })
        .map((team, index) => <Team id={team.teamId} team={team} cache = { cache[index] }/>);
        setCache(temp);
      setTeams({
        left: teamsWithPlayers.slice(0, 8),
        right: teamsWithPlayers.slice(8, 16),
      });
    } catch (err) {
      console.error({ updateError: err });
    }
  }

  useEffect(() => {
    update();
    const interval = setInterval(() => {
      update();
      //console.log(teams);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
    
    <Route path="/harta" render={
    ()=>{return(
    <div className="App"> 
      <div className="Teams left">{(()=>{console.log(teams.left);return teams.left})()}</div>
     <span/>
      <div className="Teams right">{teams.right}</div>
    </div>

    )}}/>
    <Route path="/TeamKill" component={<TeamKill teams={teams} cache={cache} />}/>
    </Router>
  );
}

export default App;
