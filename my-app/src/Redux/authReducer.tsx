import {authAPI} from '../API/api'

const SIGN_IN = 'APP/SRC/REDUX/AUTH/SIGN_IN'
const SIGN_UP = 'APP/SRC/REDUX/AUTH/SIGN_UP'
const SIGN_OUT = 'APP/SRC/REDUX/AUTH/SIGN_OUT'

let initState = {
    isAuth: true,
    isReg: true,
    name: '',
    token: ''
};

const authReducer = (state = initState, action: any) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isAuth: true,
                name: action.name,
                token: action.token,
            }
        case SIGN_UP:
            debugger
            return {
                ...state,
                isReg: true,
                name: action.name,
                token: action.token,
            }
        case SIGN_OUT:
            return {
                ...state,
                isAuth: false,
                name: action.name
            }
        default:
            return state;
    }
}
//ActionCreator
export const getAuth = (isAuth: boolean, name: string, token: string) => (
    {type: SIGN_IN, isAuth, name, token}
);

export const reg = (isReg: boolean, name: string, token: string) => (
    {type: SIGN_UP, isReg, name, token}
);

export const signOut = (isAuth: boolean, name: string) => (
    {type: SIGN_OUT, isAuth, name}
);


//Thunk authorization
export const getAuthUserData = (data: any) => async (dispatch: any) => {
    let response = await authAPI.signIn(data)
    if (response.status === 200) {
        let name: string = response.data.name
        let token: string = response.data.token
        dispatch(getAuth(true, name, token));
    }
};
//Thunk Confirmation and Enter User
export const getConfirmationAuthUser = (data: any) => async (dispatch: any) => {
    let response = await authAPI.signUp(data)
    if (response.status === 200) {
        let name: string = response.data.name
        let token: string = response.data.token
        dispatch(reg(true, name, token));
    }
};
//Thunk exit user
export const exitUser = () => async (dispatch: any) => {
    dispatch(signOut(false, ''));
};

export default authReducer;