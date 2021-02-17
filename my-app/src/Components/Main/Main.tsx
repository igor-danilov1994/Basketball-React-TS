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

const Main = (props: any) => {
    //debugger
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
                    <Route path='/main/addPlayer' render={() => <AddPlayer/>}/>
                    <Route path='/main/addTeams' render={() => < AddTeams/>}/>
                    <Route path='/main/playersCardDetails' render={() => < PlayersCardDetails/>}/>
                    <Route path='/main/teamsCardDetails' render={() => < TeamsCardDetails/>}/>
                </div>
            </div>
        </div>
    )
}
let mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, {getTeams, getPlayers, getPosition, getPlayer})(Main)


