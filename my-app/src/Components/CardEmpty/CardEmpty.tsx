import React from 'react'
import s from './CardEmpty.module.css'
import total from '../../totalStyle.module.css'
import {NavLink} from "react-router-dom";

type CardEmptyPropsType = {
    img: string
    descr: string
    patch: string
}

const CardEmpty: React.FC <CardEmptyPropsType> = ({img, descr, patch}) => {
    return (
        <div className={s.card}>
            <img src={img} alt="img"/>
            <h1 className={`${total.text_big} ${total.text}`}>Empty here</h1>
            <span className={`${total.text_middle14} ${total.text}`}>Add new {descr} to continue</span>

            <NavLink to={patch} className={`${total.btn} ${total.btn_add}`}>
                Add +
            </NavLink>
        </div>
    )
}

export default CardEmpty
