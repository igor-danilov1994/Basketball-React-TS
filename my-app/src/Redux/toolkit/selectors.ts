import {createSelector} from "reselect"


export const getToken = (state: any) => {

    return state.auth.token
}



export const getUserName = (state: any) => {
    let userName = state.auth.name
    return userName
}

export const getTeamsData = (state: any) => {
    return state.teams.data
}

export const getTeamsCount = (state: any) => {
    return state.teams.count
}

export const getPageTeam = (state: any) => {
    return state.teams.pageTeam
}

export const getPageSizeTeam = (state: any) => {
    return state.teams.pageSizeTeam
}

export const getTeamsNames = createSelector(getTeamsData, (data) => {
    let names: Array<string> = []
    data.map((obj: any) => names.push(obj.name))

    return names
})

export const getTeamsId = (state: any) => {
    let id: Array<number> = []
    state.teams.data.map((obj: any) => id.push(obj.id))

    return id
}

export const getTeamID = (state: any) => {
    let teamID = state.teams.data.id
    return teamID
}

export const getPlayersData = (state: any) => {
    return state.players.data
}
export const getPlayersCount = (state: any) => {
    return state.players.count
}

export const getPlayersNames = createSelector(getPlayersData, (data) => {
    let names: Array<string> = []
    data.map((obj: any) => names.push(obj.name))

    return names
})

export const getCurrentPosition = (state: any) => {
    let positions = state.players.positions
    return positions
}

export const getCurrentPlayers = (state: any) => {
    return state.players.data
}

export const getPlayersID = (state: any) => {
    let playersID = state.players.data.id
    return playersID
}

export const getSerialPlayerID = (state: any) => {
    let serialPlayerID = state.players.serialPlayerID
    return serialPlayerID
}

export const getSerialTeamID = (state: any) => {
    let getSerialTeamID = state.teams.serialTeamID
    return getSerialTeamID
}

export const getPlayersNumber = (state: any) => {
    let playersNumber: Array<string> = []
    state.players.data.map((obj: any) => playersNumber.push(obj.number))

    return playersNumber
}

export const getAvatarUrl = (state: any) => {
    let avatarUrl: Array<string> = []
    state.players.data.map((obj: any) => avatarUrl.push(obj.avatarUrl))

    return avatarUrl
}

export const getPlayerName = (state: any) => {
    let namePlayers = state.players.data.name
    return namePlayers
}

export const getPageSizePlayer = (state: any) => {
    let pageSizePlayer = state.players.pageSizePlayer
    return pageSizePlayer
}

export const getPagePlayer = (state: any) => {
    let pagePlayer = state.players.pagePlayer
    return pagePlayer
}



