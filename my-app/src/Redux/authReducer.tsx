import {authAPI} from '../API/api'

const SIGN_IN = 'APP/SRC/REDUX/AUTH/SIGN_IN'

let initState = {
    isAuth: false,
};

const authReducer = (state = initState, action: any) => {

    switch (action.type) {
        case SIGN_IN:
            debugger
            return {
                ...state,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (isAuth: boolean) => (
    {type: SIGN_IN, isAuth}
);

export const getAuthUserData = (data: any) => async (dispatch: any) => {

    let response = await authAPI.signIn(data)
    if (response.status === 200) {
        debugger
        let name = response.data.name
        dispatch(setAuthUserData(true));
    }
};

export default authReducer;