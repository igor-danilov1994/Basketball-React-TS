import React from 'react'
import logo from './images/logo.png'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header_logo}>
                <img src={logo} alt="logo"/>
            </div>
        </header>
    )
}

export default Header
