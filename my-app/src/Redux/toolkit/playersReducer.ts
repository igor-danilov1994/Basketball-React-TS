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
const ADD_PLAYER: any = createAction('APP/SRC/REDUX/PLAYERS/ADD_PLAYER')
const SET_PLAYERS: any = createAction('APP/SRC/REDUX/PLAYERS/SET_PLAYERS')
const SAVE_IMAGE: any = createAction('APP/SRC/REDUX/PLAYERS/SAVE_IMAGE')

//Thunk
export const getPosition = (token: string) => async (dispatch: any) => {
    const promise = await playersAPI.getPositions(token)
    if (promise.status === 200) {
        dispatch(GET_POSITIONS(promise.data));
    }
};

export const getPlayer = (playersID: number) => async (dispatch: any) => {
    debugger
    const promise = await playersAPI.getPlayers(playersID)
    if (promise.status === 200) {
        debugger
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

export default createReducer(initialState, {
    [GET_POSITIONS]: (state, action) => {
        state.positions = action.payload
    },
    [GET_PLAYERS]: (state, action) => {
        debugger
    },
    [ADD_PLAYER]: (state, action) => {
        state = action.payload.data
        debugger
    },
    [SAVE_IMAGE]: (state, action) => {
        state.avatarUrl = action.payload
    },
    [ADD_PLAYER]: (state, action) => {
    }
})

