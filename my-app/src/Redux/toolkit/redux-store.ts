import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from "./authReducer"
import playersReducer from "./playersReducer"
import teamsReducer from "./teamsReducer"

const rootReducer = combineReducers({
    auth: authReducer,
    players: playersReducer,
    teams: teamsReducer,
})

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>





export const store = configureStore({
    reducer: rootReducer,
})



