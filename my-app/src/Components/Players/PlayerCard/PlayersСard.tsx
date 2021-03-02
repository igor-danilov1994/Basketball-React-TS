import React from 'react'
import s from "../../../assets/Style/CardLayout/CardLayout.module.css";
import {connect} from "react-redux";
import {getTeamsNames} from "../../../Redux/toolkit/selectors";

const ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'

const PlayerCard = (props: any) => {
    //debugger
    return (
        <div className={s.cardLayout}>
            <div className={`${s.cardLayout_image} ${s.cardLayout_face}`}>
                <img src={` ${ROOT_IMAGES}${props.player.avatarUrl}`} alt="avatar"/>
            </div>
            <div className={s.cardLayout_description}>
                    <span>{props.player.name}
                        <span>#{props.player.number}</span>
                    </span>
                <span>{props.teamName[props.index]}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    teamName: getTeamsNames(state)
})


export default connect(mapStateToProps, {})(PlayerCard)
