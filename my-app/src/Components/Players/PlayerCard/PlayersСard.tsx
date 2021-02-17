import React from 'react'
import s from "../../../assets/Style/CardLayout/CardLayout.module.css";
import {connect} from "react-redux";
import {setSerialPlayersID} from "../../../Redux/toolkit/playersReducer";

const ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'

const PlayerCard = (props: any) => {

    let setPlayersId = (id: number) => {
        props.setSerialPlayersID(id)
    }

    return (
        <div onClick={() => setPlayersId(props.id)} className={s.cardLayout}>
            <div className={`${s.cardLayout_image} ${s.cardLayout_face}`}>
                <img src={` ${ROOT_IMAGES}${props.avatarUrl}`} alt="avatar"/>
            </div>
            <div className={s.cardLayout_description}>
                    <span>{props.playerName}
                        <span>#{props.playersNumber}</span>
                    </span>
                <span>{props.teams}</span>
            </div>
        </div>
    )
}


export default connect(null, {setSerialPlayersID})(PlayerCard)
