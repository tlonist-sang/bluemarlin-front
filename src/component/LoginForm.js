import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {requestLogin} from "../api/loginAPI";
import {useDispatch} from "react-redux";
import {logIn, logOut} from "../actions";
import bluemarlin from "../icons/bluemarlin.png"

const LoginForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, errors } = useForm();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const onSubmit = async () => {
        const {status, token} = await requestLogin(username, password);
        if(status === 'success'){
            dispatch(logIn(username));
        }else{
            dispatch(logOut());
        }
    }

    return (
        <div className={"ui center aligned grid"} style={{"margin-top":"200px"}}>
            <div className={"column"}>
                <img className={"logo"} src={bluemarlin}/>
                <form className={"ui large form form-margin"} onSubmit={handleSubmit(onSubmit)}>
                    <div className={"field"}>
                        <div className={"ui left icon input"}>
                            <input type={"text"} name={"username"} placeholder={"Enter ID"} onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                    </div>
                    <div className={"field"}>
                        <div className={"ui left icon input"}>
                            <input type={"password"} name={"password"} placeholder={"Enter password"} onChange={(e)=>{setPassword(e.target.value)}}/>
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