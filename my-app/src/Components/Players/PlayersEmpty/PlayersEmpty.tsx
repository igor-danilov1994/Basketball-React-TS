import React from 'react'
import s from './PlayersEmpty.module.css'
import img from '../images/illustration.png'
import f from '../../../totalStyle.module.css'

function PlayersEmpty() {
    return (
        <div className={s.players_E}>
            <div className={s.players_E_notification}>
                <img src={img} alt="img"/>
                <h1>Empty here</h1>
                <span>Add new players to continue</span>
                <button className={`${f.btn} ${s.players_E_btn}`}> Add + </button>
            </div>
        </div>
    )
}

export default PlayersEmpty;
