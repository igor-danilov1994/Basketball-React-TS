import React, {useState} from 'react'
import img from '../Login/images/reg.png'
import s from '../Login/Login.module.css'
import total from '../../totalStyle.module.css'
import {useForm} from 'react-hook-form'
import {NavLink} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getConfirmationAuthUser} from "../../Redux/toolkit/authReducer";
import passShow from "../Login/images/passShow.png";
import passHidden from "../Login/images/passHidden.png";
import ErrorsMessage from "../ErrorsMessage/ErrorsMessage";
import {AppStateType} from "../../Redux/toolkit/redux-store";

type onSubmitDataFormType = {
    userName: string
    login: string
    password: string
    doublePass: string
}

type MapDispatchPropsType = {
    getConfirmationAuthUser: (data: onSubmitDataFormType) => void
}

type MapStatePropsType = {
    isRegistered: boolean
    signUpError: boolean
}

type RegistrationPropsType = MapDispatchPropsType & MapStatePropsType

const Registration: React.FC<RegistrationPropsType> = (
    {isRegistered, signUpError, getConfirmationAuthUser}) => {

    const {register, handleSubmit, errors} = useForm();
    const [show, toggleShowPass] = useState(false)
    const [showThis, toggleShowDoublePass] = useState(false)
    const [matchingPasswords, setMatchingPasswords] = useState(false)
    const [changePolicy, setChangePolicy] = useState(true)


    const onSubmit = (data: onSubmitDataFormType) => {
        debugger
        if (data.password === data.doublePass) {
            getConfirmationAuthUser(data)
        } else {
            setMatchingPasswords(true)
        }
    }
    if (isRegistered) {
        return <Redirect to="/signIn"/>
    }

    return (
        <div className={s.login}>
            <div className={s.login_form}>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.login_formItem}>
                        <label>Name</label>
                        <input name="userName" ref={register({required: true})} type="text"/>
                        {errors.userName &&
                        <ErrorsMessage textMessage={'Name is required'}/>}
                    </div>
                    <div className={s.login_formItem}>
                        <label>Login</label>
                        <input name="login" ref={register({required: true})} type="text"/>
                        {errors.login &&
                        <ErrorsMessage textMessage={'Login is required'}/>}
                        {signUpError &&
                        <ErrorsMessage textMessage={'User with this login is already registered'}/>}
                    </div>
                    <div className={s.login_formItem}>
                        <label>Password</label>

                        <div className={s.login_formItem_pass}>
                            <input name="password" ref={register({required: true})}
                                   type={show ? "text" : "password"}/>
                            <img onClick={() => toggleShowPass(!show)}
                                 src={show ? passShow : passHidden} alt='showPass'/>
                        </div>

                        {errors.password &&
                        <ErrorsMessage textMessage={'Password is registered'}/>}
                    </div>
                    <div className={s.login_formItem}>
                        <label>Enter your password again</label>

                        <div className={s.login_formItem_pass}>
                            <input name="doublePass" ref={register({required: true})}
                                   type={showThis ? "text" : "password"}/>
                            <img onClick={() => toggleShowDoublePass(!showThis)}
                                 src={showThis ? passShow : passHidden} alt='showPass'/>
                        </div>

                        {errors.doublePass &&
                        <ErrorsMessage textMessage={'Password again is registered'}/>}

                        {matchingPasswords &&
                        <ErrorsMessage textMessage={'Password mismatch'}/>}
                    </div>
                    <div className={s.login_formItem_policy}>
                        <input name={"policy"} ref={register({required: true})} id="policy"
                               onClick={() => setChangePolicy(!changePolicy)} type="checkbox"/>
                        <label htmlFor="policy">I accept the agreement</label>

                        {errors.policy &&
                        <ErrorsMessage textMessage={'Confirm the terms of the agreement'}/>}

                    </div>
                    <button disabled={changePolicy}
                            className={`${total.btn} ${total.btn_add} ${changePolicy? total.btn_disabled : ""} `}>
                        Sign Up
                    </button>
                </form>

                <div>
                    <span>Already a member?
                      <NavLink to='/signIn'>
                        Sign in
                    </NavLink>
                    </span>
                </div>
            </div>
            <div className={s.login_img}>
                <img alt='img' src={img}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isRegistered: state.auth.isRegistered,
    signUpError: state.auth.signUpError,
})

export default connect(mapStateToProps, {getConfirmationAuthUser})(Registration)

