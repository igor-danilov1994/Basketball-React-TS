import React from 'react'
import s from './Teams.module.css'
import TeamsCard from "./TeamsCard/TeamsCard";
import Pagination from "../Pagination/Pagiation";
import TopInnerElement from "../TopInnerElement/TopInnerElement";
import {getTeamsCount, getTeamsData} from "../../Redux/toolkit/selectors";
import {connect} from "react-redux";
import {NavLink, Redirect, Route} from "react-router-dom";
import {getTeams} from "../../Redux/toolkit/teamsReducer.ts";
import TeamsEmpty from "./TeamsEmpty/TeamsEmpty";


const Teams = (props: any) => {

    return (
        <div>
            {props.teamsCount !== 0 ?
                <div className={s.teams}>
                    <TopInnerElement/>
                    <div className={s.teams_card}>
                        {props.teams.map((teams: any, id: number) =>
                            <NavLink key={teams.id} to='/main/teamsCardDetails'>
                                <TeamsCard imageUrl={teams.imageUrl}
                                           name={teams.name}
                                           foundationYear={teams.foundationYear}
                                           division={teams.division}
                                           id={id} key={teams.id}
                                />
                            </NavLink>
                        )}
                    </div>
                    <div className={s.teamsPagination}>
                        <Pagination/>
                    </div>
                </div>
            : <Redirect to="/main/teams_E"/> }
        </div>
    )
}


let mapStateToProps = (state: any) => ({
    state: state,
    teams: getTeamsData(state),
    teamsCount: getTeamsCount(state)
})

export default connect(mapStateToProps, {getTeams})(Teams)
