import http from "./httpService";

export function signIn(data){
    return http.post("/user/signin", data).then(({data})=> data.data)
}

export function signUp(data){
    return http.post("/user/signup", data).then(({data})=> data.data)
}

export function getUser(){
    return http.get("/user/profile").then(({data})=> data.data)
}

export function getUserListApi(){
    return http.get("/user/list").then(({data})=> data.data)
}

export function logoutApi(){
    return http.post("/user/logout").then(({data})=> data.data)
}


