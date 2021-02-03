import axios from "axios";

//import token from '../Redux/authReducer'

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibmFtZSIsInRlbmFudCI6IjM4MCIsIm5iZiI6MTYxMjI3MzE4MCwiZXhwIjoxNjEyMzU5NTgwLCJpc3MiOiJUZXN0LUJhY2tlbmQtMSIsImF1ZCI6IkJhc2tldEJhbGxDbHViU2FtcGxlIn0.MNhQ8Qy31E3zh51QZsS7Uv43fRVqKBEio4N8zh6085M'

//axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${tokenStr}`} });

const instance = axios.create({
    //withCredentials: true,
    baseURL: 'http://dev.trainee.dex-it.ru',
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const authAPI: any = {
    signUp(data: any) {
        const promise = instance.post("/api/Auth/SignUp", {
            "userName": data.userName, //name
            "login": data.login, //login
            "password": data.password //pass

        })
        return promise.then((response) => {
            return response
        })
    },
    signIn(data: any) {
        return (
            instance.post("/api/Auth/SignIn", {
                "login": data.login,
                "password": data.password
            })).then((response) => {
            return response
        })
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
    async getPlayers() {
        const promise = await instance.get('/api/Player/GetPlayers', {
            params: {
                Name: 'name',
                TeamIds: [2],
                Page: 2,
                PageSize: 2
            }
        })
        return promise
    },
}



