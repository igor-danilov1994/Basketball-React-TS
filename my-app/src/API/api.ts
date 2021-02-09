import axios from "axios";

let token = localStorage.getItem('token')

const instance = axios.create({
    baseURL: 'http://dev.trainee.dex-it.ru',
    headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json',
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
        const promise = await instance.get('/api/Player/GetPositions', {})
        return promise
    },
    async getPlayers(token: any) {
        const promise = await instance.get('/api/Player/GetPlayers', {
            params: {
                Name: 'name',
                TeamIds: [2],
                Page: 2,
                PageSize: 2
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


