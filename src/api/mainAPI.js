import bluemarlinAPI from "./defaultApiUrl";
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
    let response = await bluemarlinAPI(option);
    return response.data;
}

export const addKeyword = async(token, {userId, urlName, keywordToAdd}) => {
    let url = "/api/v1/keyword"
    let option = {
        method: 'PUT',
        url: url,
        headers: {
            "X-AUTH-TOKEN":token
        },
        params: {
            userId: userId,
            urlName: urlName,
            keyword: keywordToAdd
        }
    }
    let response = await bluemarlinAPI(option);
    return response.data;
}

export const deleteKeyword = async (token, userId, urlName, keywordToDelete) => {
    let url = "/api/v1/keyword"
    let option = {
        method: 'DELETE',
        url: url,
        headers: {
            "X-AUTH-TOKEN":token
        },
        data: {
            userId: userId,
            urlName: urlName,
            keyword: keywordToDelete
        }
    }
    debugger;
    let response = await bluemarlinAPI(option);
    return response.data;
}