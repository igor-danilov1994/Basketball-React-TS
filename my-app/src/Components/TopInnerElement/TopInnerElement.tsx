import React from 'react';
import s from './TopInnerElement.module.css'
import searchIcon from "../../assets/images/search.png";
import total from "../../totalStyle.module.css";

const TopInnerElement = () => {
    return (
        <div className={s.topInner}>
            <div className={s.topInner_top_search}>
                <input type="text" placeholder='Search...'/>
                <img src={searchIcon} alt="search"/>
            </div>
            <button className={`${total.btn} ${s.topInner_btn}`}>
                <span>Add</span>
                <span>+</span>
            </button>
        </div>
    )
}

export default TopInnerElement;