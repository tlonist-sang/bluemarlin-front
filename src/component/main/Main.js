import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUrlSourceList} from "../../api/mainAPI";
import {useCookies} from "react-cookie";
import {logOut} from "../../actions";
import UrlSource from "./UrlSource";

const Main = () => {
    const [urlSource, setUrlSource] = useState({});
    const [cookies, setCookie] = useCookies(['access-token'])

    const userId = useSelector(state => state.auth.userId);
    const dispatch = useDispatch();

    const getUrlSources = useCallback(async () => {
        let response = await getUrlSourceList(cookies['access-token']);
        if(response.status  === 'success'){
            setUrlSource(response.data);
        }
    }, []);

    const onLogOut = () => {
        dispatch(logOut());
        localStorage.setItem('access-token', null);
    };

    const isEmtpyObject = (param) => {
        return Object.keys(param).length === 0;
    }

    const renderUrlSources = () => {
        if(!isEmtpyObject(urlSource)) {
            return (
                <div className={"key-list"}>
                    {urlSource.map((value, index) => {
                        return (
                            <div className={"ui celled grid"}>
                                <div className={"row"}>
                                    <UrlSource
                                        url = {value.url}
                                        keyList={value.keywordDtoList}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    };

    useEffect(()=>{
        getUrlSources();
    }, []);

    useEffect( ()=>{
    }, [urlSource]);

    return (
        <div>
            <div className={"ui blue button massive"}>User : {userId}</div>
            <div className={"ui grey button massive"} onClick={onLogOut}>
                Logout
            </div>
            <div className="ui horizontal divider"/>
            <div>
                {renderUrlSources()}
            </div>

        </div>
    )
}


export default Main;