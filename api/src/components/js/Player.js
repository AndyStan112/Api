import React, {useEffect, useState} from "react";
function Player( {player , id} ){

    const { teamId , playerName ,liveState} = player;

    function getPlayerColor(){

        if (liveState===5)return {color:"gray"}
        return null

    }
    function getPlayerCross(){

        if (liveState===4)return {display: "block"}
        return {display: "none"}

    }
    if(id === teamId)
    return (
        <div className= "Player" >
        <p style={getPlayerColor()}>{ playerName }</p>
        <img src={"knockCross.png"} alt="" width="20" height="20" style={getPlayerCross()}></img>
        </div>
    ) 
    return null;
}
export default Player;