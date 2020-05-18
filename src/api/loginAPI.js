import bluemarlinAPI from "./defaultApiUrl";
import {useDispatch} from "react-redux";
import {LOG_IN} from "../constants";
import {logIn, logOut} from "../actions";
import {useCookies} from "react-cookie";
const queryString = require('querystring');

export const requestLogin = async (username, password) => {
    let url = '/auth';
    let option = {
        method: 'POST',
        url: url,
        params: {
            username: username,
            password: password
        }
    }
    let response = await bluemarlinAPI(option)
    return response.data;
}

export const validateAuthToken = async (token)=> {
    let url = '/login-validation';
    let option = {
        method: 'GET',
        url: url,
        headers: {
            "X-AUTH-TOKEN":token
        }
    }
    let response = await bluemarlinAPI(option)
    return response;
}

export const validateRefreshToken = async (token) => {
    let url = '/login-validation';
    let option = {
        method: 'GET',
        url: url,
        headers: {
            "X-REFRESH-TOKEN":token
        }
    }
    let response = await bluemarlinAPI(option)
    return response;
}
