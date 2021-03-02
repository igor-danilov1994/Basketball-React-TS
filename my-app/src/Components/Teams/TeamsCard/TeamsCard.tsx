import React from 'react'
import s from "../../../assets/Style/CardLayout/CardLayout.module.css";
import {connect} from "react-redux";

const ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'

const TeamsCard = (props: any) => {
 //debugger
    return (
        <div className={s.cardLayout}>
            <div className={`${s.cardLayout_image} ${props.team.face}`}>
                <img src={`${ROOT_IMAGES}${props.team.imageUrl}`} alt="img"/>
            </div>
            <div className={s.cardLayout_description}>
                <span> {props.team.name} </span>
                <span>Year of foundation: {props.team.foundationYear}</span>
            </div>
        </div>

    )
}

export default connect()(TeamsCard)
