import React from 'react'
import s from './CardEmpty.module.css'
import total from '../../totalStyle.module.css'

import {NavLink} from "react-router-dom";

const CardEmpty = (props: any) => {
    return (
        <div className={s.card}>
            <img src={props.img} alt="img"/>
            <h1 className={`${total.text_big} ${total.text}`}>Empty here</h1>
            <span className={`${total.text_middle14} ${total.text}`}>Add new {props.descr} to continue</span>

            <NavLink to={props.patch}
                     className={`${total.btn} ${total.btn_add}`}>
                Add +
            </NavLink>
        </div>
    )
}

export default CardEmpty;
