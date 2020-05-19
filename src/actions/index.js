import {LOG_OUT, LOG_IN, SET_TOKEN, DELETE_TOKEN} from "../constant/constants";


export const logIn = (id) => {
    return{
        type: LOG_IN,
        payload: id
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT
    }
}

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token
    }
}

export const deleteToken = () => {
    return {
        type: DELETE_TOKEN
    }
}