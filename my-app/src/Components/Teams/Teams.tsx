import React, {useEffect} from 'react'
import TeamsCard from "./TeamsCard/TeamsCard";
import Pagination from "../Pagination/Pagiation";
import {getPageSizeTeam, getPageTeam, getTeamsCount, getTeamsData, getUserName} from "../../Redux/toolkit/selectors";
import {getTeams} from "../../Redux/toolkit/teamsReducer"
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {setTeamsRequest, setPageTeams, setTeamSerialId} from "../../Redux/toolkit/teamsReducer"
import searchIcon from "../../assets/images/search.png";
import total from "../../totalStyle.module.css";

type TeamsPropsType = {
    name: string
    pageTeam: number
    pageSizeTeam: number
    getTeams: (name: string, pageTeam: number, pageSizeTeam: number ) => void
    teamsCount: number
    teams: Array<any>
    setTeamSerialId: (index: number) => void
    setTeamsRequest: (pageTeam: number, pageSizeTeam: number) => void
}

const Teams: React.FC <TeamsPropsType> = (
    {getTeams, name, pageTeam, pageSizeTeam, teamsCount, teams, setTeamSerialId, setTeamsRequest}) => {


    useEffect(() => {
        getTeams(name, pageTeam, pageSizeTeam)
    }, [pageTeam, pageSizeTeam])

    return (
        <>
            {teamsCount !== 0 ?
                <div className={total.mainBlock}>
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

                    <div className={total.mainBlock_card}>
                        {teams.map((teams: any, index: number) =>
                            <NavLink key={teams.id} to='/main/teamsCardDetails'
                                     onClick={() => setTeamSerialId(index)}
                            >
                                <TeamsCard team={teams} key={index}/>
                            </NavLink>
                        )}
                    </div>
                    <Pagination
                        page={pageTeam}
                        pageSize={pageSizeTeam}
                        pageCount={teamsCount}
                        setRequest={setTeamsRequest}
                    />
                </div>
                : <Redirect to="/main/teams_E"/>}
        </>
    )
}


let mapStateToProps = (state: any) => ({
    name: getUserName(state),
    teams: getTeamsData(state),
    pageTeam: getPageTeam(state),
    teamsCount: getTeamsCount(state),
    pageSizeTeam: getPageSizeTeam(state),

})

export default connect(mapStateToProps, {getTeams, setTeamsRequest, setTeamSerialId, setPageTeams})(Teams)
