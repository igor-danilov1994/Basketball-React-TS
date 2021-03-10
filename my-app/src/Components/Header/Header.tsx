import React, {useState} from 'react'
import logo from './images/logo.png'
import userAvatar from './images/profile.png'
import s from './Header.module.css'
import {connect} from 'react-redux'
import {getUserName} from "../../Redux/toolkit/selectors";

type HeaderPropsType = {
    name: string
}


const Header: React.FC<HeaderPropsType> = ({name}) => {

    return (
        <header className={s.header}>
            <div className={s.header_logo}>
                <img src={logo} alt="logo"/>
            </div>
        </header>
    )
}

const mapStateToProps = (state: any) => ({
    name: getUserName(state)
})


export default connect(mapStateToProps)(Header)
