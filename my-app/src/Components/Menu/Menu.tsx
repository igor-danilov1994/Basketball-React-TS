import React from 'react'
import s from './nav.module.css'
import teamsImg from './images/menu_teams.png'
import playersImg from './images/menu_players.png'
import inputIcon from '../../assets/images/inputIcon.png'
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return (
        <nav className={s.nav}>
            <div className={s.nav_header}>
                <div className={`${s.nav_item} ${s.menu_teams}`}>

                    <NavLink to='/teams' activeClassName={s.activeLink}>
                        <img src={teamsImg} alt="img"/>
                        Teams
                    </NavLink>
                </div>

                <div className={`${s.nav_item} ${s.menu_players}`}>
                    <NavLink to='/players_E' activeClassName={s.activeLink}>
                        <img src={playersImg} alt="img"/>
                        Players
                    </NavLink>
                </div>
            </div>

            <div className={s.nav_footer}>
                <img src={inputIcon} alt="iconImg"/>
                <span>Sign out</span>
            </div>
        </nav>

    )
}

export default Menu
