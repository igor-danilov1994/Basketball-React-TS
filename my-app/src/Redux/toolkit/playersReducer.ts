import {createAction, createReducer} from "@reduxjs/toolkit";
import {imageAPI, playersAPI} from "../../API/api";

export type InitialStateType = typeof initialState

const initialState = {
    name: null as string | null,
    weight: null as number | null,
    height: null as number | null,
    number: null as number | null,
    team: null as string | null,
    position: null as string | null,
    positions: [],
    avatarUrl: [],
    birthday: null as string | null,
    id: null as number | null,
};

const GET_POSITIONS: any = createAction('APP/SRC/REDUX/PLAYERS/GET_POSITIONS')
const GET_PLAYERS: any = createAction('APP/SRC/REDUX/PLAYERS/GET_PLAYERS')
const SET_PLAYERS: any = createAction('APP/SRC/REDUX/PLAYERS/SET_PLAYERS')
const SAVE_IMAGE: any = createAction('APP/SRC/REDUX/PLAYERS/SAVE_IMAGE')

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

const getBirthday = (age: number) => {
    let month = (new Date().getMonth() + 1)
    let FullYear = (new Date().getFullYear() - age)
    let dayLast = new Date().getDate()
    let birthday = `${FullYear}` + "-" + "0" + `${month}` + "-" + "0" + `${dayLast}`
    return birthday
}

export const setPlayers = (data: any) => async (dispatch: any) => {
    data.age = getBirthday(data.age)
    dispatch(SET_PLAYERS(data))
    const promise = await imageAPI.saveImage(data.img[0])

    if (promise.status === 200) {
        dispatch(SAVE_IMAGE(promise.data));
    }

};

export default createReducer(initialState, {
    [GET_POSITIONS]: (state, action) => {
        state.positions = action.payload
    },
    [GET_PLAYERS]: (state, action) => {
    },
    [SET_PLAYERS]: (state, action) => {
        state.name = action.payload.name
        state.birthday = action.payload.age
        state.height = action.payload.height
        state.name = action.payload.name
        state.number = action.payload.number
        state.position = action.payload.position
        state.team = action.payload.team
        state.weight = action.payload.weight
    },
    [SAVE_IMAGE]: (state, action) => {
        state.avatarUrl = action.payload
    }
})

