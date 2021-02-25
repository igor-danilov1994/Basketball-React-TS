import React from 'react'
import Select from 'react-select'
import s from './Select.module.css'
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const SelectComponent = (props: any) => {

    let options
    if (props.options[0] != null) {
        //debugger
        options = props.options.map((obj: any, id: number) => ({value: obj, label: obj}))

       // options = props.options.map((obj: any, id: number) => ({value: obj.id, label: obj.name}))
    }
    //debugger

    return (
        <Select options={options}
                closeMenuOnSelect={props.closeMenuOnSelect}
                components={animatedComponents}
                isMulti={props.isMulti}
                name="select"
                className={`${s.select}`}
                classNamePrefix={`${s.select}`}
        />
    )
}

export default SelectComponent;