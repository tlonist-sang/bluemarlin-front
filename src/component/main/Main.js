import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUrlSourceList} from "../../api/mainAPI";
import {useCookies} from "react-cookie";
import {logOut} from "../../actions";



const Main = () => {
    const {urlSource, setUrlSource} = useState({});
    const [cookies, setCookie] = useCookies(['access-token'])

    const userId = useSelector(state => state.auth.userId);
    const dispatch = useDispatch();

    const getUrlSources = useCallback(async () => {
        let response = await getUrlSourceList(cookies['access-token']);
    }, []);

    const onLogOut = () => {
        dispatch(logOut());
        localStorage.setItem('access-token', null);
    };

    const renderUrlSources = () => {
        urlSource.forEach(source=>{
            return (
                <div>
                    {source.url}
                </div>
            )
        })
    };

    useEffect( ()=>{
        let {status, data, count} = getUrlSources();
        if(status === 'success'){
            setUrlSource(data);
        }
    }, [getUrlSources]);

    return (
        <div>
            Logged In As : {userId}
            <button className={"ui green button massive"}>Add Source</button>
            <div className={"ui grey button massive"} onClick={onLogOut}>
                Logout
            </div>
            {urlSource!==undefined?renderUrlSources():null}
        </div>
    )
}


export default Main;