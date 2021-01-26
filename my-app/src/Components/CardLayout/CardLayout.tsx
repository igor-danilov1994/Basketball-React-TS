import React from 'react';
import s from './CardLayout.module.css'

const CardLayout = (props: any) => {
    return (
        <div className={s.cardLayout}>
            <div className={`${s.cardLayout_image} ${props.face}`}>
                <img src={props.img} alt="img"/>
            </div>
            <div className={s.cardLayout_description}>
                <span>1</span>
                <span>2</span>
            </div>
        </div>
    )
}

export default CardLayout;