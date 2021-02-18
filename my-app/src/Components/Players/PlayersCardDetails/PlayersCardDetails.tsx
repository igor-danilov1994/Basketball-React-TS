import React from 'react';
import {getPlayersData, getSerialPlayerID, getTeamsNames} from '../../../Redux/toolkit/selectors';
import s from '../../../assets/Style/CardDetails/CardDetails.module.css'
import total from '../../../totalStyle.module.css'
import {connect} from "react-redux";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";

const PlayersCardDetails = (props: any) => {

    let dataPlayers = props.players[props.serialPlayerID]
    let currentTeamName = props.teams[props.serialPlayerID]
    let ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'

    return (
        <div className={s.cardDetails_wrapper}>

            <BreadCrumbs katigories={'Players'} name={dataPlayers.name} />

            <div className={s.cardDetails}>
                <div className={s.cardDetails_img}>
                    <img src={`${ROOT_IMAGES}${dataPlayers.avatarUrl}`} alt="img"/>
                </div>
                <div className={s.cardDetails_info}>
                    <h1 className={total.text_big}>
                        {dataPlayers.name}
                        <span> #{dataPlayers.number}</span>
                    </h1>
                    <div className={s.cardDetails_description}>
                        <div className={s.cardDetails_description_main}>
                            <div className={s.cardDetails_skill}>
                                <h3 className={total.text_middle}>Position</h3>
                                <span className={total.text_small}>
                                {dataPlayers.position}
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
                                {dataPlayers.height} cm
                            </span>
                            </div>
                            <div className={s.cardDetails_skill}>
                                <h3 className={total.text_middle}>Weight</h3>
                                <span className={total.text_small}> {dataPlayers.weight} kg </span>
                            </div>
                        </div>

                        <div className={s.cardDetails_description_main}>
                            <div className={s.cardDetails_skill}>
                                <h3 className={total.text_middle}>Age</h3>
                                <span className={total.text_small}> {dataPlayers.birthday} </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state: any) => ({
    players: getPlayersData(state),
    teams: getTeamsNames(state),
    serialPlayerID: getSerialPlayerID(state)
})

export default connect(mapStateToProps)(PlayersCardDetails)