import React from 'react'
import {NavLink} from "react-router-dom";
import s from "../../../assets/Style/CardLayout.module.css";


const TeamsCard = (props: any) => {
    return (
        <NavLink to='/teamsCardDetails' >
            <div className={s.cardLayout}>
                <div className={`${s.cardLayout_image} ${props.face}`}>
                    <img src={props.img} alt="img"/>
                </div>
                <div className={s.cardLayout_description}>
                    <span>Portland trail blazers</span>
                    <span>Year of foundation: 1970</span>
                </div>
            </div>
            {/*<CardLayout img={props.img} />*/}
        </NavLink>

    )
}


export default TeamsCard
