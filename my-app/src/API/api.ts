import axios from "axios"

const instance = axios.create({
    baseURL: 'http://dev.trainee.dex-it.ru',
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    },
});

type signUpDataType = {
    userName: string
    login: string
    password: string
}
type signInDataType = {
    login: string
    password: string
}

type authApiType = {
    signUp: (data: signUpDataType) => any
    signIn: (data: signInDataType) => any
}

export const authAPI: authApiType = {
    async signUp(data) {
        const promise = await instance.post("/api/Auth/SignUp", {
            "userName": data.userName,
            "login": data.login,
            "password": data.password
        })
        return promise
    },
    async signIn(data) {
        const promise = await instance.post("/api/Auth/SignIn", {
            "login": data.login,
            "password": data.password
        })
        localStorage.setItem('token', promise.data.token)
        instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        return promise
    }
}

export const Echo: object = {
    echo() {
        return instance.get("/api/Echo/Ping")
    }
}

type addPlayersDataType = {
    name: string
    position: string
    team: string | number
    height: string | number
    weight: string | number
    birthday: string
    number: string | number
    avatarUrl: string
}

type playersApiType = {
    getPositions: () => any
    getPlayer: (id: number) => any
    getPlayers: (name: string, pagePlayer: number, pageSizePlayer: number) => any
    addPlayers: (data: addPlayersDataType) => any
    deletePlayers: (id: number) => any
}

export const playersAPI: playersApiType = {
    async getPositions() {
        const promise = await instance.get('/api/Player/GetPositions')
        return promise
    },
    async getPlayer(id) {
        const promise = await instance.get('/api/Player/Get', {
            params: {
                id: id
            }
        })
        return promise
    },
    async getPlayers(name, pagePlayer, pageSizePlayer) {
        const promise = await instance.get('/api/Player/GetPlayers', {
            params: {
                Name: name,
                Page: pagePlayer,
                PageSize: pageSizePlayer
            },
        })
        return promise
    },
    async addPlayers(data) {
        const promise = await instance.post('/api/Player/Add', {
            "name": data.name,
            "number": data.number,
            "position": data.position,
            "team": data.team,
            "birthday": data.birthday,
            "height": data.height,
            "weight": data.weight,
            "avatarUrl": data.avatarUrl
        })
        return promise
    },
    async deletePlayers(id) {
        const promise = await instance.delete('/api/Player/Delete', {
            params: {
                'id': id
            }
        })
        return promise
    }
}
type addTeamDataType = {
    name: string
    foundationYear: string
    division: string
    conference: string
    imageUrl: string
}
type updateTeamDataType = {
    name: string
    foundationYear: string
    division: string
    conference: string
    imageUrl: string
    id: number
}

type teamsApiType = {
    addTeam: (data: addTeamDataType) => any
    updateTeam: (data: updateTeamDataType, getCurrentTeamID: number) => any
    deleteTeam: (getCurrentTeamID: number) => any
    getTeams: (name: string, pageTeam: number, pageSizeTeam: number) => any
    getTeam: (id: number) => any
}

export const teamsAPI: teamsApiType = {
    async addTeam(data) {
        const promise = await instance.post('/api/Team/Add', {
            "name": data.name,
            "foundationYear": data.foundationYear,
            "division": data.division,
            "conference": data.conference,
            "imageUrl": data.imageUrl,
        })
        return promise
    },
    async updateTeam(data, getCurrentTeamID) {
        const promise = await instance.put('/api/Team/Update', {
            "name": data.name,
            "foundationYear": data.foundationYear,
            "division": data.division,
            "conference": data.conference,
            "imageUrl": data.imageUrl,
            "id": getCurrentTeamID
        })
        return promise
    },
    async deleteTeam(getCurrentTeamID) {
        const promise = await instance.delete('/api/Team/Delete', {
            params: {
                'id': getCurrentTeamID
            }

        })
        return promise
    },
    async getTeams(name, pageTeam, pageSizeTeam) {
        const promise = await instance.get('/api/Team/GetTeams', {
            params: {
                Name: name,
                Page: pageTeam,
                PageSize: pageSizeTeam
            },
        })
        return promise
    },
    async getTeam(id) {
        const promise = await instance.get('/api/Team/Get', {
            params: {
                id: id
            },
        })
        return promise
    },
}

type imageApiType = {
    saveImage: (img: any) => any
}

export const imageAPI: imageApiType = {
    async saveImage(img) {
        const formData = new FormData()
        formData.append("file", img)
        const promise = await instance.post('/api/Image/SaveImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }
        )
        return promise
    },
}