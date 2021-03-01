import React, {useEffect} from 'react'
import s from './Teams.module.css'
import TeamsCard from "./TeamsCard/TeamsCard";
import Pagination from "../Pagination/Pagiation";
import {getPageSizeTeam, getPageTeam, getTeamsCount, getTeamsData} from "../../Redux/toolkit/selectors";
import {getTeams} from "../../Redux/toolkit/teamsReducer.ts";
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {setTeamsRequest, setPageTeams, setTeamSerialId} from "../../Redux/toolkit/teamsReducer.ts";
import searchIcon from "../../assets/images/search.png";
import total from "../../totalStyle.module.css";

const Teams = (props: any) => {

    useEffect(() => {
        props.getTeams(props.name, props.pageTeam, props.pageSizeTeam)
    }, [props.pageTeam, props.pageSizeTeam])

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
                            <NavLink key={teams.id} to='/main/teamsCardDetails'
                                     onClick={() => props.setTeamSerialId(teams.id)}>
                                <TeamsCard imageUrl={teams.imageUrl}
                                           teams={teams}
                                           name={teams.name}
                                           foundationYear={teams.foundationYear}
                                           division={teams.division}
                                           id={id} key={teams.id}
                                />
                            </NavLink>
                        )}
                    </div>
                    <div className={s.teamsPagination}>
                        <Pagination pageCount={props.teamsCount} setRequest={props.setTeamsRequest}
                            //setPage={props.setPageTeams}
                        />
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
    pageTeam: getPageTeam(state),
    pageSizeTeam: getPageSizeTeam(state),

})

export default connect(mapStateToProps, {getTeams, setTeamsRequest, setTeamSerialId, setPageTeams})(Teams)
