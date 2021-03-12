import React, {useState} from 'react';
import f from "../../../assets/FornControl/FormControl.module.css";
import total from "../../../totalStyle.module.css";
import AddImages from "../../../assets/FornControl/AddImages/AddImages";
import Block_Buttons from "../../../assets/FornControl/Blocl_Buttons/Blocl_Buttons";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import arrowImg from '../../../assets/images/link.png'
import calendar from '../images/calendar.png'
import {savePlayers} from '../../../Redux/toolkit/playersReducer';
import {getPlayerName, getTeamsId, getTeamsNames} from '../../../Redux/toolkit/selectors';
import CalendarComponent from './Calendar/CalendarComponent';
import ErrorsMessage from "../../ErrorsMessage/ErrorsMessage";


const AddPlayer = (props: any) => {

    const {register, handleSubmit, errors} = useForm()
    const [activeRotatePosition, setActiveRotatePosition] = useState(false)
    const [activeRotateTeam, setActiveRotateTeam] = useState(false)
    const [activeImgLoading, setActiveImgLoading] = useState(false)
    const [showCalendar, setShowCalendar] = useState(false)
    const [birthday, onChangeBirthday] = useState('');
    const [birthdayData, onChangeBirthdayData] = useState('');

    let getBirthday = (date: any) => {
        let month = (date.getMonth() + 1)
        let FullYear = (date.getFullYear())
        let dayLast = date.getDate()
        let birthday: string = `${dayLast}.${month}.${FullYear}`

        onChangeBirthday(birthday)
        onChangeBirthdayData(date)
    }

    const onSubmit = (data: any) => {
        data.birthday = birthdayData
        props.savePlayers(data)
    }

    let setBirthday = (e: any) => {
        onChangeBirthday(e.target.value)
    }

    return (
        <div className={f.add}>
            <div className={total.breadCrumbs}>
                Main/Players/NamePlayers
            </div>
            <div className={f.add_form}>
                <div className={f.add_form_img} onClick={() => setActiveImgLoading(!activeImgLoading)}>
                    <AddImages/>
                    <input className={activeImgLoading ? `${f.active}` : ""}
                           name='avatarUrl' ref={register({required: true})}
                           accept="image/*"
                           type="file"/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className={f.add_form_data}>
                            <label className={total.text}>Name</label>
                            <input name='name' ref={register({required: true})} type="text"/>
                            {errors.name &&
                            <ErrorsMessage textMessage={'Name is required'}/>}
                        </div>
                        <div className={f.add_form_data}>
                            <label className={total.text}>Position</label>
                            <div className={total.select}
                                 onClick={() => setActiveRotatePosition(!activeRotatePosition)}>
                                <img
                                    className={activeRotatePosition ? `${total.select_imgRotateOn}` : `${total.select_imgRotateOff}`}
                                    src={arrowImg} alt="arrow"/>


                                <select name="position" ref={register({required: true})}>
                                    {props.positions.map((p: any) =>
                                        <option key={p} value={p}>{p}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className={f.add_form_data}>
                            <label className={total.text}>Team</label>
                            <div className={total.select} onClick={() => setActiveRotateTeam(!activeRotateTeam)}>
                                <img
                                    className={activeRotateTeam ? `${total.select_imgRotateOn}` : `${total.select_imgRotateOff}`}
                                    src={arrowImg} alt="arrow"/>
                                <select name="team" ref={register({required: true})}>
                                    {props.teamsName.map((names: any, id: number) =>
                                        <option key={props.teamsId[id]}
                                                value={props.teamsId[id]}>
                                            {names}
                                        </option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className={f.properties}>
                            <div className={f.properties_options}>
                                <div className={`${f.properties_data} ${f.add_form_data}`}>
                                    <label>Height (cm)</label>
                                    <input name='height' ref={register({required: true})}
                                           type="text"/>

                                    {errors.height &&
                                    <ErrorsMessage textMessage={'Height is required'}/>}
                                </div>
                                <div className={`${f.properties_data} ${f.add_form_data}`}>
                                    <label>Weight (kg)</label>
                                    <input name='weight' ref={register({required: true})} type="text"/>

                                    {errors.weight &&
                                    <ErrorsMessage textMessage={'Weight is required'}/>}
                                </div>
                            </div>
                            <div className={f.properties_options}>
                                <div className={`${f.properties_data} ${f.add_form_data}`}>
                                    <label>Birthday</label>
                                    <div className={`${f.properties_data_calendar}`}>
                                        <input placeholder='dd.mm.yy' value={birthday} onChange={setBirthday}
                                               name='birthday' ref={register({required: true})} type="text"/>

                                        <img onClick={() => setShowCalendar(!showCalendar)} src={calendar}
                                             alt="calendar"/>

                                        {showCalendar &&
                                        <CalendarComponent getBirthday={getBirthday}/>}
                                    </div>
                                    {errors.birthday &&
                                    <ErrorsMessage textMessage={'Birthday is required'}/>}
                                </div>
                                <div className={`${f.properties_data} ${f.add_form_data}`}>
                                    <label>Number</label>
                                    <input name='number' ref={register({required: true})} type="text"/>
                                    {errors.number &&
                                    <ErrorsMessage textMessage={'Number is required'}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Block_Buttons/>
                </ form>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
        positions: state.players.positions,
        teamsId: getTeamsId(state),
        playersName: getPlayerName(state),
        teamsName: getTeamsNames(state)
    }
)

export default connect(mapStateToProps, {savePlayers})(AddPlayer);