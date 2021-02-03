import React from 'react'
import logo from './images/logo.png'
import userAvatar from './images/profile.png'
import s from './Header.module.css'


const Header = (props: any ) => {
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

export default Header
