import React, {useEffect, useState} from 'react'
import s from './menu.module.css'
import teamsShow from './images/menu_teamsShow.png'
import teamsHidden from './images/menu_teamsHidden.png'
import playersShow from './images/menu_playersShow.png'
import playersHidden from './images/menu_playersHidden.png'
import inputIcon from '../../assets/images/inputIcon.png'
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import total from '../../totalStyle.module.css'
import {signOut} from "../../Redux/toolkit/authReducer";

type MenuPropsType = {
    signOut: () => void
}

const Menu: React.FC<MenuPropsType> = ({signOut}) => {

    const [active, setActive] = useState(false)
    const [showMenu, setShowMenu] = useState(true)

    const toggleActive = () => {
        setActive(!active)
    }

    return (
        <>
            <div onClick={() => setShowMenu(!showMenu)} className={s.nav_burger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {showMenu &&
            <nav className={s.nav}>
                <div className={s.nav_header}>
                    <div onClick={toggleActive} className={`${s.nav_item}`}>
                        <NavLink to='/main/teams'>
                            <img src={active ? teamsShow : teamsHidden} alt="img"/>
                            <span className={total.text_extraSmall}>Teams</span>
                        </NavLink>
                    </div>

                    <div className={`${s.nav_item} ${s.menu_players}`}>
                        <NavLink onClick={toggleActive} to='/main/players'>
                            <img src={active ? playersHidden : playersShow} alt="img"/>
                            <span className={total.text_extraSmall}>Players</span>
                        </NavLink>
                    </div>
                </div>
                <div className={s.nav_footer}>
                    <NavLink to='/signIn' onClick={() => signOut()}>
                        <img src={inputIcon} alt="iconImg"/>
                        <span className={total.text_extraSmall}>Sign out</span>
                    </NavLink>
                </div>
            </nav>}
        </>
    )
}


export default connect(null,
{
    signOut
}
)(Menu)


