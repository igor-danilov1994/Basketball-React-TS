import React from 'react';
import s from "./AddTeams.module.css";
import f from "../../../assets/FornControl/FormControl.module.css";
import total from "../../../totalStyle.module.css";
import AddImages from "../../../assets/FornControl/AddImages/AddImages";
import Block_Buttons from "../../../assets/FornControl/Blocl_Buttons/Blocl_Buttons";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";


const AddTeams = (props: any) => {
    const onSubmit = (data: object) => {
        debugger
        console.log(data)
    }
    const {register, handleSubmit} = useForm()

    return (
        <div className={f.add}>
            <div className={total.breadCrumbs}>
                Main/Players/NamePlayers
            </div>
            <div className={f.add_form}>
                <AddImages/>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <div className={f.add_form_data}>
                            <label className={total.text}>Team</label>
                            <input name='team' ref={register} type="text"/>
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
                            <input name='yearFoundation' ref={register} type="text"/>
                        </div>
                    </div>
                    <Block_Buttons />
                </ form>
            </div>
        </div>
    )
}



const mapStateToProps = (state: any) => ({
    teamsPage: state.teams.data
})


export default connect(mapStateToProps)(AddTeams);
