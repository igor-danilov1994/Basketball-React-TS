import React, {useEffect} from 'react'
import '../../App.css'
import {Redirect, Route} from "react-router-dom";
import Header from '../Header/Header';
import Menu from "../Menu/Menu";
import Teams from "../Teams/Teams";
import TeamsEmpty from '../Teams/TeamsEmpty/TeamsEmpty';
import TeamsCardDetails from "../Teams/TeamsCardDetails/TeamsCardDetails";
import Players from '../Players/Players';
import PlayersEmpty from "../Players/PlayersEmpty/PlayersEmpty";
import AddPlayer from '../Players/AddPlayer/AddPlayer';
import AddTeams from '../Teams/AddTeams/AddTeams';
import PlayersCardDetails from '../Players/PlayersCardDetails/PlayersCardDetails';
import {connect} from "react-redux";
import {getTeams} from "../../Redux/toolkit/teamsReducer.ts";
import {getPlayers, getPosition} from "../../Redux/toolkit/playersReducer";
import {
    getCurrentPosition,
    getPageSizeTeam, getPageTeam,
    getPageSizePlayer,
    getPlayersData,
    getSerialPlayerID,
    getSerialTeamID,
    getTeamsData,
    getPagePlayer,
} from "../../Redux/toolkit/selectors";

const Main = (props: any) => {

    useEffect(() => {
        props.getTeams(null, props.pageTeam, props.pageSizeTeam)
        props.getPlayers(null, props.pagePlayer, props.pageSizePlayer)
        props.getPosition()
        //props.getPlayer()
    }, [])
//debugger
    return (
        <>
            <Header/>
            <div className="app-content">
                <Menu/>
                <div className="main">
                    {props.teamsCount !== 0 && <Redirect to="/main/players"/> }

                    <Route path='/main/teams' render={() => <Teams/>}/>
                    <Route path='/main/teams_E' render={() => <TeamsEmpty/>}/>
                    <Route path='/main/teamsCardDetails' render={() => < TeamsCardDetails/>}/>
                    <Route path='/main/addTeams' render={() => < AddTeams teams={props.teamsData}
                                                                          serialTeamID={props.serialTeamID}/>}/>

                    <Route path='/main/players_E' render={() => <PlayersEmpty/>}/>
                    <Route path='/main/players' render={() => <Players players={props.players}/>}/>
                    <Route path='/main/playersCardDetails' render={() => < PlayersCardDetails/>}/>
                    <Route path='/main/addPlayer' render={() => <AddPlayer
                        positions={props.positions} players={props.players}/>}/>

                </div>
            </div>
        </>
    )
}
let mapStateToProps = (state: any) => ({
    state: state,

    pageTeam: getPageTeam(state),
    pageSizeTeam: getPageSizeTeam(state),

    pagePlayer: getPagePlayer(state),
    pageSizePlayer: getPageSizePlayer(state),

    positions: getCurrentPosition(state),
    players: getPlayersData(state),
    teamsData: getTeamsData(state),
    serialTeamID: getSerialTeamID(state),
    serialPlayerID: getSerialPlayerID(state),

    teamsCount: state.teams.count,


})

export default connect(mapStateToProps, {getTeams, getPlayers, getPosition})(Main)


