import React from 'react'
import s from './CardEmpty.module.css'
import total from '../../totalStyle.module.css'

import {NavLink} from "react-router-dom";

function CardEmpty(props: any) {
    return (
        <div className={s.card}>
            <img src={props.img} alt="img"/>
            <h1>Empty here</h1>
            <span>Add new players to continue</span>

            <NavLink to={props.patch}
                     className={`${total.btn} ${total.btn_add}`}>
                Add +
            </NavLink>
        </div>
    )
}

export default CardEmpty;
