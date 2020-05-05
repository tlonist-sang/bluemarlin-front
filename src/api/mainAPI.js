import bluemarlinAPI from "./defaultApiUrl";
const queryString = require('querystring');



export const getUrlSourceList = async (token) => {
    let response;

    console.log('retrieved->',token);
    await bluemarlinAPI.get('/api/v1/url',{
            headers: {
                "X-AUTH-TOKEN":token
            }
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