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
    //debugger

    useEffect(() => {
        //debugger
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
                        {props.teams.map((teams: any, index: number) =>
                            <NavLink key={teams.id} to='/main/teamsCardDetails'
                                     onClick={() => props.setTeamSerialId(index)}
                            >

                                <TeamsCard team={teams} key={index} index={index}/>

                            </NavLink>
                        )}
                    </div>
                    <div className={s.teamsPagination}>
                        <Pagination
                            page={props.pageTeam}
                            pageSize={props.pageSizeTeam}
                            pageCount={props.teamsCount}
                            setRequest={props.setTeamsRequest}
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
    pageTeam: getPageTeam(state),
    teamsCount: getTeamsCount(state),
    pageSizeTeam: getPageSizeTeam(state),

})

export default connect(mapStateToProps, {getTeams, setTeamsRequest, setTeamSerialId, setPageTeams})(Teams)
