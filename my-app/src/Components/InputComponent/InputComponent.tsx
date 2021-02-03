import React from 'react';
import s from './InputComponent.module.css'
import total from "../../totalStyle.module.css";
import {useForm} from "react-hook-form";

const InputComponent = (props: any) => {
    debugger
    return (
        <input name={props.name} ref={'register'} type="text"/>
    )
}

export default InputComponent;