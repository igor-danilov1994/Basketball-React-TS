import React from 'react'

import s from './Players.module.css'
import PlayerCard from "./PlayerCard/PlayersСard";
import Pagination from "../Pagination/Pagiation";
import {connect} from "react-redux";
import {
    getAvatarUrl, getPagePlayer, getPageSizePlayer,
    getPlayerName, getPlayersCount,
    getPlayersID,
    getPlayersNames,
    getPlayersNumber, getTeamsNames
} from '../../Redux/toolkit/selectors';
import {NavLink, Redirect} from "react-router-dom";
import total from "../../totalStyle.module.css";
import searchIcon from "../../assets/images/search.png";
import {setPagePlayers} from "../../Redux/toolkit/playersReducer";
import SelectComponent from "../SelectComponent/SelectComponent";


const Players = (props: any) => {
    //debugger
    return (
        <>
            {props.playersCount !== 0 ?
                <div className={s.players}>
                    <div className={total.topElement}>
                        <div className={total.topElement_options}>
                            <div className={total.topElement_search}>
                                <input type="text" placeholder='Search...'/>
                                <img src={searchIcon} alt="search"/>
                            </div>
                            <SelectComponent options={props.playersName} isMulti={true}
                                             closeMenuOnSelect={false}
                            />
                        </div>

                        <NavLink to='/main/addPlayer'
                                 className={`${total.btn} ${total.btn_add} ${total.topElement_btn}`}>
                            <span>Add</span>
                            <span>+</span>
                        </NavLink>
                    </div>
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
                    <Pagination pageCount={props.playersCount} setPage={props.setPagePlayers}
                                page={props.playersPage} pageSize={props.pageSizePlayer}
                    />
                </div>
                : <Redirect to="/main/players_E"/>
            }
        </>
    )
}


const mapStateToProps = (state: any) => ({
    playersCount: getPlayersCount(state),
    playersPage: getPagePlayer(state),
    avatar: getAvatarUrl(state),
    playersID: getPlayersID(state),
    number: getPlayersNumber(state),
    playersName: getPlayersNames(state),
    avatarUrl: getAvatarUrl(state),
    playerName: getPlayerName(state),
    teams: getTeamsNames(state),
    pageSizePlayer: getPageSizePlayer(state)
})
export default connect(mapStateToProps, {setPagePlayers})(Players)

