import React from 'react'
import './App.css'
import {Redirect, Route, /*withRouter*/} from "react-router-dom";
import RegistrationContainer from "./Components/Registration/Registration";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Teams from "./Components/Teams/Teams";
import Players from "./Components/Players/Players";
import AddPlayer from "./Components/Players/AddPlayer/AddPlayer";
import AddTeams from "./Components/Teams/AddTeams/AddTeams";
import TeamsEmpty from "./Components/Teams/TeamsEmpty/TeamsEmpty";
import PlayersEmpty from "./Components/Players/PlayersEmpty/PlayersEmpty";
import PlayersCardDetails from './Components/Players/PlayersCardDetails/PlayersCardDetails';
import TeamsCardDetails from "./Components/Teams/TeamsCardDetails/TeamsCardDetails";
import LoginContainer from "./Components/Login/Login";
import {compose} from "redux";
import {connect} from 'react-redux';
import MenuContainer from "./Components/Menu/Menu";


function App(props: any) {
    return (
        <div className="app">
            {props.state.auth.isAuth ?
                <div>
                    <Header name={props.state.auth.name}/>
                    <div className="app-content">
                        <MenuContainer/>
                        <div className="main">
                            <Route path='/teams' render={() => <Teams/>}/>
                            <Route path='/teams_E' render={() => <TeamsEmpty/>}/>
                            <Route path='/players' render={() => <Players/>}/>
                            <Route path='/players_E' render={() => <PlayersEmpty/>}/>
                            <Route path='/addPlayer' render={() => <AddPlayer/>}/>
                            <Route path='/addTeams' render={() => < AddTeams/>}/>
                            <Route path='/playersCardDetails' render={() => < PlayersCardDetails/>}/>
                            <Route path='/teamsCardDetails' render={() => < TeamsCardDetails/>}/>
                        </div>
                    </div>
            </div>
            : <Route exact path='/signIn' render={() => <LoginContainer/>}/>}

            <Route exact path='/signUp' render={() => <RegistrationContainer/>}/>


        </div>
    )
}

/*let Patch = (isAuth: any) => {
    debugger
        if (isAuth) {
             return <Redirect to="/players_E"/>
        }

}*/


    const mapStateToProps = (state: any) => ({
        state: state
    })

    export default compose(
        /*withRouter,*/
        connect(mapStateToProps, /*{Patch}*/)(App))


