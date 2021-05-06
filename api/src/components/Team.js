import "./Team.css";

import React from "react";
import Player from "./Player";

const getImage = (id) => `icon/0${id < 10 ? "0" : ""}${id}.png`;

const getTeamColor = (alive) => ({ color: alive ? "white" : "gray" });

function Team({ team }) {
  const { teamId, teamName, liveMemberNum, players } = team;

  return (
    <div className="Team" style={getTeamColor(liveMemberNum > 0)}>
      <div class="image">
        <img src={getImage(teamId)} />
      </div>
      <p>
        {teamId} {teamName}
      </p>
      <div className="Players">
        {players.map((player) => (
          <Player player={player} />
        ))}
      </div>
    </div>
  );
}

export default Team;
