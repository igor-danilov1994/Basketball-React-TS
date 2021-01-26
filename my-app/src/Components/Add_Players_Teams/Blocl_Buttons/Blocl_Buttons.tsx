import React from 'react';
import s from "./Block_Buttons.module.css";
import total from "../../../totalStyle.module.css";

const Block_Buttons = (props: any) => {
    return (
        <div className={s.block_buttons}>
            <button className={`${total.btn_cancel} ${total.btn}`}>Cancel</button>
            <button className={`${total.btn_add} ${total.btn}`}>Save</button>
        </div>
    )
}

export default Block_Buttons;