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
    count: null as number | null,
    pagePlayer: 1,
    pageSizePlayer: 6,
    positions: [],
    serialPlayerID: null as number | null,
};

const GET_POSITIONS: any = createAction('APP/SRC/REDUX/PLAYERS/GET_POSITIONS')
const GET_PLAYERS: any = createAction('APP/SRC/REDUX/PLAYERS/GET_PLAYERS')
const SET_PLAYER: any = createAction('APP/SRC/REDUX/PLAYERS/SET_PLAYER')
const ADD_PLAYER: any = createAction('APP/SRC/REDUX/PLAYERS/ADD_PLAYER')
const SET_PLAYER_PAGE: any = createAction('APP/SRC/REDUX/PLAYERS/SET_PLAYER_PAGE')
const SET_PLAYER_SIZE: any = createAction('APP/SRC/REDUX/PLAYERS/SET_PLAYER_SIZE')
const SET_SERIAL_PLAYER_ID: any = createAction('APP/SRC/REDUX/PLAYERS/SET_SERIAL_PLAYER_ID')

//Thunk
export const getPosition = () => async (dispatch: any) => {
    const promise = await playersAPI.getPositions()
    if (promise.status === 200) {
        dispatch(GET_POSITIONS(promise.data));
    }
};

export const setPlayersRequest = (pagePlayer: number, pageSizePlayer: number) => async (dispatch: any) => {
    dispatch(SET_PLAYER_PAGE(pagePlayer))
    dispatch(SET_PLAYER_SIZE(pageSizePlayer))
};

export const getPlayers = (name: string, pagePlayer: number, pageSizePlayer: number) => async (dispatch: any) => {
    const promise = await playersAPI.getPlayers(name, pagePlayer, pageSizePlayer)
    if (promise.status === 200) {

        dispatch(GET_PLAYERS(promise.data));
    }
};


export const getPlayer = (ID: number) => async (dispatch: any) => {
    const promise = await playersAPI.getPlayer(ID)
    if (promise.status === 200) {
        dispatch(SET_PLAYER(promise.data));
    }
};

export const savePlayers = (data: any) => async (dispatch: any) => {
    data.height = Number(data.height)
    data.number = Number(data.number)
    data.weight = Number(data.weight)
    data.team = Number(data.team)

    const promise = await imageAPI.saveImage(data.avatarUrl[0])
    if (promise.status === 200) {
        data.avatarUrl = promise.data
        dispatch(addPlayer(data))
    }
};

const addPlayer = (data: any) => async (dispatch: any) => {
    const promise = await playersAPI.addPlayers(data)
    if (promise.status === 200) {
        dispatch(ADD_PLAYER(promise.data));
    }
};
export const deletePlayer = (getCurrentPlayersID: number) => async (dispatch: any) => {
    const promise = await playersAPI.deletePlayers(getCurrentPlayersID)
    if (promise.status === 200) {
        //dispatch(ADD_PLAYER(promise.data));
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
        state.pagePlayer = action.payload.page
        state.pageSizePlayer = action.payload.size
        state.count = action.payload.count
    },
    [ADD_PLAYER]: (state, action) => {
        state.data.push(action.payload)
    },
    [SET_SERIAL_PLAYER_ID]: (state, action) => {
        state.serialPlayerID = action.payload
    },
    [SET_PLAYER_SIZE]: (state, action) => {
        state.pageSizePlayer = action.payload
    },
    [SET_PLAYER_PAGE]: (state, action) => {
        state.pagePlayer = action.payload
    },
    [SET_PLAYER]: (state, action) => {
        state.data = action.payload
    },

})

