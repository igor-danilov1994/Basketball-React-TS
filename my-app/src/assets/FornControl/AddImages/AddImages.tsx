import React from 'react';
import s from "./AddingImg.module.css";
import avatar from '../../images/addAvatar.svg';

const AddImages = () => {
    return (
        <div className={s.addAvatar_Logo}>
            <img src={avatar} alt="addAvatar"/>
        </div>
    )
}

export default AddImages