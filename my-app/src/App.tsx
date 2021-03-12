import React from 'react'
import './App.css'
import {Redirect, Route} from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import Main from './Components/Main/Main';
import {connect} from 'react-redux';
import {AppStateType} from "./Redux/toolkit/redux-store";


type AppPropsType = {
    isAuth: boolean
}

const App: React.FC <AppPropsType> = ({isAuth}) => {
    return (
        <div className="app">
            <Route path='' render={() => <Redirect to="/signIn"/>}/>
            {isAuth ? <Redirect to="/main/"/>
                : <Route exact path='/signIn' render={() => <Login/>}/>
            }
            <Route exact path='/signUp' render={() => <Registration/>}/>

            <Route path='/main/' render={() => <Main/>}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps)(App)


