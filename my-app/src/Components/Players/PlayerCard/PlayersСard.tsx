import React from 'react'
import s from "../Players.module.css";
import CardLayout from "../../CardLayout/CardLayout";
import {NavLink} from "react-router-dom";

let face = `${s.card_face}`
const PlayersCard = (props: any) => {
    return (
        <NavLink to='/playersCardDetails'>
            <CardLayout face={face} img={props.img}/>
        </NavLink>

    )
}


export default PlayersCard
