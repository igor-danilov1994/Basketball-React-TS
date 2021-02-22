import React, {useState} from 'react';
import f from "../../../assets/FornControl/FormControl.module.css";
import total from "../../../totalStyle.module.css";
import AddImages from "../../../assets/FornControl/AddImages/AddImages";
import Block_Buttons from "../../../assets/FornControl/Blocl_Buttons/Blocl_Buttons";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import arrowImg from '../../../assets/images/link.png'
import {savePlayers} from '../../../Redux/toolkit/playersReducer';
import {
    getCurrentPosition,
    getPlayerName,
    getTeamsId,
    getTeamsNames
} from '../../../Redux/toolkit/selectors';

const AddPlayer = (props: any) => {
    const onSubmit = (data: any) => {
        props.savePlayers(data)
    }
    const [activeRotate, setActiveRotate] = useState(false)
    const [activeImgLoading, setActiveImgLoading] = useState(false)

    const {register, handleSubmit} = useForm()

    let toggleRotateImg = () => {
        setActiveRotate(!activeRotate)
    }
    let toggleShowImgLoading = () => {
        setActiveImgLoading(!activeImgLoading)
    }
    return (
        <div className={f.add}>
            <div className={total.breadCrumbs}>
                Main/Players/NamePlayers
            </div>
            <div className={f.add_form}>
                <div className={f.add_form_img} onClick={toggleShowImgLoading}>
                    <AddImages/>
                    <input className={activeImgLoading ? `${f.active}` : ""}
                           name='avatarUrl' ref={register}
                           accept="image/*"
                           type="file"/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className={f.add_form_data}>
                            <label className={total.text}>Name</label>
                            <input name='name' ref={register} type="text"/>
                        </div>
                        <div className={f.add_form_data}>
                            <label className={total.text}>Position</label>
                            <div className={total.select}
                                 onClick={toggleRotateImg}>
                                <img
                                    className={activeRotate ? `${total.select_imgRotateOn}` : `${total.select_imgRotateOff}`}
                                    src={arrowImg} alt="arrow"/>
                                <select name="position" ref={register}>
                                    {props.positions.map((p: any) =>
                                        <option key={p} value={p}>{p}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className={f.add_form_data}>
                            <label className={total.text}>Team</label>
                            <div className={total.select}
                                 onClick={toggleRotateImg}>
                                <img
                                    className={activeRotate ? `${total.select_imgRotateOn}` : `${total.select_imgRotateOff}`}
                                    src={arrowImg} alt="arrow"/>
                                <select name="team" ref={register}>
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
                                    <input name='height' ref={register} type="text"/>
                                </div>
                                <div className={`${f.properties_data} ${f.add_form_data}`}>
                                    <label>Weight (kg)</label>
                                    <input name='weight' ref={register} type="text"/>
                                </div>
                            </div>
                            <div className={f.properties_options}>
                                <div className={`${f.properties_data} ${f.add_form_data}`}>
                                    <label>Birthday</label>
                                    <input name='birthday' ref={register} type="text"/>
                                </div>
                                <div className={`${f.properties_data} ${f.add_form_data}`}>
                                    <label>Number</label>
                                    <input name='number' ref={register} type="text"/>
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
        state: state,
        teamsId: getTeamsId(state),
        playersName: getPlayerName(state),
        teamsName: getTeamsNames(state)
    }
)

export default connect(mapStateToProps, {savePlayers})(AddPlayer);