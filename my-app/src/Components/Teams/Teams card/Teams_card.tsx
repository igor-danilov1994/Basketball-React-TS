import React from 'react'
import s from './Teams_card.module.css'
import logoCard1 from '../../../assets/images/logoCard1.png'


const Teams_card = () => {
    return (
        <div className={s.card_item}>
            <div className={s.card_logo}>
                <img src={logoCard1} alt="logo"/>
            </div>
            <div className={s.card_description}>
                <span>Portland trail blazers</span>
                <span>Year of foundation: 1970</span>
            </div>
        </div>
    )
}


export default Teams_card
