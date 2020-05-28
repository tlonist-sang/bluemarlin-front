import React, {useEffect, useState} from "react";
import bluemarlinAPI from "../api/baseApi";
import Login from "./Login";
import Main from "./main/Main";
import "./BlueMarlin.css"
import {useSelector} from "react-redux";
import {Link, Route, Switch} from 'react-router-dom';
import {validateLocalStorageToken} from "../api/loginAPI";
import {logIn} from "../actions";
import PopupContainer from "./common/PopupContainer";
import {toast, ToastContainer} from "react-toastify";

toast.configure();
const App = () => {
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
    return(
        <div className={isLoggedIn?null:"main"}>
            {isLoggedIn?<Main/>:<Login/>}
            <PopupContainer/>
            <ToastContainer/>
        </div>
    )
}

export default App;