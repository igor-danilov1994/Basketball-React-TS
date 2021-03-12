import React, {useState} from 'react';
import f from "../../../assets/FornControl/FormControl.module.css";
import total from "../../../totalStyle.module.css";
import AddImages from "../../../assets/FornControl/AddImages/AddImages";
import Block_Buttons from "../../../assets/FornControl/Blocl_Buttons/Blocl_Buttons";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {setTeam, updateTeam} from "../../../Redux/toolkit/teamsReducer"
import {getSerialTeamID, getTeamsData, getTeamsNames} from "../../../Redux/toolkit/selectors";
import ErrorsMessage from "../../ErrorsMessage/ErrorsMessage";
import {AppStateType} from "../../../Redux/toolkit/redux-store";

type  typeData = {
    imageUrl: object
    name: string
    division: string
    conference: string
    foundationYear: number
}

type mapStatePropsType = {
    serialTeamID: number | null
    teams: Array<any>
    teamsName: Array<any>
}
type mapDispatchPropsType = {
    setTeam: (data: typeData, getCurrentTeamID: number) => void
    updateTeam: (data: typeData, getCurrentTeamID: number) => void
}

type AddTeamsPropsType = mapStatePropsType & mapDispatchPropsType

const AddTeams: React.FC<AddTeamsPropsType> = ({serialTeamID, teams, setTeam, teamsName,}) => {


    const onSubmit = (data: typeData) => {
        data.foundationYear = Number(data.foundationYear)
        let getCurrentTeamID = null

        if (serialTeamID) {
            getCurrentTeamID = teams[serialTeamID].id
        }
        setTeam(data, getCurrentTeamID)
    }
    const {register, handleSubmit, errors} = useForm()
    const [activeImgLoading, setActiveImgLoading] = useState(false)

    let toggleShowImgLoading = () => {
        setActiveImgLoading(!activeImgLoading)
    }

    return (
        <div className={f.add}>
            <div className={total.breadCrumbs}>
                Main/Teams/{serialTeamID ? teamsName : 'NewTeam'}
            </div>
            <div className={f.add_form}>
                <div className={f.add_form_img} onClick={toggleShowImgLoading}>
                    <AddImages/>
                    <input className={activeImgLoading ? `${f.active}` : ""}
                           name='imageUrl' ref={register({required: true})}
                           accept="image/*"
                           type="file"/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className={f.add_form_data}>
                            <label className={total.text}>Name</label>
                            <input name='name' ref={register({required: true})} type="text"/>
                            {errors.name &&
                            <ErrorsMessage textMessage={'Name is registered'}/> }
                        </div>
                        <div className={f.add_form_data}>
                            <label className={total.text}>Division</label>
                            <input name='division' ref={register({required: true})} type="text"/>
                            {errors.division &&
                            <ErrorsMessage textMessage={'Division is registered'}/> }
                        </div>
                        <div className={f.add_form_data}>
                            <label className={total.text}>Conference</label>
                            <input name='conference' ref={register({required: true})} type="text"/>
                            {errors.conference &&
                            <ErrorsMessage textMessage={'Conference is registered'}/> }
                        </div>
                        <div className={f.add_form_data}>
                            <label className={total.text} htmlFor="">Year of foundation</label>
                            <input name='foundationYear' ref={register({required: true})} type="text"/>
                            {errors.foundationYear &&
                            <ErrorsMessage textMessage={'Year of foundation is registered'}/> }
                        </div>
                    </div>
                    <Block_Buttons/>
                </ form>
            </div>
        </div>
    )
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    serialTeamID: getSerialTeamID(state),
    teams: getTeamsData(state),
    teamsName: getTeamsNames(state),
})


export default connect(mapStateToProps, {setTeam, updateTeam})(AddTeams)
