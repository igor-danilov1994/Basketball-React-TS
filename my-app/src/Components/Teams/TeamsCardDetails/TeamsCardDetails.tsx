import React from 'react';
import {getPlayersData, getSerialTeamID, getTeamsData} from '../../../Redux/toolkit/selectors';
import s from '../../../assets/Style/CardDetails/CardDetails.module.css'
import total from '../../../totalStyle.module.css'
import {connect} from "react-redux";

const TeamsCardDetails = (props: any) => {

    let dataTeams = props.teams[props.serialTeamID]
    let ROOT_IMAGES: string = 'http://dev.trainee.dex-it.ru'

    return (
        <div className={s.cardDetails}>
            <div className={s.cardDetails_img}>
                <img src={`${ROOT_IMAGES}${dataTeams.imageUrl}`} alt="img"/>
            </div>
            <div className={s.cardDetails_info}>
                <h1 className={total.text_big}>
                    {dataTeams.name}
                </h1>
                <div className={s.cardDetails_description}>
                    <div className={s.cardDetails_description_main}>
                        <div className={s.cardDetails_skill}>
                            <h3 className={total.text_middle}>Year of foundation</h3>
                            <span className={total.text_small}>
                                {dataTeams.foundationYear}
                            </span>
                        </div>

                        <div className={s.cardDetails_skill}>
                            <h3 className={total.text_middle}>Division</h3>
                            <span className={total.text_small}>
                                {dataTeams.division}
                            </span>
                        </div>
                    </div>

                    <div className={s.cardDetails_description_main}>
                        <div className={s.cardDetails_skill}>
                            <h3 className={total.text_middle}>Conference</h3>
                            <span className={total.text_small}>
                                {dataTeams.conference}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state: any) => ({
    players: getPlayersData(state),
    teams: getTeamsData(state),
    serialTeamID: getSerialTeamID(state)
})

export default connect(mapStateToProps)(TeamsCardDetails)