import React from 'react'
import s from './Players.module.css'
import TopInnerElement from "../TopInnerElement/TopInnerElement";
import PlayerCard from "./PlayerCard/PlayersСard";
import Pagination from "../Pagination/Pagiation";
import {connect} from "react-redux";
import {
    getAvatarUrl,
    getCurrentPlayers, getPlayerName, getPlayersCount,
    getPlayersID,
    getPlayersNames,
    getPlayersNumber, getTeamsNames
} from '../../Redux/toolkit/selectors';
import {NavLink, Redirect} from "react-router-dom";

const Players = (props: any) => {

    return (
        <div>
            {props.playersCount !== 0 ?
                <div className={s.players}>
                    <TopInnerElement/>
                    <div className={s.players_card}>
                        {props.players.map((players: any, id: number) =>
                            <NavLink key={players.id} to='/main/playersCardDetails'>
                                <PlayerCard key={players.id} playerName={players.name}
                                            avatarUrl={players.avatarUrl}
                                            playersNumber={players.number}
                                            teams={props.teams[id]}
                                            id={id}
                                />
                            </NavLink>
                        )}
                    </div>
                    <Pagination/>
                </div>
                : <Redirect to="/main/players_E"/>
            }
        </div>
    )
}


const mapStateToProps = (state: any) => ({
    playersCount: getPlayersCount(state),
    avatar: getAvatarUrl(state),
    playersID: getPlayersID(state),
    number: getPlayersNumber(state),
    playersName: getPlayersNames(state),
    avatarUrl: getAvatarUrl(state),
    playerName: getPlayerName(state),
    teams: getTeamsNames(state),
})
export default connect(mapStateToProps)(Players)

