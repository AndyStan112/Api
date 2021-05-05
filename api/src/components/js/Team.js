import React, {useEffect, useState} from "react";
function s(j){return JSON.stringify(j)}
function Team(props){

    function getImage(id){

        if(id <10) return "icon/00" + String(id)+".png"
    }
    let text=props.text;
    return (

        <div className="Team">
            <img src={getImage(props.data.teamId)} width="100" height="100"></img>
            <p className={props.className}>
            {s(props.data.teamId)} {props.data.teamName} <br/><br/>
            </p>
            <div>

            

            </div>
        </div>

    )     
}
export default Team;