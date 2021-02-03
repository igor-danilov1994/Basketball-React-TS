import {playersAPI} from '../API/api'

const GET_POSITION = 'APP/SRC/REDUX/PLAYERS/GET_POSITION'
const GET_PLAYERS = 'APP/SRC/REDUX/PLAYERS/GET_PLAYERS'

let initState = {
    name: '',
    position: [],
    team: '',
    height: 0,
    weight: 0,
    age: 0,
    number: 0,
    avatarUrl: '',
    birthday: "2021-02-01T07:39:06.825Z",
    id: '',
    player: [],

};

const playersReducer = (state = initState, action: any) => {
    switch (action.type) {
        case GET_POSITION:
            return {
                ...state,
                position: action.position
            }
        case GET_PLAYERS:
            return {
                ...state,
            }
        default:
            return state;
    }
}
//ActionCreator
export const Positions = (position: object) => (
    {type: GET_POSITION, position}
);

export const getPlayers = (position: object) => (
    {type: GET_PLAYERS, position}
);

//Thunk
export const getPosition = () => async (dispatch: any) => {
    const promise = await playersAPI.getPositions()
    if (promise.status === 200) {
        dispatch(Positions(promise.data));
    }
};

export const getPlayer = () => async (dispatch: any) => {
    const promise = await playersAPI.getPlayers()
    if (promise.status === 200) {
        //dispatch(getPlayers(promise.data));
    }
};

export default playersReducer;