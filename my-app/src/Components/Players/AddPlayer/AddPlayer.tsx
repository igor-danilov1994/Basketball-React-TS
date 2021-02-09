import React, {useEffect, useState} from 'react';
import f from "../../../assets/FornControl/FormControl.module.css";
import total from "../../../totalStyle.module.css";
import AddImages from "../../../assets/FornControl/AddImages/AddImages";
import Block_Buttons from "../../../assets/FornControl/Blocl_Buttons/Blocl_Buttons";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import arrowImg from '../../../assets/images/link.png'
import {getPosition, setPlayers} from '../../../Redux/toolkit/playersReducer';

const AddPlayer = (props: any) => {

    const onSubmit = async (data: any) => {
        props.setPlayers(data)
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
    useEffect(() => {
        props.getPosition(props.token)
    }, [])

    return (
        <div className={f.add}>
            <div className={total.breadCrumbs}>
                Main/Players/NamePlayers
            </div>
            <div className={f.add_form}>
                <div className={f.add_form_img} onClick={toggleShowImgLoading}>
                    <AddImages/>
                    <input className={activeImgLoading ? `${f.active}` : ""}
                           name='img' ref={register}
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
                            <input name='team' ref={register} type="text"/>
                        </div>

                        <div className={f.properties}>
                            <div className={f.properties_options}>
                                <div className={`${f.properties_data} ${f.add_form_data}`}>
                                    <label>Height</label>
                                    <input name='height' ref={register} type="text"/>
                                </div>
                                <div className={`${f.properties_data} ${f.add_form_data}`}>
                                    <label>Weight</label>
                                    <input name='weight' ref={register} type="text"/>
                                </div>
                            </div>
                            <div className={f.properties_options}>
                                <div className={`${f.properties_data} ${f.add_form_data}`}>
                                    <label>Age</label>
                                    <input name='age' ref={register} type="text"/>
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
    positions: state.players.positions,
    token: state.auth.token
})


export default connect(mapStateToProps, {getPosition, setPlayers})(AddPlayer);