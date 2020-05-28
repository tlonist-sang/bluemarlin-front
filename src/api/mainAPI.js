import {useCookies} from "react-cookie";
import bluemarlinAPI,{bluemarlinapis} from "./baseApi";
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
    let response = await bluemarlinapis()(option);
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
    let response = await bluemarlinapis()(option)
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
    let response = await bluemarlinapis()(option);
    return response.data;
}

export const setCookie = (key, value) => {
    let now = new Date().getTime();
    let expireTime = now + 1000*60*5;
    document.cookie = `${key}=${value};expires=${expireTime}`
}

export const getUrlSetting = async(token, urlId) => {
    let url = "/api/v1/url-setting"
    let option = {
        method: 'GET',
        url: url,
        headers: {
            "X-AUTH-TOKEN":token
        },
        params: {
            urlId: urlId
        }
    }
    let response = await bluemarlinapis()(option);
    return response.data;
}

export const updateUrlSetting = async(token, urlId, interval, useIntersection) => {
    let url = "/api/v1/url-setting"
    let option = {
        method: 'POST',
        url: url,
        headers: {
            "X-AUTH-TOKEN":token
        },
        data: {
            urlId: urlId,
            mailingInterval: interval,
            keywordIntersection: useIntersection
        }
    }
    let response = await bluemarlinapis()(option);
    return response.data;
}

export const updateSchedulingStatus = async (token, urlId, isScheduling) => {
    let url = "/api/v1/schedule"
    let option = {
        method: 'POST',
        url: url,
        headers: {
            "X-AUTH-TOKEN":token
        },
        data: {
            isScheduling: isScheduling,
            urlId: urlId
        }
    }
    let response = await bluemarlinapis()(option);
    return response.data;
}


export const renewAccessToken = async () => {
    let refreshToken = localStorage.getItem('refresh-token');
    let response = await validateRefreshToken(refreshToken);
    await setCookie('access-token', response.headers["x-auth-token"], {'httoOnly':true})
}
