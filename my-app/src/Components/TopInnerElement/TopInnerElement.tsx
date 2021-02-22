import React from 'react';
import s from './TopInnerElement.module.css'
import searchIcon from "../../assets/images/search.png";
import total from "../../totalStyle.module.css";
import { NavLink } from 'react-router-dom';

const TopInnerElement = (props: any) => {
    return (
        <div className={s.topInner}>
            <div className={s.topInner_top_search}>
                <input type="text" placeholder='Search...'/>
                <img src={searchIcon} alt="search"/>
            </div>

            <select>
                <option disabled value="">Select...</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
            </select>

            <NavLink to='/main/addTeams' className={`${total.btn} ${total.btn_add} ${s.topInner_btn}`}>
                <span>Add</span>
                <span>+</span>
            </NavLink>
        </div>
    )
}

export default TopInnerElement;