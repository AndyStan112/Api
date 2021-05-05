import React, {useEffect, useState} from "react";

function Player( {player , id} ){

    const { teamId , playerName } = player;

    if(id === teamId)
    return (
        <p>{ playerName }</p>
    ) 
    return null;
}
export default Player;