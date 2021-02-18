import React, {useEffect} from 'react'
import '../../App.css'
import {Route} from "react-router-dom";
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
    getPlayersData,
    getSerialPlayerID,
    getSerialTeamID,
    getTeamsData
} from "../../Redux/toolkit/selectors";

const Main = (props: any) => {
    useEffect(() => {
        props.getTeams(props.playersName)
        props.getPlayers(props.playersName)
        props.getPosition()
        props.getPlayer(props.id)
    }, [])

    return (
        <div>
            <Header/>
            <div className="app-content">
                <MenuContainer/>
                <div className="main">
                    <Route path='/main/teams' render={() => <Teams/>}/>
                    <Route path='/main/teams_E' render={() => <TeamsEmpty/>}/>
                    <Route path='/main/players' render={() => <Players/>}/>
                    <Route path='/main/players_E' render={() => <PlayersEmpty/>}/>
                    <Route path='/main/addPlayer' render={() => <AddPlayer players={props.players}/>}/>
                    <Route path='/main/addTeams' render={() => < AddTeams teams={props.teams}
                                                                          serialTeamID={props.serialTeamID}
                    />}/>
                    <Route path='/main/playersCardDetails' render={() => < PlayersCardDetails/>}/>
                    <Route path='/main/teamsCardDetails' render={() => < TeamsCardDetails/>}/>
                </div>
            </div>
        </div>
    )
}
let mapStateToProps = (state: any) => ({
    players: getPlayersData(state),
    teams: getTeamsData(state),
    serialTeamID: getSerialTeamID(state),
    serialPlayerID: getSerialPlayerID(state),
})

export default connect(mapStateToProps, {getTeams, getPlayers, getPosition, getPlayer})(Main)


