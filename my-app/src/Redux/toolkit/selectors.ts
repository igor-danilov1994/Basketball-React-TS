export const getTeamsNames = (state: any) => {
    let names: Array<string> = []
    state.teams.data.map((obj: any) => names.push(obj.name))

    return names

}
export const getTeamsId = (state: any) => {
    let id: Array<number> = []
    state.teams.data.map((obj: any) => id.push(obj.id))

    return id
}

export const getCurrentPosition = (state: any) => {
    let positions = state.players.positions
    return positions
}

export const getCurrentPlayers = (state: any) => {
    let players = state.players
    return players
}
export const getPlayersID = (state: any) => {
    let playersID = state.players.id
    return playersID
}
export const getAvatarUrl = (state: any) => {
    let avatar = state.players.avatarUrl
    return avatar
}



