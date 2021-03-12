import React from 'react'
import Select from 'react-select'
import s from './Select.module.css'
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();


type SelectComponentPropsType =  {
    options: Array<any>
}

const SelectComponent: React.FC <SelectComponentPropsType> = ({options}) => {

    let currentOptions

    if (options[0] != null) {
        currentOptions = options.map((obj: any, id: number) => ({value: obj, label: obj}))
    }

    return (
        <Select options={currentOptions}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti={true}
                name="select"
                className={`${s.select}`}
                classNamePrefix={`${s.select}`}
        />
    )
}

export default SelectComponent;