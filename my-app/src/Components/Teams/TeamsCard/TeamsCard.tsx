import React from 'react'
import s from "../../../assets/Style/CardLayout/CardLayout.module.css"

const ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'

type teamType = {
    imageUrl: string
    face: string
    name: string
    foundationYear: number
}

type TeamsCardPropsType = {
    team: teamType
}

const TeamsCard: React.FC <TeamsCardPropsType> = ({team}) => {

    return (
        <div className={s.cardLayout}>
            <div className={`${s.cardLayout_image} ${team.face}`}>
                <img src={`${ROOT_IMAGES}${team.imageUrl}`} alt="img"/>
            </div>
            <div className={s.cardLayout_description}>
                <span> {team.name} </span>
                <span>Year of foundation: {team.foundationYear}</span>
            </div>
        </div>
    )
}

export default TeamsCard
