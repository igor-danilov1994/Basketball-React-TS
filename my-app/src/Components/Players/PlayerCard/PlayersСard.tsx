import React from 'react'
import s from "../../../assets/Style/CardLayout/CardLayout.module.css";
import {connect} from "react-redux";
import {setSerialPlayersID} from "../../../Redux/toolkit/playersReducer";
import {getTeamsNames} from "../../../Redux/toolkit/selectors";

const ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'

const PlayerCard = (props: any) => {
    //debugger
    return (
        <div className={s.cardLayout}>
            <div className={`${s.cardLayout_image} ${s.cardLayout_face}`}>
                <img src={` ${ROOT_IMAGES}${props.players.avatarUrl}`} alt="avatar"/>
            </div>
            <div className={s.cardLayout_description}>
                    <span>{props.players.name}
                        <span>#{props.players.number}</span>
                    </span>
                <span>{props.team[props.index]}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    team: getTeamsNames(state)
})


export default connect(mapStateToProps, {})(PlayerCard)
