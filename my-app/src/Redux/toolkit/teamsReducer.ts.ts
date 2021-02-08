import {createAction, createReducer} from "@reduxjs/toolkit";
import {playersAPI} from "../../API/api";



const initialState = {
    data: {
        name: '',
        foundationYear: '',
        division: '',
        conference: '',
        imageUrl: '',
        id: '',
    },
    count: '',
    page: '',
    size: ''
};

const GET_TEAMS: any = createAction('APP/SRC/REDUX/PLAYERS/GET_PLAYERS')
const ADD_TEAMS: any = createAction('APP/SRC/REDUX/PLAYERS/SET_PLAYERS')

//Thunk
export const getPosition = (token: any) => async (dispatch: any) => {
    const promise = await playersAPI.getPositions(token)
    if (promise.status === 200) {

    }
};

export const getPlayer = (token: any) => async (dispatch: any) => {
    const promise = await playersAPI.getPlayers(token)
    if (promise.status === 200) {

    }
};
export const setPlayers = (data: any) => async (dispatch: any) => {

};

export default createReducer(initialState, {
    [GET_TEAMS]: (state, action) => {
    },
    [ADD_TEAMS]: (state, action) => {
    },

})

