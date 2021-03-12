import React, {useState} from 'react';
import {getPlayersData, getSerialPlayerID, getTeamsData,} from '../../../Redux/toolkit/selectors';
import s from '../../../assets/Style/CardDetails/CardDetails.module.css'
import total from '../../../totalStyle.module.css'
import {connect} from "react-redux";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import {deletePlayer} from "../../../Redux/toolkit/playersReducer";
import {AppStateType} from "../../../Redux/toolkit/redux-store";

type MapStatePropsType = {
    serialPlayerID: number | null
    players: Array<any>
    team: Array<any>
}
type MapDispatchPropsType = {
    deletePlayer: (id: number) => void
}

type PlayersCardDetailsPropsType = MapDispatchPropsType & MapStatePropsType

const PlayersCardDetails: React.FC <PlayersCardDetailsPropsType> = (
    {serialPlayerID, players, team, deletePlayer,   }) => {

    const [age, setAge] = useState<null | number>(null)

    let dataPlayer = players[serialPlayerID!]
    let currentTeamName = team[serialPlayerID!].name
    let ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'

    let deletePlayers = () => {
        deletePlayer(dataPlayer.id)
    }

    const getAgePlayer = () => {
        let currentBirthday: string = dataPlayer.birthday.slice(0, 4)
        const currentYear = new Date().getFullYear()

        const result = currentYear - (Number(currentBirthday))

        setAge(result)
        return result
    }

    if (dataPlayer.birthday && age === null) {

        let age = getAgePlayer()

        setAge(age)
    }

    return (
        <div className={s.cardDetails_wrapper}>

            <BreadCrumbs katigories={'Players'} deleteItem={deletePlayers}
                         pathAfterDeletion={'players'} name={dataPlayer.name}
                         editPath={'addPlayer'}
            />

            <div className={s.cardDetails}>
                <div style={{alignItems: "flex-end"}} className={s.cardDetails_img}>
                    <img style={{width: "100%"}} src={`${ROOT_IMAGES}${dataPlayer.avatarUrl}`} alt="img"/>
                </div>
                <div className={s.cardDetails_info}>
                    <h1 className={total.text_big}>
                        {dataPlayer.name}
                        <span> #{dataPlayer.number}</span>
                    </h1>
                    <div className={s.cardDetails_description}>
                        <div className={s.cardDetails_description_main}>
                            <div className={s.cardDetails_skill}>
                                <h3 className={total.text_middle}>Position</h3>
                                <span className={total.text_small}>
                                {dataPlayer.position}
                            </span>
                            </div>
                            <div className={s.cardDetails_skill}>
                                <h3 className={total.text_middle}>Team</h3>
                                <span className={total.text_small}>
                                {currentTeamName}
                            </span>
                            </div>
                        </div>

                        <div className={s.cardDetails_description_main}>
                            <div className={s.cardDetails_skill}>
                                <h3 className={total.text_middle}>Height</h3>
                                <span className={total.text_small}>
                                {dataPlayer.height} cm
                            </span>
                            </div>
                            <div className={s.cardDetails_skill}>
                                <h3 className={total.text_middle}>Weight</h3>
                                <span className={total.text_small}> {dataPlayer.weight} kg </span>
                            </div>
                        </div>

                        <div className={s.cardDetails_description_main}>
                            <div className={s.cardDetails_skill}>
                                <h3 className={total.text_middle}>Age</h3>
                                <span className={total.text_small}> {age} </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    players: getPlayersData(state),
    team: getTeamsData(state),
    serialPlayerID: getSerialPlayerID(state)
})

export default connect(mapStateToProps, {deletePlayer})(PlayersCardDetails)