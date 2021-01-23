import React from 'react'
import s from './Login.module.css'
import img from './images/loginImg.png'
import passShow from './images/passShow.png'
import passHidden from './images/passHidden.png'


const Login = () => {
    return (
        <div className={s.login}>
            <div>
                <div>
                    <h1>Sign In</h1>
                </div>
                <form>
                    <div>
                        <label>Login</label>
                        <input type="text"/>
                    </div>
                    <div className={s.passInput} >
                        <label>Password</label>
                        <input type="text" />
                            <img alt='imgHidden' src={passHidden}/>
                            <img alt='img' src={passShow}/>
                    </div>
                    <button>Sign In</button>

                </form>
                <div>
                <span>Not a member yet?
                   <a href="#">Sign up</a>
                </span>
                </div>
            </div>
            <div>
                <img alt='img' src={img}/>
            </div>
        </div>

    )
}

export default Login
