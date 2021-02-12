import React, {useEffect, useState} from 'react';
import s from "./AddTeams.module.css";
import f from "../../../assets/FornControl/FormControl.module.css";
import total from "../../../totalStyle.module.css";
import AddImages from "../../../assets/FornControl/AddImages/AddImages";
import Block_Buttons from "../../../assets/FornControl/Blocl_Buttons/Blocl_Buttons";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {setTeam} from "../../../Redux/toolkit/teamsReducer.ts";


const AddTeams = (props: any) => {
    const onSubmit = (data: any) => {
        data.foundationYear = Number(data.foundationYear)
        props.setTeam(data)
    }
    const {register, handleSubmit} = useForm()
    const [activeImgLoading, setActiveImgLoading] = useState(false)

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
                       name='imageUrl' ref={register}
                       accept="image/*"
                       type="file"/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <div className={f.add_form_data}>
                            <label className={total.text}>Name</label>
                            <input name='name' ref={register} type="text"/>
                        </div>
                        <div className={f.add_form_data}>
                            <label className={total.text}>Division</label>
                            <input name='division' ref={register} type="text"/>
                        </div>
                        <div className={f.add_form_data}>
                            <label className={total.text}>Conference</label>
                            <input name='conference' ref={register} type="text"/>
                        </div>
                        <div className={f.add_form_data}>
                            <label className={total.text} htmlFor="">Year of foundation</label>
                            <input name='foundationYear' ref={register} type="text"/>
                        </div>
                    </div>
                    <Block_Buttons />
                </ form>
            </div>
        </div>
    )
}



const mapStateToProps = (state: any) => ({
    teams: state.teams
})


export default connect(mapStateToProps, {setTeam})(AddTeams);
