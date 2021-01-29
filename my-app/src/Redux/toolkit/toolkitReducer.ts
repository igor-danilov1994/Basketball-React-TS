import {createAction, createReducer} from "@reduxjs/toolkit";
import {authAPI} from "../../API/api";

import {setAuthUserData} from "../authReducer";

const initialState = {
    isAuth: false,
}

export const SIGN_IN: any = createAction('APP/SRC/REDUX/AUTH/SIGN_IN')

export default createReducer(initialState, {
    [SIGN_IN]: function (state, data) {
        getAuthUserData(data)
        state.isAuth = true

        console.log(state.isAuth)
    }
})


export const getAuthUserData = async (data: any) => {
    debugger
    let response = await authAPI.signIn(data)
    return response

};