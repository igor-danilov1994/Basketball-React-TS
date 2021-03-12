import React from 'react';
import total from "../../totalStyle.module.css";
import createIcon from "../../assets/images/create-icon.png";
import deleteIcon from "../../assets/images/delete-icon.png";
import {NavLink} from "react-router-dom";

type BreadCrumbsPropsType = {
    katigories: string
    name: string
    editPath: string
    pathAfterDeletion: string
    deleteItem: () => void
}

const BreadCrumbs: React.FC<BreadCrumbsPropsType> = (
    {katigories, name, editPath, deleteItem, pathAfterDeletion}) => {
    return (
        <div className={total.breadCrumbs}>
            <span> Main / {katigories} / {name} </span>
            <div className={total.breadCrumbs_img}>
                <NavLink to={`/main/${editPath}`}>
                    <img src={createIcon} alt="createIcon"/>
                </NavLink>
                <NavLink onClick={deleteItem} to={`/main/${pathAfterDeletion}`}>
                    <img src={deleteIcon} alt="deleteIcon"/>
                </NavLink>
            </div>
        </div>
    )
}

export default BreadCrumbs