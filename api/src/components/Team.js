import "./Team.css";
import React from "react";
import Player from "./Player";

const getImage = (id) => `icon/0${id < 10 ? "0" : ""}${id}.png`;

const getTeamColor = (alive) =>{ 
  if(alive==4)return{
    color : "yellow", 
  };
  if(alive==0)return {
  color : "grey", 
  backgroundColor : "rgba(132, 132, 132, 0.19)",
  filter: "grayscale(100%)",
  };
  else return{color:"white"}
}

function Team({ team }) {
  const { teamId, teamName, liveMemberNum, players } = team;
  return (
    <div className="Team" style={getTeamColor(liveMemberNum)}>
      <div class="image">
        <img src={getImage(teamId)} />
      </div>
      <div className="bigText">
        <p className="ID">#{teamId}</p>
        <p className="teamName"> {teamName}</p>
      </div>
      <div className="Players">
        {players.map((player) => (
          <Player id={player.uId} player={player} />
        ))}
      </div>
    </div>
  );
}

// React DOM
// :first-child { display : none; }

export default Team;
