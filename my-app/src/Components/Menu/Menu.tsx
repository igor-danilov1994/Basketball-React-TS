import React from 'react'
import s from './menu.module.css'
import teamsImg from './images/menu_teams.png'
import playersImg from './images/menu_players.png'
import inputIcon from '../../assets/images/inputIcon.png'
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import total from '../../totalStyle.module.css'
import {SIGN_OUT} from "../../Redux/toolkit/authReducer";

const Menu = (props: any) => {
    return (
        <nav className={s.nav}>
            <div className={s.nav_header}>
                <div className={`${s.nav_item} ${s.menu_teams}`}>
                    <NavLink to='/main/teams_E' >
                        <img src={teamsImg} alt="img"/>
                        <span className={total.text_extraSmall}>TeamsE</span>
                    </NavLink>
                </div>

                <div className={`${s.nav_item} ${s.menu_players}`}>
                    <NavLink to='/main/players_E' >
                        <img src={playersImg} alt="img"/>
                        <span className={total.text_extraSmall}>PlayersE</span>
                    </NavLink>
                </div>
                <div className={`${s.nav_item} ${s.menu_players}`}>
                    <NavLink to='/main/players' >
                        <img src={playersImg} alt="img"/>
                        <span className={total.text_extraSmall}>Players</span>
                    </NavLink>
                </div>
                <div className={`${s.nav_item} ${s.menu_players}`}>
                    <NavLink to='/main/teams' >
                        <img src={playersImg} alt="img"/>
                         <span className={total.text_extraSmall}>Teams</span>
                    </NavLink>
                </div>
            </div>

            <div className={s.nav_footer}>
                <NavLink to='/signIn' onClick={ () => {props.SIGN_OUT()} } >
                    <img src={inputIcon} alt="iconImg"/>
                    <span className={total.text_extraSmall}>Sign out</span>
                </NavLink>

            </div>
        </nav>
    )
}

const mapStateToProps = (state: any) => ({
    name: state.auth.name
})

const MenuContainer = connect(mapStateToProps,{SIGN_OUT})(Menu);

export default MenuContainer
