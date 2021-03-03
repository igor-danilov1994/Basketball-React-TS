import React, {useEffect, useState} from 'react'
import s from "../../../assets/Style/CardLayout/CardLayout.module.css";
import {connect} from "react-redux";
import {getTeamsForId, getTeamsNames} from "../../../Redux/toolkit/selectors";
import {setTeamSerialId} from "../../../Redux/toolkit/teamsReducer.ts";

const ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'

const PlayerCard = (props: any) => {

    const [nameTeam, setNameTeam] = useState('')

    useEffect(() => {
        //console.log(props.teamId)
        props.setTeamSerialId(props.teamId)
    }, [])


    if (props.teamName.length > 0 && nameTeam === '') {
        setNameTeam(props.teamName[0].name)
    }

    return (
        <div className={s.cardLayout}>
            <div className={`${s.cardLayout_image} ${s.cardLayout_face}`}>
                <img src={` ${ROOT_IMAGES}${props.player.avatarUrl}`} alt="avatar"/>
            </div>
            <div className={s.cardLayout_description}>
                    <span>{props.player.name}
                        <span>#{props.player.number}</span>
                    </span>
                {/*<span>{props.teamName[props.index]}</span> */}
                <span>{nameTeam}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    teamName: getTeamsForId(state)
})


export default connect(mapStateToProps, {setTeamSerialId})(PlayerCard)
