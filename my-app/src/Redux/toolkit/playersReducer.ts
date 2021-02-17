import {createAction, createReducer} from "@reduxjs/toolkit";
import {imageAPI, playersAPI} from "../../API/api";

export type InitialStateType = typeof initialState

const initialState = {
    data: [{
        name: null as string | null,
        weight: null as number | null,
        height: null as number | null,
        number: null as number | null,
        team: null as string | null,
        position: null as string | null,
        avatarUrl: null as string | null,
        birthday: null as string | null,
        id: null as number | null,
    }],
    positions: [],
    serialPlayerID: null as number | null,
};

const GET_POSITIONS: any = createAction('APP/SRC/REDUX/PLAYERS/GET_POSITIONS')
const GET_PLAYERS: any = createAction('APP/SRC/REDUX/PLAYERS/GET_PLAYERS')
const ADD_PLAYER: any = createAction('APP/SRC/REDUX/PLAYERS/ADD_PLAYER')
const SET_PLAYERS: any = createAction('APP/SRC/REDUX/PLAYERS/SET_PLAYERS')
const SAVE_IMAGE: any = createAction('APP/SRC/REDUX/PLAYERS/SAVE_IMAGE')
const SET_SERIAL_PLAYER_ID: any = createAction('APP/SRC/REDUX/PLAYERS/SET_SERIAL_PLAYER_ID')

//Thunk
export const getPosition = () => async (dispatch: any) => {
    const promise = await playersAPI.getPositions()
    if (promise.status === 200) {
        dispatch(GET_POSITIONS(promise.data));
    }
};

export const getPlayers = (name: string) => async (dispatch: any) => {
    const promise = await playersAPI.getPlayers(name)
    if (promise.status === 200) {
        dispatch(GET_PLAYERS(promise.data));
    }
};

export const getPlayer = (playersID: number) => async (dispatch: any) => {
    const promise = await playersAPI.getPlayer(playersID)
    if (promise.status === 200) {
        dispatch(GET_PLAYERS(promise.data));
    }
};

const getBirthday = (birthday: string) => {
    let month = (new Date().getMonth() + 1)
    let FullYear = (new Date().getFullYear() - (+birthday))
    let dayLast = new Date().getDate()
    birthday = `${FullYear}` + "-" + "0" + `${month}` + "-" + "0" + `${dayLast}`
    let dayLast2 = new Date()
    return dayLast2
}

export const setPlayers = (data: any) => async (dispatch: any) => {
    data.birthday = Number(data.birthday)
    data.height = Number(data.height)
    data.number = Number(data.number)
    data.weight = Number(data.weight)
    data.team = Number(data.team)

    data.birthday = getBirthday(data.birthday)
    //dispatch(SET_PLAYERS(data))

    const promise = await imageAPI.saveImage(data.avatarUrl[0])
    if (promise.status === 200) {
        dispatch(SAVE_IMAGE(promise.data))
        data.avatarUrl = promise.data
    }
    dispatch(addPlayer(data))
};

const addPlayer = (data: any) => async (dispatch: any) => {
    const promise = await playersAPI.addPlayers(data)
    if (promise.status === 200) {

        dispatch(ADD_PLAYER(promise.data));
    }
};

export const setSerialPlayersID = (serialPlayersID: number) => async (dispatch: any) => {
    dispatch(SET_SERIAL_PLAYER_ID(serialPlayersID))
}

export default createReducer(initialState, {
    [GET_POSITIONS]: (state, action) => {
        state.positions = action.payload
    },
    [GET_PLAYERS]: (state, action) => {
        state.data = action.payload.data

    },
    [ADD_PLAYER]: (state, action) => {
        state.data = action.payload
    },
    [SAVE_IMAGE]: (state, action) => {
        //state.data.avatarUrl = action.payload
    },
    [SET_SERIAL_PLAYER_ID]: (state, action) => {
        state.serialPlayerID = action.payload
    },

})

