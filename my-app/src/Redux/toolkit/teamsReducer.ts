import {createAction, createReducer} from "@reduxjs/toolkit"
import {imageAPI, teamsAPI} from "../../API/api"

export type InitialStateType = typeof initialState

const initialState = {
    data: [{
        conference: null as string | null,
        division: null as string | null,
        foundationYear: null as number | null,
        id: null as number | null,
        imageUrl: null as string | null,
        name: null as string | null,
    }],
    count: null as number | null,
    pageTeam: 1,
    pageSizeTeam: 6,
    serialTeamID: null as number | null,
}

const GET_TEAM: any = createAction('APP/SRC/REDUX/PLAYERS/GET_TEAMS')
const ADD_TEAM: any = createAction('APP/SRC/REDUX/PLAYERS/ADD_TEAM')
const SET_TEAM_PAGE: any = createAction('APP/SRC/REDUX/PLAYERS/SET_TEAM_PAGE')
const SET_TEAM_SIZE: any = createAction('APP/SRC/REDUX/PLAYERS/SET_TEAM_SIZE')
export const SET_SERIAL_TEAM_ID: any = createAction('APP/SRC/REDUX/PLAYERS/SET_SERIAL_TEAM_ID')


//Thunk
export const setTeam: any = (data: any, getCurrentTeamID: number) => async (dispatch: any) => {
    const promise = await imageAPI.saveImage(data.imageUrl[0])
    if (promise.status === 200) {
        data.imageUrl = promise.data
        if (getCurrentTeamID) {
            dispatch(updateTeam(data, getCurrentTeamID))
        } else {
            dispatch(addTeam(data))
        }
    }
};


export const setTeamsRequest = (pageTeam: number, pageSizeTeam: number) => async (dispatch: any) => {
    dispatch(SET_TEAM_PAGE(pageTeam))
    dispatch(SET_TEAM_SIZE(pageSizeTeam))
}

export const addTeam = (data: any) => async (dispatch: any) => {
    const promise = await teamsAPI.addTeam(data)
    if (promise.status === 200) {
        dispatch(ADD_TEAM(promise.data))
    }
};

export const getTeam = (id: number) => async (dispatch: any) => {
    const promise = await teamsAPI.getTeam(id)
    if (promise.status === 200) {
        dispatch(ADD_TEAM(promise.data))
    }
}

export const setPageTeams = (name: string, page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(getTeams(name, page, pageSize))
}

export const updateTeam = (data: any, getCurrentTeamID: number) => async (dispatch: any) => {
    const promise = await teamsAPI.updateTeam(data, getCurrentTeamID)
    if (promise.status === 200) {
        dispatch(addTeam(promise.data))
    }
}

export const deleteTeam = (getCurrentTeamID: number) => async (dispatch: any) => {
    const promise = await teamsAPI.deleteTeam(getCurrentTeamID)
    if (promise.status === 200) {
        //dispatch(ADD_TEAM(promise.data))
    }
}

export const setTeamSerialId = (serialTeamsID: number) => (dispatch: any) => {
    dispatch(SET_SERIAL_TEAM_ID(serialTeamsID))
}

export const getTeams = (name: string, pageTeam: number, pageSizeTeam: number) => async (dispatch: any) => {
    try {
        const promise = await teamsAPI.getTeams(name, pageTeam, pageSizeTeam)
        if (promise.status === 200) {
            dispatch(GET_TEAM(promise.data))
        }
    }
    catch (error) {

    }
}


export default createReducer(initialState, {
    [GET_TEAM]: (state, action) => {
        state.data = action.payload.data
        state.count = action.payload.count
    },
    [ADD_TEAM]: (state, action) => {
        //state.data = action.payload
    },
    [SET_SERIAL_TEAM_ID]: (state, action) => {
        state.serialTeamID = action.payload
    },
    [SET_TEAM_PAGE]: (state, action) => {
        state.pageTeam = action.payload
    },
    [SET_TEAM_SIZE]: (state, action) => {
        state.pageSizeTeam = action.payload
    },
})

