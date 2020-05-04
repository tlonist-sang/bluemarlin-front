import bluemarlinAPI from "./defaultApiUrl";
import Cookies from "js-cookie";
const queryString = require('querystring');


export const getUrlSourceList = async () => {
    let response;
    debugger;
    await bluemarlinAPI.get('/api/v1/url',{
            headers: {"X-AUTH-TOKEN":Cookies.get('access-token')}
        })
        .then((res)=>{
            response = res.data;
        })
        .catch((e)=>{
            console.log(e);
            response = 'error';
        })
        .finally(()=>{
        });
    return response;
}