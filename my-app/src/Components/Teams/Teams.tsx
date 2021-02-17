import React from 'react'
import s from './Teams.module.css'
import TeamsCard from "./TeamsCard/TeamsCard";
import Pagination from "../Pagination/Pagiation";
import TopInnerElement from "../TopInnerElement/TopInnerElement";
import {getTeamsData} from "../../Redux/toolkit/selectors";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {getTeams} from "../../Redux/toolkit/teamsReducer.ts";


const Teams = (props: any) => {

    return (
        <div className={s.teams}>
            <TopInnerElement/>
            <div className={s.teams_card}>
                {props.teams.map((teams: any, id: number) =>
                    <NavLink to='/main/teamsCardDetails'>
                        <TeamsCard imageUrl={teams.imageUrl}
                                   name={teams.name}
                                   foundationYear={teams.foundationYear}
                                   division={teams.division}
                                   id={id}
                        />
                    </NavLink>
                )}
            </div>
            <div className={s.teamsPagination}>
                <Pagination/>
            </div>
        </div>
    )
}

let mapStateToProps = (state: any) => ({
    teams: getTeamsData(state)
})

export default connect(mapStateToProps, {getTeams})(Teams)
