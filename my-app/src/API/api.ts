import axios from "axios";

let token = localStorage.getItem('token')

const instance = axios.create({
    baseURL: 'http://dev.trainee.dex-it.ru',
    headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json',
        'accept': 'application/json',
    },
});

export const authAPI: any = {
    async signUp(data: any) {
        const promise = await instance.post("/api/Auth/SignUp", {
            "userName": data.userName, //name
            "login": data.login, //login
            "password": data.password //pass
        })
        return promise
    },
    async signIn(data: any) {
        const promise = await instance.post("/api/Auth/SignIn", {
            "login": data.login,
            "password": data.password
        })
        return promise
    }
}
export const Echo: any = {
    echo() {
        return instance.get("/api/Echo/Ping")
    }
}

export const playersAPI: any = {
    async getPositions() {
        const promise = await instance.get('/api/Player/GetPositions')
        return promise
    },
    async getPlayer(id: number) {

        const promise = await instance.get('/api/Player/Get', {
            params: {
                id: id
            }
        })

        return promise
    },
    async getPlayers(name: string) {
        const promise = await instance.get('/api/Player/GetPlayers', {
            params: {
                Name: name,
                Page: 1,
                PageSize: 10
            },
        })
        return promise
    },
    async addPlayers(data: any) {
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
}

export const teamsAPI: any = {
    async addTeam(data: any) {
        const promise = await instance.post('/api/Team/Add', {
            "name": data.name,
            "foundationYear": data.foundationYear,
            "division": data.division,
            "conference": data.conference,
            "imageUrl": data.imageUrl,
        })
        return promise
    },
    async getTeams(name: string) {
        const promise = await instance.get('/api/Team/GetTeams', {
            params: {
                Name: name,
                Page: 1,
                PageSize: 6
            },
        })
        return promise
    },
}


export const imageAPI: any = {
    async saveImage(img: any) {
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


