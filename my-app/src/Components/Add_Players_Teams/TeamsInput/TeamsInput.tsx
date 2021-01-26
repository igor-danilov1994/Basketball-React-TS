import React from 'react';
import s from "../Block_Form/Block_Form.module.css";

const TeamsInput = (props: any) => {
    return (
        <div className={s.blockForm_data}>
            <label htmlFor="">{props.blockFormLabel[3]}</label>
            <input type="text"/>
        </div>
    )
}

export default TeamsInput;