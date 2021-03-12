import React, {useEffect, useState} from 'react'
import s from "../../../assets/Style/CardLayout/CardLayout.module.css"
import total from "../../../totalStyle.module.css"
import {connect} from "react-redux"
import {getTeamsForId} from "../../../Redux/toolkit/selectors"
import {setTeamSerialId} from "../../../Redux/toolkit/teamsReducer"
import {AppStateType} from "../../../Redux/toolkit/redux-store";

const ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'

type MapStatePropsType = {
    teamName: Array<any>
}
type MapDispatchPropsType = {
    setTeamSerialId: (teamId: number) => void
}

type OwnPlayerCardPropsType = {
    teamId: number
    player: any
}


type PlayerCardPropsType = MapStatePropsType & OwnPlayerCardPropsType & MapDispatchPropsType

const PlayerCard: React.FC<PlayerCardPropsType> = (
    {setTeamSerialId, teamId, teamName, player,}) => {

    const [nameTeam, setNameTeam] = useState('')

    useEffect(() => {
        setTeamSerialId(teamId)
    }, [])


    if (teamName.length > 0 && nameTeam === '') {
        setNameTeam(teamName[0].name)
    }

    return (
        <div className={s.cardLayout}>
            <div className={`${s.cardLayout_image} ${s.cardLayout_face}`}>
                <img src={` ${ROOT_IMAGES}${player.avatarUrl}`} alt="avatar"/>
            </div>
            <div className={s.cardLayout_description}>
                    <span className={total.text_small}>
                        {player.name}
                        <span>#{player.number}</span>
                    </span>

                <span className={total.text_middle14}>{nameTeam}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    teamName: getTeamsForId(state)
})


export default connect(mapStateToProps, {setTeamSerialId})(PlayerCard)
