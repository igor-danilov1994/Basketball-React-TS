import React from 'react';
import s from "./Block_Form.module.css";

const Block_Form = (props: any) => {
    return (
        <div className={s.blockForm}>
            <div className={s.blockForm_data}>
                <label htmlFor="">{props.blockFormLabel[0]}</label>
                <input type="text"/>
            </div>
            <div className={s.blockForm_data}>
                <label htmlFor="">{props.blockFormLabel[1]}</label>
                <input type="text"/>
            </div>
            <div className={s.blockForm_data}>
                <label htmlFor="">{props.blockFormLabel[2]}</label>
                <input type="text"/>
            </div>
        </div>
    )
}

export default Block_Form;