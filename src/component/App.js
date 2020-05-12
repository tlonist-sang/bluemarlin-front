import React, {useEffect, useState} from "react";
import bluemarlinAPI from "../api/defaultApiUrl";
import LoginForm from "./LoginForm";
import Main from "./main/Main";
import "./BlueMarlin.css"
import {useSelector} from "react-redux";
import {Link, Route, Switch} from 'react-router-dom';
import {validateLocalStorageToken} from "../api/loginAPI";
import {logIn} from "../actions";
import PopupContainer from "./common/PopupContainer";

const App = () => {
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
    return(
        <div className={isLoggedIn?null:"main"}>
            {isLoggedIn?<Main/>:<LoginForm/>}
            <PopupContainer/>
        </div>
    )
}

export default App;