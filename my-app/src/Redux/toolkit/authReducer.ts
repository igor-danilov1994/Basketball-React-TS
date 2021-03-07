import {createAction, createReducer} from "@reduxjs/toolkit";
import {authAPI} from "../../API/api";

export type InitialStateType = typeof initialState

const initialState = {
    isAuth: false,
    isRegistered: false,
    name: null as string | null,
    token: null as string | null,
    signUpError: false,
    signInError: false,
};

const SIGN_IN: any = createAction('APP/SRC/REDUX/AUTH/SIGN_IN')
const SIGN_IN_ERROR: any = createAction('APP/SRC/REDUX/AUTH/SIGN_IN_ERROR')
const SIGN_UP: any = createAction('APP/SRC/REDUX/AUTH/SIGN_UP')
const SIGN_UP_ERROR: any = createAction('APP/SRC/REDUX/AUTH/SIGN_UP_ERROR')
export const SIGN_OUT: any = createAction('APP/SRC/REDUX/AUTH/SIGN_OUT')

//Thunk
export const getConfirmationAuthUser = (data: object) => async (dispatch: any) => {
    try {
        let response = await authAPI.signUp(data)
        if (response.status === 200) {
            dispatch(SIGN_UP(response.data));
        }
    } catch (error) {
        dispatch(SIGN_UP_ERROR());
    }

};

export const getAuthUserData = (data: object) => async (dispatch: any) => {
    try {
        let response = await authAPI.signIn(data)
        if (response.status === 200) {
            dispatch(SIGN_IN(response.data))
        }
    } catch (error) {
        dispatch(SIGN_IN_ERROR())
    }
};

export const signOut = () => (dispatch: any) => {
    dispatch(SIGN_OUT())
};

export default createReducer(initialState, {
    [SIGN_IN]: (state, action) => {
        state.isAuth = true
        state.name = action.payload.name
        state.token = action.payload.token
        //localStorage.setItem('token', action.payload.token)
    },
    [SIGN_UP]: (state, action) => {
        state.isRegistered = true
    },
    [SIGN_UP_ERROR]: (state, action) => {
        state.signUpError = true
    },
    [SIGN_IN_ERROR]: (state, action) => {
        state.signInError = true
    },
    [SIGN_OUT]: (state) => {
        state.isAuth = false
        state.token = null
        state.name = null
        localStorage.removeItem('token')
    },
})

