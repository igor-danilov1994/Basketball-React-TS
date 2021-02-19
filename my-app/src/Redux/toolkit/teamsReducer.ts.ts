import {createAction, createReducer} from "@reduxjs/toolkit";
import {imageAPI, teamsAPI} from "../../API/api";

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
};

const GET_TEAM: any = createAction('APP/SRC/REDUX/PLAYERS/GET_TEAMS')
const ADD_TEAM: any = createAction('APP/SRC/REDUX/PLAYERS/ADD_TEAM')
export const SET_SERIAL_TEAM_ID: any = createAction('APP/SRC/REDUX/PLAYERS/SET_SERIAL_TEAM_ID')

//Thunk
export const setTeam = (data: any, getCurrentTeamID: number) => async (dispatch: any) => {
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

export const addTeam = (data: any) => async (dispatch: any) => {
    const promise = await teamsAPI.addTeam(data)
    if (promise.status === 200) {
        dispatch(ADD_TEAM(promise.data))
    }
};

export const updateTeam = (data: any, getCurrentTeamID: number) => async (dispatch: any) => {
    const promise = await teamsAPI.updateTeam(data, getCurrentTeamID)
    if (promise.status === 200) {
        dispatch(addTeam(promise.data))
    }
};
export const deleteTeam = (getCurrentTeamID: number) => async (dispatch: any) => {
    const promise = await teamsAPI.deleteTeam(getCurrentTeamID)
    if (promise.status === 200) {
        //dispatch(ADD_TEAM(promise.data))
    }
};

export const setTeamSerialId = (serialTeamsID: any) => (dispatch: any) => {
    dispatch(SET_SERIAL_TEAM_ID(serialTeamsID))
};

export const getTeams = (name: string, pageTeam: number, pageSizeTeam: number ) => async (dispatch: any) => {
    const promise = await teamsAPI.getTeams(name, pageTeam, pageSizeTeam)
    if (promise.status === 200) {
        dispatch(GET_TEAM(promise.data))
    }
};


export default createReducer(initialState, {
    [GET_TEAM]: (state, action) => {

        state.data = action.payload.data
        state.count = action.payload.count
        state.pageSizeTeam = action.payload.size
    },
    [ADD_TEAM]: (state, action) => {
        state.data.push(action.payload)
    },
    [SET_SERIAL_TEAM_ID]: (state, action) => {
        state.serialTeamID = action.payload
    }
})

