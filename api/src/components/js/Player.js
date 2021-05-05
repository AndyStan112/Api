import React, {useEffect, useState} from "react";

function User(props){

    
    let text=props.text;
    return (

        <div className = "Team" >

            <p className={props.className}>data : {text}</p>

        </div>

    )     
}
export default User;