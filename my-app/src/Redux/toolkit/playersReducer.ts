import {createAction, createReducer} from "@reduxjs/toolkit";
import {playersAPI} from "../../API/api";
import avatar1 from "../../Components/Players/images/photo1.png";
import avatar2 from "../../Components/Players/images/photo2.png";
import avatar3 from "../../Components/Players/images/photo3.png";
import avatar4 from "../../Components/Players/images/photo4.png";
import avatar5 from "../../Components/Players/images/photo5.png";
import avatar6 from "../../Components/Players/images/photo6.png";



export type InitialStateType = typeof initialState

const initialState = {
    name: null as string | null,
    age: null as number | null,
    weight: null as number | null,
    height: null as number | null,
    number: null as number | null,
    team: null as string | null,
    position: null as string | null,
    positions: Array,
    avatarUrl: [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6],
    birthday: null as number | null,
    id: null as number | null,
};


const GET_POSITIONS: any = createAction('APP/SRC/REDUX/PLAYERS/GET_POSITIONS')
const GET_PLAYERS: any = createAction('APP/SRC/REDUX/PLAYERS/GET_PLAYERS')
const SET_PLAYERS: any = createAction('APP/SRC/REDUX/PLAYERS/SET_PLAYERS')

//Thunk
export const getPosition = (token: string) => async (dispatch: any) => {
    const promise = await playersAPI.getPositions(token)
    if (promise.status === 200) {
        dispatch(GET_POSITIONS(promise.data));
    }
};

export const getPlayer = (token: string) => async (dispatch: any) => {
    const promise = await playersAPI.getPlayers(token)
    if (promise.status === 200) {
        dispatch(GET_PLAYERS(promise.data));
    }
};
export const setPlayers = (data: object) => async (dispatch: any) => {
    dispatch(SET_PLAYERS(data));
};

export default createReducer(initialState, {
    [GET_POSITIONS]: (state, action) => {
        state.positions = action.payload
    },
    [GET_PLAYERS]: (state, action) => {
    },
    [SET_PLAYERS]: (state, action) => {
        debugger
        state.age = action.payload.age
        state.age = action.payload.age
        state.height = action.payload.height
        state.name = action.payload.name
        state.number = action.payload.number
        state.position = action.payload.position
        state.team = action.payload.team
        state.weight = action.payload.weight
    },
})

