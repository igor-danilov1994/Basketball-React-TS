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

type onSubmitDataForm = {
    userName: string
    login: string
    password: string
    doublePass: string
}

type RegistrationPropsType = {
    getConfirmationAuthUser: (data: onSubmitDataForm) => void
    isRegistered: boolean
    signUpError: boolean
}

const Registration: React.FC<RegistrationPropsType> = (
    {isRegistered, signUpError, getConfirmationAuthUser}) => {
    const {register, handleSubmit, errors} = useForm();
    const [show, toggleShowPass] = useState(false)
    const [showThis, toggleShowDoublePass] = useState(false)
    const [matchingPasswords, setMatchingPasswords] = useState(false)


    const onSubmit = (data: onSubmitDataForm) => {
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
                        <ErrorsMessage textMessage={'Name is required'}/> }
                    </div>
                    <div className={s.login_formItem}>
                        <label>Login</label>
                        <input name="login" ref={register({required: true})} type="text"/>
                        {errors.login &&
                        <ErrorsMessage textMessage={'Login is required'}/> }
                        {signUpError &&
                        <ErrorsMessage textMessage={'User with this login is already registered'}/> }
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
                        <ErrorsMessage textMessage={'Password is registered'}/> }
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
                        <ErrorsMessage textMessage={'Password again is registered'}/> }

                        {matchingPasswords &&
                        <ErrorsMessage textMessage={'Password mismatch'}/> }
                    </div>
                    <div className={s.login_formItem_policy}>
                        <input id='2' type="checkbox"/>
                        <label htmlFor="2">I accept the agreement</label>
                    </div>
                    <button className={`${total.btn} ${total.btn_add}`}>Sign Up</button>
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

const mapStateToProps = (state: any) => ({
    isRegistered: state.auth.isRegistered,
    signUpError: state.auth.signUpError,
})

export default connect(mapStateToProps, {getConfirmationAuthUser})(Registration)

