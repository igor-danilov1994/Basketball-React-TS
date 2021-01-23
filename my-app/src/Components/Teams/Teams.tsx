import React from 'react'
import s from './Teams.module.css'
import Teams_card from "./Teams card/Teams_card";
import Pagination from "../Pagination/Pagiation";
import TopInnerElement from "../TopInnerElement/TopInnerElement";


const Teams = () => {
    return (
        <div className={s.teams}>
                <TopInnerElement />

            <div className={s.teams_card}>
                <Teams_card />
                <Teams_card  />
                <Teams_card />
                <Teams_card />
                <Teams_card />
                <Teams_card />
            </div>
            <div className={s.teamsPagination} >
                <Pagination />
            </div>
        </div>
    )
}


export default Teams
