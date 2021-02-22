import React from 'react'
import s from './Teams.module.css'
import TeamsCard from "./TeamsCard/TeamsCard";
import Pagination from "../Pagination/Pagiation";
import {getPageSizeTeam, getPageTeam, getTeamsCount, getTeamsData} from "../../Redux/toolkit/selectors";
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {setPageTeams} from "../../Redux/toolkit/teamsReducer.ts";
import searchIcon from "../../assets/images/search.png";
import total from "../../totalStyle.module.css";

const Teams = (props: any) => {
    return (
        <>
            {props.teamsCount !== 0 ?
                <div className={s.teams}>
                    <div className={total.topElement}>

                        <div className={total.topElement_search}>
                            <input type="text" placeholder='Search...'/>
                            <img src={searchIcon} alt="search"/>
                        </div>

                        <NavLink to='/main/addTeams'
                                 className={`${total.btn} ${total.btn_add} ${total.topElement_btn}`}>
                            <span>Add</span>
                            <span>+</span>
                        </NavLink>

                    </div>

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
                        <Pagination pageCount={props.teamsCount} setPage={props.setPageTeams}
                                    page={props.teamsPage} pageSize={props.pageSizeTeam}/>
                    </div>
                </div>
                : <Redirect to="/main/teams_E"/>}
        </>
    )
}


let mapStateToProps = (state: any) => ({
    state: state,
    teams: getTeamsData(state),
    teamsCount: getTeamsCount(state),
    teamsPage: getPageTeam(state),
    pageSizeTeam: getPageSizeTeam(state)

})

export default connect(mapStateToProps, {setPageTeams})(Teams)
