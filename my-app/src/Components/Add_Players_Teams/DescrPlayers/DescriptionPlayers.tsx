import React from 'react';
import s from "./DescriptionPlayers.module.css";

const DescriptionPlayers = (props: any) => {
    return (
        <div className={s.properties}>
            <div className={s.properties_options}>
                <div className={s.properties_data}>
                    <label htmlFor="">{props.descriptionPlayersLabel[0]}</label>
                    <input type="text"/>
                </div>
                <div className={s.properties_data}>
                    <label htmlFor="">{props.descriptionPlayersLabel[1]}</label>
                    <input type="text"/>
                </div>
            </div>

            <div className={s.properties_options}>
                <div className={s.properties_data}>
                    <label htmlFor="">{props.descriptionPlayersLabel[2]}</label>
                    <input type="text"/>
                </div>
                <div className={s.properties_data}>
                    <label htmlFor="">{props.descriptionPlayersLabel[3]}</label>
                    <input type="text"/>
                </div>
            </div>
        </div>
    )
}

export default DescriptionPlayers;