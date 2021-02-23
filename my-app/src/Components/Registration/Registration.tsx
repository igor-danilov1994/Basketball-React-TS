import React, {useState} from 'react'
import img from '../Login/images/reg.png'
//import s from './Registration.module.css'
import s from '../Login/Login.module.css'
import total from '../../totalStyle.module.css'
import {useForm} from 'react-hook-form'
import {NavLink} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getConfirmationAuthUser} from "../../Redux/toolkit/authReducer";
import passShow from "../Login/images/passShow.png";
import passHidden from "../Login/images/passHidden.png";


const Registration = (props: any) => {
    const {register, handleSubmit, errors} = useForm();
    const [show, toggleShowPass] = useState(false)
    const [showThis, toggleShowDoublePass] = useState(false)

    const onSubmit = (data: object) => {
        debugger
        props.getConfirmationAuthUser(data)
    }

    if (props.isRegistered) {
        return <Redirect to="/signIn"/>
    }

    return (
        <div className={s.login}>
            <div className={s.login_form}>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.login_formItem}>
                        <label>Name</label>
                        <input name="userName" ref={register({ required: true })} type="text"/>
                        {errors.userName && <span>First name is required</span>}
                    </div>
                    <div className={s.login_formItem}>
                        <label>Login</label>
                        <input name="login" ref={register({ required: true })} type="text"/>
                        {errors.login && <span>First name is required</span>}
                    </div>
                    <div className={s.login_formItem}>
                        <label>Password</label>
                        <input name="password" ref={register({ required: true })} type="text"/>
                        {errors.password && <span>First name is required</span>}
                        <img onClick={() => toggleShowPass(!show)}
                             src={show ? passShow : passHidden} alt='showPass'/>
                    </div>
                    <div className={s.login_formItem}>
                        <label >Enter your password again</label>
                        <input name="DoublePass" ref={register({ required: true })} type="text"/>
                        {errors.DoublePass && <span>First name is required</span>}
                        <img onClick={() => toggleShowDoublePass(!showThis)}
                             src={showThis ? passShow : passHidden} alt='showPass'/>
                    </div>
                    <div className={s.login_formItem} >
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
            <div className={s.registration_img}>
                <img alt='img' src={img}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    isRegistered: state.auth.isRegistered,
    state: state
})

export default connect(mapStateToProps, {getConfirmationAuthUser})(Registration)

