import React from 'react'
import s from "../Players.module.css";
import CardLayout from "../../CardLayout/CardLayout";

let face = `${s.card_face}`
const PlayersCard = (props: any) => {
    debugger
    return (
        <CardLayout face={face} img={props.img}/>
    )
}


export default PlayersCard
