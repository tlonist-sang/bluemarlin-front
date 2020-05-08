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