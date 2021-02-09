import {createAction, createReducer} from "@reduxjs/toolkit";
import {authAPI} from "../../API/api";

export type InitialStateType = typeof initialState

const initialState = {
    isAuth: false as boolean,
    isRegistered: false as boolean,
    name: null as string | null,
    token: null as string | null
};

const SIGN_IN: any = createAction('APP/SRC/REDUX/AUTH/SIGN_IN')
const SIGN_UP: any = createAction('APP/SRC/REDUX/AUTH/SIGN_UP')
export const SIGN_OUT: any = createAction('APP/SRC/REDUX/AUTH/SIGN_OUT')

//Thunk
export const getConfirmationAuthUser = (data: object) => async (dispatch: any) => {
    let response = await authAPI.signUp(data)
    if (response.status === 200) {
        dispatch(SIGN_UP(response.data));
    }
};

export const getAuthUserData = (data: object) => async (dispatch: any) => {
    let response = await authAPI.signIn(data)
    if (response.status === 200) {
        dispatch(SIGN_IN(response.data))
    }
};

export default createReducer(initialState, {
    [SIGN_IN]: (state, action) => {
        state.isAuth = true
        state.name = action.payload.name
        localStorage.setItem('token', action.payload.token)
    },
    [SIGN_UP]: (state, action) => {
        state.isRegistered = true
    },
    [SIGN_OUT]: (state) => {
        state.isAuth = false
    },
})

