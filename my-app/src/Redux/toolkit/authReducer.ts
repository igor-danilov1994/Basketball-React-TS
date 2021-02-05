import {createAction, createReducer} from "@reduxjs/toolkit";
import {authAPI} from "../../API/api";


const initialState = {
    isAuth: false,
    isReg: false,
    name: '',
    token: ''
};

const SIGN_IN: any = createAction('APP/SRC/REDUX/AUTH/SIGN_IN')
const SIGN_UP: any = createAction('APP/SRC/REDUX/AUTH/SIGN_UP')
export const SIGN_OUT: any = createAction('APP/SRC/REDUX/AUTH/SIGN_OUT')

//Thunk
export const getConfirmationAuthUser = (data: any) => async (dispatch: any) => {
    let response = await authAPI.signUp(data)
    if (response.status === 200) {
        dispatch(SIGN_UP(response.data));
    }
};

export const getAuthUserData = (data: any) => async (dispatch: any) => {
    let response = await authAPI.signIn(data)
    if (response.status === 200) {
        dispatch(SIGN_IN(response.data));
    }
};

export default createReducer(initialState, {
    [SIGN_IN]: (state, action) => {
        state.isAuth = true
        state.name = action.payload.name
        state.token = action.payload.token
    },
    [SIGN_UP]: (state, action) => {
        state.isReg = true
        state.name = action.payload.name
        state.token = action.payload.token
    },
    [SIGN_OUT]: (state) => {
        state.isAuth = false
    },
})

