import React from 'react'
import logo from './images/logo.png'
import userAvatar from './images/profile.png'
import s from './Header.module.css'
import { connect } from 'react-redux'


const Header = (props: any) => {
    return (
        <header className={s.header}>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div className={s.userInfo}>
                <span> {props.name} </span>
                <img src={userAvatar} alt="userAvatar"/>
            </div>
        </header>
    )
}
const mapStateToProps = (state: any) => ({
    name: state.auth.name
})


export default connect(mapStateToProps)(Header)
