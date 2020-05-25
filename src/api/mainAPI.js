import {useCookies} from "react-cookie";
import bluemarlinAPI from "./defaultApiUrl";
import {validateRefreshToken} from "./loginAPI";
const queryString = require('querystring');


export const getUrlSourceList = async (token) => {
    let url = '/api/v1/url';
    let option = {
        method: 'GET',
        url: url,
        headers: {
            "X-AUTH-TOKEN":token
        }
    }
    let response = await bluemarlinAPI(option)
        .catch(e=>{

        });
    setCookie('access-token',response.headers["x-auth-token"]);
    return response.data;
}

export const addKeyword = async(token, urlId, keywordToAdd) => {
    let url = "/api/v1/keyword"
    let option = {
        method: 'PUT',
        url: url,
        headers: {
            "X-AUTH-TOKEN":token
        },
        data: {
            urlId: urlId,
            keyword: keywordToAdd
        }
    }
    let response = await bluemarlinAPI(option)
        .catch(e=>{

        });
    setCookie('access-token',response.headers["x-auth-token"]);
    return response.data;
}

export const deleteKeyword = async (token, urlId, keywordToDelete) => {
    let url = "/api/v1/keyword"
    let option = {
        method: 'DELETE',
        url: url,
        headers: {
            "X-AUTH-TOKEN":token
        },
        data: {
            urlId: urlId,
            keyword: keywordToDelete
        }
    }
    let response = await bluemarlinAPI(option)
        .catch(e=>{

        });
    setCookie('access-token',response.headers["x-auth-token"]);
    return response.data;
}

export const setCookie = (key, value) => {
    let now = new Date().getTime();
    let expireTime = now + 1000*60*5;
    document.cookie = `${key}=${value};expires=${expireTime}`
}

export const getUserSetting = async(token) => {
    let url = "/api/v1/setting"
    let option = {
        method: 'GET',
        url: url,
        headers: {
            "X-AUTH-TOKEN":token
        }
    }
    let response = await bluemarlinAPI(option)
        .catch(async e=>{
            await renewAccessToken();
        });
    return response.data;
}

export const updateUserSetting = async(token, interval, useIntersection) => {
    let url = "/api/v1/setting"
    let option = {
        method: 'POST',
        url: url,
        headers: {
            "X-AUTH-TOKEN":token
        },
        data: {
            mailingInterval: interval,
            keywordIntersection: useIntersection
        }
    }
    let response = await bluemarlinAPI(option)
        .catch(e=>{
            renewAccessToken();
        });
    return response.data;
}

export const renewAccessToken = async () => {
    let refreshToken = localStorage.getItem('refresh-token');
    let response = await validateRefreshToken(refreshToken);
    await setCookie('access-token', response.headers["x-auth-token"], {'httoOnly':true})
}
