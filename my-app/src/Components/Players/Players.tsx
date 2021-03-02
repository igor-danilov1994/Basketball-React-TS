import React, {useEffect} from 'react'

import s from './Players.module.css'
import PlayerCard from "./PlayerCard/PlayersСard";
import Pagination from "../Pagination/Pagiation";
import {connect} from "react-redux";
import {
    getPagePlayer, getPageSizePlayer,
    getPlayersCount,
    getPlayersNames,
    getTeamsNames, getUserName
} from '../../Redux/toolkit/selectors';
import {NavLink, Redirect} from "react-router-dom";
import total from "../../totalStyle.module.css";
import searchIcon from "../../assets/images/search.png";
import {setPlayersRequest, getPlayers, setSerialPlayersID} from "../../Redux/toolkit/playersReducer";
import {getTeams, setTeamSerialId} from "../../Redux/toolkit/teamsReducer.ts";
import SelectComponent from "../SelectComponent/SelectComponent";


const Players = (props: any) => {

    useEffect(() => {
        //debugger
        props.getPlayers(props.name, props.pagePlayer, props.pageSizePlayer)
        props.getTeams(props.name, props.pagePlayer, props.pageSizePlayer)
    }, [props.pagePlayer, props.pageSizePlayer])

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
                            <NavLink key={players.id} onClick={() => props.setSerialPlayersID(index)}
                                     to='/main/playersCardDetails'>
                                <PlayerCard key={index} index={index}
                                            player={players}

                                />
                            </NavLink>
                        )}
                    </div>
                    <Pagination
                        page={props.pagePlayer}
                        pageSize={props.pageSizePlayer}
                        pageCount={props.playersCount}
                        setRequest={props.setPlayersRequest}/>
                </div>
                : <Redirect to="/main/players_E"/>
            }
        </>
    )
}


const mapStateToProps = (state: any) => ({
    name: getUserName(state),
    playersCount: getPlayersCount(state),
    pagePlayer: getPagePlayer(state),
    playersName: getPlayersNames(state),
    teamsName: getTeamsNames(state),
    pageSizePlayer: getPageSizePlayer(state),
})
export default connect(mapStateToProps, {getTeams, setPlayersRequest, getPlayers, setSerialPlayersID, setTeamSerialId})(Players)

