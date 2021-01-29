import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from "./authReducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
    auth: authReducer,
});


const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
