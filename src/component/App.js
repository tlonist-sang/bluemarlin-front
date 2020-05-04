import React, {useState} from "react";
import bluemarlinAPI from "../api/defaultApiUrl";
import LoginForm from "./LoginForm";
import Main from "./main/Main";
import "./BlueMarlin.css"
import {useSelector} from "react-redux";

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