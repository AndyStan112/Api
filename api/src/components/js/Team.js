import React, {useEffect, useState} from "react";
import Player from './Player.js'

function s(j){return JSON.stringify(j)}
function Team( {team, playerData} ){

    const {teamId, teamName, liveMemberNum, className} = team;
    function getImage(id){

        if(id < 10) return "icon/00" + String(id)+".png";
        return "icon/0" + String(id)+".png";
    }
    function getTeamColor(){

        if (!liveMemberNum)return {color:"gray"};

    }
    console.log(playerData)
    console.log("sus")
    return (

        <div className="Team" style={getTeamColor()}>
            <img src={getImage(teamId)} className="Players" width="85" height="85"></img>
            <p className="Players">
            {s(teamId)} {teamName} 
            </p>
            <div className="Players"> 

            {playerData.map((player, index)=>{

                return <Player player={player} id={teamId}/>

            })}

            </div>
        </div>

    )     
}
export default Team;