import React from 'react'
import img from '../Login/images/reg.png'
import passShow from '../Login/images/passShow.png'
import passHidden from '../Login/images/passHidden.png'
import s from './Registration.module.css'


const Registration = () => {
    return (
        <div className={s.registration}>
            <div className={s.registration_form}>
                <h1>Sign Up</h1>
                <form>
                    <div className={s.registration_formItem}>
                        <label>Name</label>
                        <input type="text"/>
                    </div>
                    <div className={s.registration_formItem}>
                        <label>Login</label>
                        <input type="text"/>
                    </div>
                    <div className={s.registration_formItem}>
                        <label>Password</label>
                        <input type="text"/>
                    </div>
                    <div className={`${s.registration_formItem} ${s.passInput}`}>
                        <label>Enter your password again</label>
                        <input type="text"/>
                        <img alt='imgHidden' src={passHidden}/>
                        <img alt='img' src={passShow}/>
                    </div>
                    <div className={s.registration_formItem}>
                        <input id='2' type="checkbox"/>
                        <label htmlFor="2">I accept the agreement</label>
                    </div>
                    <button>Sign Up</button>
                </form>

                <div>
                    <span>Already a member?
                        <a href="#">Sign in</a>
                    </span>
                </div>
            </div>
            <div className={s.registration_img}>
                <img alt='img' src={img}/>
            </div>
        </div>
    )
}

export default Registration
