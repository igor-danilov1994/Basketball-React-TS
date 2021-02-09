import React, {useEffect} from 'react'
import s from './Login.module.css'
import img from './images/loginImg.png'
import passShow from './images/passShow.png'
import passHidden from './images/passHidden.png'
import total from '../../totalStyle.module.css'
import {NavLink} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import {getAuthUserData} from "../../Redux/toolkit/authReducer";


const Login = (props: any) => {
    const onSubmit = (data: object) => {
        props.getAuthUserData(data)
    }

    const {register, handleSubmit} = useForm()


    return (
        <div className={s.login}>
            <div>
                <div>
                    <h1>Sign In</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.login_formItem}>
                        <label>Login</label>
                        <input name='login' ref={register} type="text"/>
                    </div>
                    <div className={s.login_formItem}>
                        <label>Password</label>
                        <input name='password' ref={register} type="text"/>
                        {/*<img alt='imgHidden' src={passHidden}/>
                        <img alt='img' src={passShow}/>*/}
                    </div>
                    <button className={`${total.btn} ${total.btn_add}`}>Sign In</button>

                </form>
                <div>
                <span>Not a member yet?
                    <NavLink to='/signUp'>
                        Sign up
                    </NavLink>
                </span>
                </div>
            </div>
            <div>
                <img alt='img' src={img}/>
            </div>
        </div>

    )
}

/*export let getToken = (token: string) => {
    debugger
    return token
}*/

const mapStateToProps = (state: any) => ({
    token: state.auth.token
})

const LoginContainer = connect(mapStateToProps, {getAuthUserData})(Login);

export default LoginContainer

