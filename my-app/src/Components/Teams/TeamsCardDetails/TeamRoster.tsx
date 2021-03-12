import React, {useEffect, useState} from 'react';
import {getPagePlayer, getPageSizePlayer, getPlayersCount,
    getPlayersOfCurrentTeam, getUserName} from '../../../Redux/toolkit/selectors';
import s from '../../../assets/Style/CardDetails/CardDetails.module.css'
import total from '../../../totalStyle.module.css'
import {connect} from "react-redux";
import {setPlayersRequest, getPlayers} from "../../../Redux/toolkit/playersReducer";
import {setTeamSerialId} from "../../../Redux/toolkit/teamsReducer";

const TeamRoster = (props: any) => {

    const [page, setPage] = useState(props.pagePlayer)
    const [count, setCount] = useState(props.count)

    let result = props.count - 25

    useEffect(() => {
        props.getPlayers(props.name, 1, count)
    }, [])

    let ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'

    const getAgePlayer = (birthday: string) => {
        let currentBirthday: string = birthday.slice(0, 4)
        const currentYear = new Date().getFullYear()

        const result = currentYear - (Number(currentBirthday))
        return result
    }

    return (
        <div className={s.cardDetails_roster}>
            <h1 className={total.text_small}>Roster</h1>
            <table>
                <thead>
                <tr>
                    <td>#</td>
                    <td>
                        <span className={total.text_middle14}>Player</span>
                    </td>
                    <td>
                        <span className={total.text_middle14}>Height</span>
                    </td>
                    <td>
                        <span className={total.text_middle14}>Weight</span>
                    </td>
                    <td>
                        <span className={total.text_middle14}>Age</span>
                    </td>
                </tr>
                </thead>
                <tbody>
                {props.playersOfCurrentTeam.map((player: any) =>
                    <tr key={player.id}>
                        <td>
                            <span className={total.text_middle14}>{player.number}</span>
                        </td>
                        <td>
                            <img src={`${ROOT_IMAGES}${player.avatarUrl}`} alt="img"/>
                        </td>
                        <td>
                            <div className={s.cardDetails_roster_info}>
                                <div className={s.cardDetails_roster_info_descr}>
                                    <span className={total.text__middle14}>{player.name}</span>
                                    <span className={total.text_extraSmall}>{player.position}</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className={total.text_middle14}>{player.height} cm</span>
                        </td>
                        <td>
                            <span className={total.text_middle14}>{player.weight} kg</span>
                        </td>
                        <td>
                            <span className={total.text_middle14}>{player.number}</span>
                        </td>
                        <td>
                            <span className={total.text_middle14}>{getAgePlayer(player.birthday)}</span>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

let mapStateToProps = (state: any) => ({
    name: getUserName(state),
    count: getPlayersCount(state),
    pagePlayer: getPagePlayer(state),
    pageSizePlayer: getPageSizePlayer(state),
    playersOfCurrentTeam: getPlayersOfCurrentTeam(state),
})


export default connect(mapStateToProps, {setTeamSerialId, setPlayersRequest, getPlayers})(TeamRoster)