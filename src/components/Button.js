import React from "react";

export const ButtonList=()=>{
    return(
        <div className="flex pl-5">
            <Button name="ALL"/>
            <Button name="GAMES"/>
            <Button name="SPORTS"/>
            <Button name="LIVE"/>
            <Button name="MUSIC"/>
            <Button name="MOVIES"/>
            <Button name="MIXES"/>
            <Button name="ENGLISH"/>
            <Button name="SPORTS"/>
            <Button name="COMDEY"/>
            <Button name="VLOGS"/>
            <Button name="CAMPING"/>
            <Button name="MOTOR"/>
            <Button name="CARS"/>

        </div>
    )
}

const Button=(props)=>{
    return(
        <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">{props.name}</button>
    )
}