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

type LoginPropsType = {
    signInError?: boolean
    getAuthUserData: (data: object) => void
}

const Login: React.FC<LoginPropsType> = ({signInError, getAuthUserData }) => {

    const {register, handleSubmit, errors} = useForm()
    const [show, toggleShowPass] = useState(false)

    const onSubmit = (data: object) => {
        getAuthUserData(data)
    }

    return (
        <div className={s.login}>
            <div className={s.login_form}>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.login_formItem}>
                        <label className={`${total.text_middle14} ${total.text}`}>Login</label>
                        <input name='login' ref={register({required: false})} type="text"/>
                        {errors.login &&
                        <span className={total.error}>Login is required</span>}
                        {signInError &&
                        <span className={total.error}>Wrong login or password. Please, try again</span>}
                    </div>
                    <div className={s.login_formItem}>
                        <label className={`${total.text_middle14} ${total.text}`}>Password</label>

                        <div className={s.login_formItem_pass}>
                            <input name='password' ref={register({required: false})} type={show ? 'text' : 'password'}/>
                            <img onClick={() => toggleShowPass(!show)}
                                 src={show ? passShow : passHidden} alt='showPass'/>
                        </div>
                        {errors.password &&
                        <span className={total.error}>Password required</span>}
                        {signInError &&
                        <span className={total.error}>Wrong login or password. Please, try again.</span>}

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


export default connect(null, {getAuthUserData})(Login)

