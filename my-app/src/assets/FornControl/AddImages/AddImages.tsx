import React from 'react';
import s from "./AddAvatar_Logo.module.css";
import avatar from '../../images/addAvatar.svg';

const AddImages = (props: any) => {
    return (
        <div className={s.addAvatar_Logo}>
            <img src={avatar} alt="addAvatar"/>
        </div>
    )
}

export default AddImages;