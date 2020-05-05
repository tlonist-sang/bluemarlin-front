import bluemarlinAPI from "./defaultApiUrl";
import {useDispatch} from "react-redux";
import {LOG_IN} from "../constants";
import {logIn, logOut} from "../actions";
const queryString = require('querystring');


export const requestLogin = async (username, password) => {
    let response;
    await bluemarlinAPI.post('/auth', queryString.stringify({
        username: username,
        password: password
    }))
        .then((res)=>{
            response = res.data;
        })
        .catch((e)=>{
            console.log(e);
            response = 'error';
        })
        .finally(()=>{
            console.log('login processed');
        });
    return response;
}

export const validateLocalStorageToken = async (token)=> {
    let response;
    await bluemarlinAPI.get('/login-validation', {
        headers: {
            "X-AUTH-TOKEN":token
        }
    }).then(res=>{
        console.log('validate localStorage result res=>', res);
        response = res;
    }).catch(e=>{
        response = 'error';
    })

    return response;
}
