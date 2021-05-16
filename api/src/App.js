import "./App.css";

import React, { useEffect, useState } from "react";
import Team from "./components/Team";
import { tap, getJSONIfOK } from "./lib/util";
import lastAPICall from "./data1.json";

function App() {
  Array.prototype.forEachChain = function () {
    this.forEach(...arguments);
    return this;
};
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
      } =await fetch("/getallinfo").then(getJSONIfOK).then(tap(console.log));
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
      console.log(teams);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="Teams left">{teams.left}</div>
     <span/>
      <div className="Teams right">{teams.right}</div>
    </div>
  );
}

export default App;
