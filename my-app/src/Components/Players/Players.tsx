import React from 'react'
import s from './Players.module.css'
import TopInnerElement from "../TopInnerElement/TopInnerElement";
import PlayersCard from "./PlayerCard/PlayersСard";
import photo1 from './images/photo1.png'
import photo2 from './images/photo2.png'
import photo3 from './images/photo3.png'
import photo4 from './images/photo4.png'
import photo5 from './images/photo5.png'
import photo6 from './images/photo6.png'
import Pagination from "../Pagination/Pagiation";
import {connect} from "react-redux";
import {getPlayer} from "../../Redux/playersReducer";

const Players = (props: any) => {
    //debugger
    if (props.players.position.length === 0){
        //props.getPlayer()
    }

    return (
        <div className={s.players}>
            <TopInnerElement/>
            <div className={s.players_card}>
                <PlayersCard img={photo1}/>
                <PlayersCard img={photo2}/>
                <PlayersCard img={photo3}/>
                <PlayersCard img={photo4}/>
                <PlayersCard img={photo5}/>
                <PlayersCard img={photo6}/>
            </div>
            <Pagination/>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    players: state.players,
    state: state
})
export default connect(mapStateToProps, {getPlayer})(Players)

