import React, {useEffect, useState} from 'react';
import {
    getPlayersData,
    getSerialPlayerID,
    getSerialTeamID,
    getTeamsData,
} from '../../../Redux/toolkit/selectors';
import s from '../../../assets/Style/CardDetails/CardDetails.module.css'
import total from '../../../totalStyle.module.css'
import {connect} from "react-redux";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import {deletePlayer, getPlayer} from "../../../Redux/toolkit/playersReducer";
import {getTeam} from "../../../Redux/toolkit/teamsReducer.ts";


const PlayersCardDetails = (props: any) => {
    //debugger
    const [age, setAge] = useState<null | number>(null)

    let dataPlayer = props.players[props.serialPlayerID]
    let currentTeamName = props.team[props.serialPlayerID].name
    let ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'


    let deletePlayers = () => {
        props.deletePlayer(props.players.id)
    }

    const getAgePlayer = () => {
        let currentBirthday: string = dataPlayer.birthday.slice(0, 4)
        const currentYear = new Date().getFullYear()

        const result = currentYear - (Number(currentBirthday))

        setAge(result)
        return result
    }

    if (dataPlayer.birthday && age === null) {

        let age = getAgePlayer()

        setAge(age)
    }

    return (
        <div className={s.cardDetails_wrapper}>

            <BreadCrumbs katigories={'Players'} delete={deletePlayers}
                         pathAfterDeletion={'players'} name={dataPlayer.name}
                         editPath={'addPlayer'}
            />

            <div className={s.cardDetails}>
                <div className={s.cardDetails_img}>
                    <img src={`${ROOT_IMAGES}${dataPlayer.avatarUrl}`} alt="img"/>
                </div>
                <div className={s.cardDetails_info}>
                    <h1 className={total.text_big}>
                        {dataPlayer.name}
                        <span> #{dataPlayer.number}</span>
                    </h1>
                    <div className={s.cardDetails_description}>
                        <div className={s.cardDetails_description_main}>
                            <div className={s.cardDetails_skill}>
                                <h3 className={total.text_middle}>Position</h3>
                                <span className={total.text_small}>
                                {dataPlayer.position}
                            </span>
                            </div>
                            <div className={s.cardDetails_skill}>
                                <h3 className={total.text_middle}>Team</h3>
                                <span className={total.text_small}>
                                {currentTeamName}
                            </span>
                            </div>
                        </div>

                        <div className={s.cardDetails_description_main}>
                            <div className={s.cardDetails_skill}>
                                <h3 className={total.text_middle}>Height</h3>
                                <span className={total.text_small}>
                                {dataPlayer.height} cm
                            </span>
                            </div>
                            <div className={s.cardDetails_skill}>
                                <h3 className={total.text_middle}>Weight</h3>
                                <span className={total.text_small}> {dataPlayer.weight} kg </span>
                            </div>
                        </div>

                        <div className={s.cardDetails_description_main}>
                            <div className={s.cardDetails_skill}>
                                <h3 className={total.text_middle}>Age</h3>
                                <span className={total.text_small}> {age} </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state: any) => ({
    //player: state.players.data,
    players: getPlayersData(state),
    //teams: getTeamsNames(state),
    team: getTeamsData(state),
    serialPlayerID: getSerialPlayerID(state),
    serialTeamsID: getSerialTeamID(state)
})

export default connect(mapStateToProps, {getTeam, getPlayer, deletePlayer})(PlayersCardDetails)