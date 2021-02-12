import React, {useEffect} from 'react'
import s from './Players.module.css'
import TopInnerElement from "../TopInnerElement/TopInnerElement";
import PlayersCard from "./PlayerCard/PlayersСard";
import Pagination from "../Pagination/Pagiation";
import {connect} from "react-redux";
import {getPlayer} from "../../Redux/toolkit/playersReducer";
import {getAvatarUrl, getCurrentPlayers, getPlayersID} from '../../Redux/toolkit/selectors';

const Players = (props: any) => {
debugger
    useEffect(() => {
        props.getPlayer(props.playersID)
    }, [])


    return (
        <div className={s.players}>
            <TopInnerElement/>
            <div className={s.players_card}>

                {props.players.avatarUrl.map((P: any) =>
                    <PlayersCard key={P} avatar={props.avatar} players={props.players}/>
                )}


            </div>
            <Pagination/>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    players: getCurrentPlayers(state),
    avatar: getAvatarUrl(state),
    playersID: getPlayersID(state),
    state: state
})
export default connect(mapStateToProps, {getPlayer})(Players)

