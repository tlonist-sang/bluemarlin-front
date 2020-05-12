import React, {useCallback, useEffect, useState, useRef} from 'react';
import {useForm} from "react-hook-form";
import {requestLogin, validateLocalStorageToken} from "../api/loginAPI";
import {useDispatch} from "react-redux";
import {logIn, logOut} from "../actions";
import bluemarlin from "../icons/bluemarlin.png"
import {useCookies} from "react-cookie";
import bluemarlinAPI from "../api/defaultApiUrl";

const LoginForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, errors } = useForm();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);


    const [cookies, setCookie, removeCookie] = useCookies(['access-token']);

    const validateLogin = async() => {
        let token = await localStorage.getItem('access-token');
        let response  = await validateLocalStorageToken(token);
    }

    useEffect(()=>{
        let token = localStorage.getItem('access-token');
        bluemarlinAPI.get('/login-validation', {
            headers: {
                "X-AUTH-TOKEN":token
            }
        }).then(res=>{
            console.log('validate localStorage result res=>', res);
            let {status, data} = res;
            if(status === 200){
                dispatch(logIn(data));
            }

        }).catch(e=>{
            console.log('error=>',e);
        })
    });

    const onSubmit = async () => {
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;

        const {status, token} = await requestLogin(username, password);
        if(status === 'success'){
            dispatch(logIn(username));
            setCookie('access-token', token, {'httoOnly':true})
            localStorage.setItem('access-token', token);
            console.log('token=>', token);
        }else{
            dispatch(logOut());
        }
    }

    return (
        <div className={"ui center aligned grid"} style={{"marginTop":"200px"}}>
            <div className={"column"}>
                <img className={"logo"} src={bluemarlin}/>
                <form className={"ui large form form-margin"} onSubmit={handleSubmit(onSubmit)}>
                    <div className={"field"}>
                        <div className={"ui left icon input"}>
                            <input type={"text"} name={"username"} placeholder={"Enter ID"}
                                ref={usernameRef}
                            />
                        </div>
                    </div>
                    <div className={"field"}>
                        <div className={"ui left icon input"}>
                            <input type={"password"} name={"password"} placeholder={"Enter password"}
                                ref={passwordRef}
                            />
                        </div>
                    </div>

                    <button className={"ui large red forgot button"}>Forgot ID/Password?</button><br/>
                    <div className="ui horizontal divider"></div>
                    <input type={"submit"} value={"Login"} className={"ui large green login button"}/>
                </form>
                <div className={"ui message"}>
                    <button className={"ui large blue register button"}>New to us? Register!</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;