import React, {useState} from 'react'
import s from './Login.module.css'
import img from './images/loginImg.png'
import passHidden from './images/passHidden.png'
import passShow from './images/passShow.png'
import total from '../../totalStyle.module.css'
import {NavLink} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import {getAuthUserData} from "../../Redux/toolkit/authReducer";


const Login = (props: any) => {

    const {register, handleSubmit, errors} = useForm()
    const [show, toggleShowPass] = useState(false)

    const onSubmit = (data: object) => {
        props.getAuthUserData(data)
    }

    return (
        <div className={s.login}>
            <div className={s.login_form}>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.login_formItem}>
                        <label className={`${total.text_middle14} ${total.text}`}>Login</label>
                          <input name='login' ref={register({ required: true })} type="text"/>
                        {errors.login &&
                            <span className={s.login_formItem_error}>Login is required</span>}
                        {props.signInError &&
                        <span className={s.login_formItem_error}>Wrong login or password</span>}
                    </div>
                    <div className={s.login_formItem}>
                        <label className={`${total.text_middle14} ${total.text}`}>Password</label>

                        <div className={s.login_formItem_pass}>
                            <input name='password' ref={register({required: true})}
                                   type={show ? 'text' : 'password'}/>
                            <img onClick={() => toggleShowPass(!show)}
                                 src={show ? passShow : passHidden} alt='showPass'/>
                        </div>
                        {errors.password &&
                            <span className={s.login_formItem_error}>Password required</span>}
                        {props.signInError &&
                            <span className={s.login_formItem_error}>Wrong login or password</span>}

                    </div>
                    <button className={`${total.btn} ${total.btn_add}`}>Sign In</button>
                    <span className={`${total.text_middle14} ${total.text}`}> Not a member yet?
                        <NavLink to='/signUp'>Sign up</NavLink>
                    </span>
                </form>
            </div>
            <div className={s.login_img}>
                <img alt='img' src={img}/>
            </div>
        </div>

    )
}

const mapStateToProps = (state: any) => ({
    signInError: state.auth.signInError
})

const LoginContainer = connect(mapStateToProps, {getAuthUserData})(Login);

export default LoginContainer

