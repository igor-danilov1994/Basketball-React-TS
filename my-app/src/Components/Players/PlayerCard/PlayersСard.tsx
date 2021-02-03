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
                    <img src={props.img} alt="img"/>
                </div>
                <div className={s.cardLayout_description}>
                    <span>{}
                        <span>#{}</span>
                    </span>
                    <span></span>
                </div>
            </div>
        </NavLink>

    )
}

export default PlayersCard
