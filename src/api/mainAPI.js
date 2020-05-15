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
    let response = await bluemarlinAPI(option);
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
    let response = await bluemarlinAPI(option);
    return response.data;
}