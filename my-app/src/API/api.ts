import axios from "axios";

const instance = axios.create({
    baseURL: 'http://dev.trainee.dex-it.ru'
});

export const authAPI: any = {
    signUp(data: any) {
        const promise = instance.post("/api/Auth/SignUp", {
            "userName": data.userName, //name
            "login": data.login, //login
            "password": data.password //pass
        })
        return promise.then((response) => {
            debugger
            return response
            /*avatarUrl: null
                name: "name"
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibmFtZSIsInRlbmFudCI6IjM4MCIsIm5iZiI6MTYxMTgzMjM1MSwiZXhwIjoxNjEx
             */
        })
    },
    signIn(data: any) {
        return (
            instance.post("/api/Auth/SignIn", {
            "login": data.login,
            "password": data.password
        })).then((response) => {
            debugger
            return response
            /*avatarUrl: null
                name: "name"
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibmFtZSIsInRlbmFudCI6IjM4MCIsIm5iZiI6MTYxMTgzMjM1MSwiZXhwIjoxNjEx
             */
        })
    }
}


