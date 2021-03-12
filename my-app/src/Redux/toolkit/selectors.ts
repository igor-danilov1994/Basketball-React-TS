import {createSelector} from "reselect"
import {AppStateType} from "./redux-store";

export const getUserName = (state: AppStateType) => {
    let userName = state.auth.name
    return userName
}

export const getTeamsData = (state: AppStateType) => {
    return state.teams.data
}

export const getTeamsCount = (state: AppStateType) => {
    return state.teams.count
}

export const getPageTeam = (state: AppStateType) => {
    return state.teams.pageTeam
}

export const getPageSizeTeam = (state: AppStateType) => {
    return state.teams.pageSizeTeam
}

export const getTeamsNames = createSelector(getTeamsData, (data) => {
    let names: Array<string> = []
    data.map((obj: any) => names.push(obj.name))

    return names
})

export const getTeamsForId = (state: AppStateType) => {
    let names: Array<string> = []
    let teams = state.teams.data
    let serialTeamID = state.teams.serialTeamID
    teams.map((obj: any) => obj.id === serialTeamID ? names.push(obj) : '')

    return names
}


export const getTeamsId = (state: AppStateType) => {
    let id: Array<number> = []
    state.teams.data.map((obj: any) => id.push(obj.id))

    return id
}

export const getTeamID = (state: AppStateType) => {
    let teamID = state.teams.data[0].id
    return teamID
}

export const getPlayersData = (state: AppStateType) => {
    return state.players.data
}
export const getPlayersCount = (state: AppStateType) => {
    return state.players.count
}

export const getPlayersNames = createSelector(getPlayersData, (data) => {
    let names: Array<string> = []
    data.map((obj: any) => names.push(obj.name))

    return names
})

export const getCurrentPosition = (state: AppStateType) => {
    let positions = state.players.positions
    return positions
}

export const getCurrentPlayers = (state: AppStateType) => {
    return state.players.data
}

export const getPlayersID = (state: AppStateType) => {
    let playersID = state.players.data[0].id
    return playersID
}

export const getSerialPlayerID = (state: AppStateType) => {
    let serialPlayerID = state.players.serialPlayerID
    return serialPlayerID
}

export const getSerialTeamID = (state: AppStateType) => {
    let getSerialTeamID = state.teams.serialTeamID
    return getSerialTeamID
}

export const getPlayersNumber = (state: AppStateType) => {
    let playersNumber: Array<string> = []
    state.players.data.map((obj: any) => playersNumber.push(obj.number))

    return playersNumber
}

export const getAvatarUrl = (state: AppStateType) => {
    let avatarUrl: Array<string> = []
    state.players.data.map((obj: any) => avatarUrl.push(obj.avatarUrl))

    return avatarUrl
}

export const getPlayerName = (state: AppStateType) => {
    debugger
    let namePlayers = state.players.data[0].name
    return namePlayers
}

export const getPageSizePlayer = (state: AppStateType) => {
    let pageSizePlayer = state.players.pageSizePlayer
    return pageSizePlayer
}

export const getPagePlayer = (state: AppStateType) => {
    let pagePlayer = state.players.pagePlayer
    return pagePlayer
}

export const getPlayersOfCurrentTeam = (state: AppStateType) => {
    let arr = state.players.data
    let serialTeamID = getSerialTeamID(state)

    let teamId = state.teams.data[serialTeamID!].id
    //let teamId = state.teams.data[state.teams.serialTeamID].id

    let playersOfCurrentTeam: Array<string> = []
    arr.map((obj: any) => obj.team === teamId ? playersOfCurrentTeam.push(obj) : '')
    return playersOfCurrentTeam
}








