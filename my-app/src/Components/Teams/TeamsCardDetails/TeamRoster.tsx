import React, {useEffect, useState} from 'react';
import {
    getPagePlayer,
    getPageSizePlayer,
    getPlayersCount,
    getPlayersOfCurrentTeam,
    getUserName
} from '../../../Redux/toolkit/selectors';
import s from '../../../assets/Style/CardDetails/CardDetails.module.css'
import total from '../../../totalStyle.module.css'
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {getPlayers} from "../../../Redux/toolkit/playersReducer";

const TeamRoster = (props: any) => {
    //debugger

    const [page, setPage] = useState(props.pagePlayer)

    useEffect(() => {
        props.getPlayers(props.name, props.pagePlayer, props.count)
    }, [])

    let ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'

    return (
        <div className={s.cardDetails_roster}>
            <h1 className={total.text_small}>Roster</h1>
            <table>
                <thead>
                <tr>
                    <td>#</td>
                    <td><span>Player</span></td>
                    <td><span>Height</span></td>
                    <td><span>Weight</span></td>
                    <td><span>Age</span></td>
                </tr>
                </thead>
                <tbody>
                {props.playersOfCurrentTeam.map((player: any) =>
                    <NavLink key={player.id} to='/main/playersCardDetails'>
                        <tr>
                            <td>
                                <span>{player.number}</span>
                            </td>
                            <td>
                                <div className={s.cardDetails_roster_info}>
                                    <div className={s.cardDetails_roster_info_img}>
                                        <img src={`${ROOT_IMAGES}${player.avatarUrl}`} alt="img"/>
                                    </div>
                                    <div className={s.cardDetails_roster_info_descr}>
                                        <span>{player.name}</span>
                                        <span>{player.position}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span>{player.height}</span>
                            </td>
                            <td>
                                <span>{player.weight}</span>
                            </td>
                            <td>
                                <span>{player.number}</span>
                            </td>
                            <td>
                                <span>{player.age}</span>
                            </td>
                        </tr>
                    </NavLink>
                )}


                </tbody>
            </table>


            {/*
                {props.players.map((player: any, id: number) =>
                    <NavLink key={player.id} to='/main/playersCardDetails'>
                        <li>


                        </li>
                    </NavLink>
                )}

            </ul>*/}
        </div>
    )
}

let mapStateToProps = (state: any) => ({
    name: getUserName(state),
    count: getPlayersCount(state),
    pagePlayer: getPagePlayer(state),
    pageSizePlayer: getPageSizePlayer(state),
    playersOfCurrentTeam: getPlayersOfCurrentTeam(state),
    //serialTeamsID: getSerialTeamID(state)
})


export default connect(mapStateToProps, {getPlayers})(TeamRoster)