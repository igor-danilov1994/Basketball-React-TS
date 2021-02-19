import React, {useEffect} from 'react'
import '../../App.css'
import {Redirect, Route} from "react-router-dom";
import Header from '../Header/Header';
import MenuContainer from "../Menu/Menu";
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
import {getPlayer, getPlayers, getPosition} from "../../Redux/toolkit/playersReducer";
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
        props.getPlayers(null,props.pagePlayer, props.pageSizePlayer)
        props.getPosition()
        props.getPlayer()
    }, [])
//debugger
    return (
        <div>
            <Header/>
            <div className="app-content">
                <MenuContainer/>
                <div className="main">

                    <Redirect to="/main/teams"/>

                    <Route path='/main/teams_E' render={() => <TeamsEmpty/>}/>
                    <Route path='/main/teams' render={() => <Teams/>}/>
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
        </div>
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
})

export default connect(mapStateToProps, {getTeams, getPlayers, getPosition, getPlayer})(Main)


