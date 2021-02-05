import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from "./authReducer";
import playersReducer from "./playersReducer";
import teamsReducer from "./teamsReducer.ts";

const rootReducer = combineReducers({
    auth: authReducer,
    players: playersReducer,
    teams: teamsReducer,

})

export const store = configureStore({
    reducer: rootReducer,
})



