import React from 'react';
import total from "../../totalStyle.module.css";
import createIcon from "../../assets/images/create-icon.png";
import deleteIcon from "../../assets/images/delete-icon.png";
import {NavLink} from "react-router-dom";

let BreadCrumbs = (props: any) => {

    return (
        <div className={total.breadCrumbs}>
            <span> Main / {props.katigories} / {props.name} </span>
            <div className={total.breadCrumbs_img}>
                <NavLink to={`/main/${props.path}`}>
                    <img src={createIcon} alt="createIcon"/>
                </NavLink>
                <NavLink onClick={props.delete} to={`/main/${props.pathAfterDeletion}`}>
                    <img src={deleteIcon} alt="deleteIcon"/>
                </NavLink>
            </div>
        </div>
    )
}

export default BreadCrumbs