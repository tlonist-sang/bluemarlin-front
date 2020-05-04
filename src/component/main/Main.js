import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getUrlSourceList} from "../../api/mainAPI";


const Main = () => {
    const {urlSource, setUrlSource} = useState({});
    const userId = useSelector(state => state.auth.userId);
    useEffect( ()=>{
        let response = getUrlSourceList();
        // console.log("response=>",response);
    }, []);
    return (
        <div>
            Logged In As : {userId}
            <button className={"ui green button massive"}>Add Source</button>
        </div>
    )
}


export default Main;