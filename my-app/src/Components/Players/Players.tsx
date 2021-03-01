import React, {useEffect} from 'react'

import s from './Players.module.css'
import PlayerCard from "./PlayerCard/PlayersСard";
import Pagination from "../Pagination/Pagiation";
import {connect} from "react-redux";
import {
    getAvatarUrl, getPagePlayer, getPageSizePlayer,
    getPlayerName, getPlayersCount,
    getPlayersID,
    getPlayersNames,
    getPlayersNumber, getTeamsNames, getUserName
} from '../../Redux/toolkit/selectors';
import {NavLink, Redirect} from "react-router-dom";
import total from "../../totalStyle.module.css";
import searchIcon from "../../assets/images/search.png";
import {setPlayersRequest, getPlayers, setSerialPlayersID} from "../../Redux/toolkit/playersReducer";
import {setTeamSerialId} from "../../Redux/toolkit/teamsReducer.ts";
import SelectComponent from "../SelectComponent/SelectComponent";


const Players = (props: any) => {
    //debugger

    useEffect(() => {
        props.getPlayers(props.name, props.pagePlayer, props.pageSizePlayer)
    }, [props.pagePlayer, props.pageSizePlayer])

    let ABC = (id: number, team: number) => {
        props.setSerialPlayersID(id)
        props.setTeamSerialId(team)
    }

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
                        {props.players.map((players: any, index: number) =>
                            <NavLink key={players.id} onClick={() => ABC(players.id, players.team)}
                                     to='/main/playersCardDetails'>
                                <PlayerCard key={players.id}
                                            index={index}
                                            players={players}

                                />
                            </NavLink>
                        )}
                    </div>
                    <Pagination pageCount={props.playersCount} setRequest={props.setPlayersRequest}/>
                </div>
                : <Redirect to="/main/players_E"/>
            }
        </>
    )
}


const mapStateToProps = (state: any) => ({
    name: getUserName(state),
    playersCount: getPlayersCount(state),
    playersPage: getPagePlayer(state),
    avatar: getAvatarUrl(state),
    playersID: getPlayersID(state),
    number: getPlayersNumber(state),
    playersName: getPlayersNames(state),
    avatarUrl: getAvatarUrl(state),
    playerName: getPlayerName(state),
    teams: getTeamsNames(state),
    pagePlayer: getPagePlayer(state),
    pageSizePlayer: getPageSizePlayer(state),
})
export default connect(mapStateToProps, {setPlayersRequest, getPlayers, setSerialPlayersID, setTeamSerialId})(Players)

