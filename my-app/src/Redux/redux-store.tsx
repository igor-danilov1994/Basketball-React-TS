import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import authReducer from "./authReducer";
import playersReducer from "./playersReducer";
import teamsReducer from "./teamsReducer";


let reducers = combineReducers({
    auth: authReducer,
    players: playersReducer,
    teams: teamsReducer,
});


const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
