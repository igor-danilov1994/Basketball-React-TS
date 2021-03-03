import React from 'react'
import './App.css'
import {Redirect, Route, Switch} from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import LoginContainer from "./Components/Login/Login";
import {compose} from "redux";
import Main from './Components/Main/Main';
import {connect} from 'react-redux';


function App(props: any) {
    return (
        <div className="app">
            <Route path='' render={() => <Redirect to="/signIn"/>}/>
            {
                props.isAuth ? <Redirect to="/main/"/>
                : <Route exact path='/signIn' render={() => <LoginContainer/>}/>
            }
            <Route exact path='/signUp' render={() => <Registration/>}/>

            <Route path='/main/' render={() => <Main/>}/>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps)(App))


