import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUrlSourceList} from "../../api/mainAPI";
import {useCookies} from "react-cookie";
import {logOut} from "../../actions";



const Main = () => {
    const {urlSource, setUrlSource} = useState({});
    const [cookies, setCookie] = useCookies(['access-token'])
    const userId = useSelector(state => state.auth.userId);
    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(logOut());
        localStorage.setItem('access-token', null);
    }

    useEffect( ()=>{
        let response = getUrlSourceList(cookies['access-token']);
    }, []);
    return (
        <div>
            Logged In As : {userId}
            <button className={"ui green button massive"}>Add Source</button>
            <div className={"ui grey button massive"} onClick={onLogOut}>
                Logout
            </div>
        </div>
    )
}


export default Main;