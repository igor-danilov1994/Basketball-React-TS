import React from 'react'
import img from '../Login/images/reg.png'
import passShow from '../Login/images/passShow.png'
import passHidden from '../Login/images/passHidden.png'
import s from './Registration.module.css'
import total from '../../totalStyle.module.css'
import {useForm} from 'react-hook-form'
import {NavLink} from "react-router-dom";
import {authAPI} from "../../API/api";
import {connect} from "react-redux";
import {getConfirmationAuthUser} from "../../Redux/authReducer";


const Registration = (props: any) => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data: object) => {
        props.getConfirmationAuthUser(data)
    }

    return (
        <div className={s.registration}>
            <div className={s.registration_form}>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.registration_formItem}>
                        <label>Name</label>
                        <input name="userName" ref={register} type="text"/>
                    </div>
                    <div className={s.registration_formItem}>
                        <label>Login</label>
                        <input name="login" ref={register} type="text"/>
                    </div>
                    <div className={s.registration_formItem}>
                        <label>Password</label>
                        <input name="password" ref={register} type="text"/>
                    </div>
                    <div className={s.registration_formItem}>
                        <label>Enter your password again</label>
                        <input type="text"/>
                        {/*<img alt='imgHidden' src={passHidden}/>
                        <img alt='img' src={passShow}/>*/}
                    </div>
                    <div className={s.registration_formItem}>
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
    signUp: state
})

const RegistrationContainer = connect(mapStateToProps,{getConfirmationAuthUser})(Registration);

export default RegistrationContainer
