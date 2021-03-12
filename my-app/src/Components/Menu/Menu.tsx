import React, {useState} from 'react'
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
import userAvatar from "../Header/images/profile.png";
import {getUserName} from "../../Redux/toolkit/selectors";

type MenuPropsType = {
    signOut: () => void
    name: string
}

const Menu: React.FC<MenuPropsType> = ({signOut, name}) => {

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

            {showMenu && <>
                <div className={s.nav_userInfo}>
                    <span> {name} </span>
                    <img src={userAvatar} alt="userAvatar"/>
                </div>
                <div className={total.gradient}></div>
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
                </nav>
            </>}
        </>
    )
}

let mapStateToProps = (state: any) => ({
    name: getUserName(state)
})

export default connect(mapStateToProps,{signOut})(Menu)


