import "./Player.css";

import React from "react";

import { isKnocked, isDead } from "../lib/livestate";

const getTextStyles = (state) => {
  if (isDead(state)) {
    return { color: "gray" };
  }

  return {
    color: "white",
  };
};

function Player({ player }) {
  const { playerName, liveState } = player;

  let knockdownIcon = <></>;
  if (isKnocked(liveState)) {
    knockdownIcon = <img src={"knockCross.png"} />;
  } else knockdownIcon = <div className="empty"></div>;

  return (
    <div className="Player">
      <p style={getTextStyles(liveState)}>{playerName}</p>
      {knockdownIcon}
    </div>
  );
}

export default Player;
