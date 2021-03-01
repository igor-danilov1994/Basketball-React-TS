import React from 'react'
import s from "../../../assets/Style/CardLayout/CardLayout.module.css";
import {connect} from "react-redux";

const ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'

const TeamsCard = (props: any) => {
    return (
        <div className={s.cardLayout}>
            <div className={`${s.cardLayout_image} ${props.face}`}>
                <img src={`${ROOT_IMAGES}${props.imageUrl}`} alt="img"/>
            </div>
            <div className={s.cardLayout_description}>
                <span> {props.name} </span>
                <span>Year of foundation: {props.foundationYear}</span>
            </div>
        </div>

    )
}

export default connect()(TeamsCard)
