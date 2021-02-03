import {authAPI} from '../API/api'


let initState = {
    data: {
        name: '',
        foundationYear: '',
        division: '',
        conference: '',
        imageUrl: '',
        id: '',
    },
    count: '',
    page: '',
    size: ''
}

const teamsReducer = (state = initState, action: any) => {

    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isAuth: true,
                name: action.name
            }
        case 'SIGN_UP':
            return {
                ...state,
                isReg: true,
                name: action.name
            }
        default:
            return state;
    }
}
//ActionCreator
export const getAuth = (isAuth: boolean, name: string) => (
    {type: 'SIGN_IN', isAuth, name}
);
export const reg = (isReg: boolean, name: string) => (
    {type: 'SIGN_UP', isReg, name}
);
//Thunk authorization
export const getAuthUserData = (data: any) => async (dispatch: any) => {
    let response = await authAPI.signIn(data)
    if (response.status === 200) {
        let name: string = response.data.name
        dispatch(getAuth(true, name));
    }
};

export const getConfirmationAuthUser = (data: any) => async (dispatch: any) => {
    let response = await authAPI.signUp(data)
    if (response.status === 200) {
        debugger
        let name: string = response.data.name
        dispatch(reg(true, name));
    }
};

export default teamsReducer;