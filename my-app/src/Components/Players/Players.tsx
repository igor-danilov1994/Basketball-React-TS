import React, {useEffect} from 'react'
import s from './Players.module.css'
import TopInnerElement from "../TopInnerElement/TopInnerElement";
import PlayersCard from "./PlayerCard/PlayersСard";
import Pagination from "../Pagination/Pagiation";
import {connect} from "react-redux";
import {getPlayer} from "../../Redux/toolkit/playersReducer";

const Players = (props: any) => {

    useEffect(() => {
        props.getPlayer(props.state.auth.token)
    }, [])


    return (
        <div className={s.players}>
            <TopInnerElement/>
            <div className={s.players_card}>

                {props.players.avatarUrl.map((P: any) =>
                    <PlayersCard key={P} avatar={props.avatar} players={props.players}/>
                )} Вывод списка игроков


            </div>
            <Pagination/>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    players: state.players,
    avatar: state.players.avatarUrl,
    state: state
})
export default connect(mapStateToProps, {getPlayer})(Players)

