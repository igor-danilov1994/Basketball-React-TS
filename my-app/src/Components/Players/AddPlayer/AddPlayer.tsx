import React, {useState} from 'react';
import s from './AddPlayer.module.css'
import f from "../../../assets/FornControl/FormControl.module.css";
import total from "../../../totalStyle.module.css";
import AddImages from "../../../assets/FornControl/AddImages/AddImages";
import Block_Buttons from "../../../assets/FornControl/Blocl_Buttons/Blocl_Buttons";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {getPosition} from "../../../Redux/playersReducer";
import arrowImg from '../../../assets/images/link.png'

const AddPlayer = (props: any) => {
    //debugger
    if (props.position.length === 0) {
        props.getPosition()
    }
    const onSubmit = (data: object) => {
        console.log(data)
    }
    const [activeRotate, setActiveRotate] = useState(false)

    const {register, handleSubmit} = useForm()

    const toggleRotateImg = () => {
        setActiveRotate(!activeRotate)
    }

    return (
        <div className={f.add}>
            <div className={total.breadCrumbs}>
                Main/Players/NamePlayers
            </div>
            <div className={f.add_form}>
                <AddImages/>
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
                                    {props.position.map((p: any) =>
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
                                    <label htmlFor="">Height</label>
                                    <input name='height' ref={register} type="text"/>
                                </div>
                                <div className={`${f.properties_data} ${f.add_form_data}`}>
                                    <label htmlFor="">Weight</label>
                                    <input name='weight' ref={register} type="text"/>
                                </div>
                            </div>
                            <div className={f.properties_options}>
                                <div className={`${f.properties_data} ${f.add_form_data}`}>
                                    <label htmlFor="">Age</label>
                                    <input name='age' ref={register} type="text"/>
                                </div>
                                <div className={`${f.properties_data} ${f.add_form_data}`}>
                                    <label htmlFor="">Number</label>
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
    position: state.players.position
})


export default connect(mapStateToProps, {getPosition})(AddPlayer);