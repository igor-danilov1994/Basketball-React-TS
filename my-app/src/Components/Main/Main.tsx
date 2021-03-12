import React, {useEffect} from 'react'
import '../../App.css'
import {Redirect, Route, Switch} from "react-router-dom";
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
import {getPosition} from "../../Redux/toolkit/playersReducer";


const Main = (props: any) => {
    useEffect(() => {
        props.getPosition()
    }, [])

    return (
        <>
            <Header/>
            <div className="app-content">
                <Menu/>
                <div className="main">

                    {props.teamsCount > 1 ? <Redirect to="/main/players"/> : <Redirect to="/main/teams"/>}

                    {/* <Route path='' render={() => <Redirect to="/main/players"/>}/>*/}


                    <Route path='/main/teams' render={() => <Teams/>}/>
                    <Route path='/main/teams_E' render={() => <TeamsEmpty/>}/>
                    <Route path='/main/teamsCardDetails' render={() => < TeamsCardDetails/>}/>
                    <Route path='/main/addTeams' render={() => < AddTeams/>}/>

                    <Route path='/main/players' render={() => <Players/>}/>
                    <Route path='/main/players_E' render={() => <PlayersEmpty/>}/>
                    <Route path='/main/playersCardDetails' render={() => < PlayersCardDetails/>}/>
                    <Route path='/main/addPlayer' render={() => <AddPlayer/>}/>
                    {/*<Route path='*' render={() => <div> page 404 NOT FOUND</div>}/>*/}

                </div>
            </div>
        </>
    )
}
let mapStateToProps = (state: any) => ({
    teamsCount: state.teams.count,
})


export default connect(mapStateToProps, {getPosition})(Main)


