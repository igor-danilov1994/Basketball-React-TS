import React from 'react'
import s from './menu.module.css'
import teamsImg from './images/menu_teams.png'
import playersImg from './images/menu_players.png'
import inputIcon from '../../assets/images/inputIcon.png'
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import {exitUser} from "../../Redux/authReducer";

const Menu = (props: any) => {
    return (
        <nav className={s.nav}>
            <div className={s.nav_header}>
                <div className={`${s.nav_item} ${s.menu_teams}`}>

                    <NavLink to='/teams_E' >
                        <img src={teamsImg} alt="img"/>
                        TeamsEmpty
                    </NavLink>
                </div>

                <div className={`${s.nav_item} ${s.menu_players}`}>
                    <NavLink to='/players_E' >
                        <img src={playersImg} alt="img"/>
                        PlayersEmpty
                    </NavLink>
                </div>
                {/*<div className={`${s.nav_item} ${s.menu_players}`}>
                    <NavLink to='/players' >
                        <img src={playersImg} alt="img"/>
                        Players
                    </NavLink>
                </div>
                <div className={`${s.nav_item} ${s.menu_players}`}>
                    <NavLink to='/teams' >
                        <img src={playersImg} alt="img"/>
                        Teams
                    </NavLink>
                </div>*/}
            </div>

            <div className={s.nav_footer}>
                <NavLink to='/signIn' onClick={ () => {props.exitUser(props.name)} } >
                    <img src={inputIcon} alt="iconImg"/>
                    <span>Sign out</span>
                </NavLink>

            </div>
        </nav>
    )
}



const mapStateToProps = (state: any) => ({
    name: state.auth.name
})

const MenuContainer = connect(mapStateToProps, {exitUser})(Menu);

export default MenuContainer
