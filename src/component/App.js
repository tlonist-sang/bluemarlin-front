import React, {useEffect, useState} from "react";
import bluemarlinAPI from "../api/defaultApiUrl";
import LoginForm from "./LoginForm";
import Main from "./main/Main";
import "./BlueMarlin.css"
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {validateLocalStorageToken} from "../api/loginAPI";
import {logIn} from "../actions";

const App = () => {
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
    console.log("loggedIn?" + isLoggedIn);
    return(
        <div className={"main"}>
            {isLoggedIn?<Main/>:<LoginForm/>}
        </div>
    )
}

export default App;