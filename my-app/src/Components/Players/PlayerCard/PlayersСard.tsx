import React from 'react'
import f from "../Players.module.css";
import s from "../../../assets/Style/CardLayout.module.css";
import {NavLink} from "react-router-dom";


const PlayersCard = (props: any) => {
   //debugger
    return (
        <NavLink to='/playersCardDetails'>
            <div className={s.cardLayout}>
                <div className={`${s.cardLayout_image} ${s.cardLayout_face}`}>
                    <img src={props.avatar[2]} alt="avatar"/>
                </div>
                <div className={s.cardLayout_description}>
                    <span>{props.players.name}
                        <span>#{props.players.number}</span>
                    </span>
                    <span>{props.players.team}</span>
                </div>
            </div>
        </NavLink>

    )
}

export default PlayersCard
