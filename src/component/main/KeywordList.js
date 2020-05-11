import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {useCookies} from "react-cookie";
import {addKeyword, deleteKeyword} from "../../api/mainAPI";
import {SUCCESS, FAIL} from "../../constants/constants";
import Popup from "../common/Popup";

const KeywordList = ({url, keyList}) => {
    const userId = useSelector(state=>state.auth.userId);
    const [cookies, setCookie] = useCookies(['access-token']);
    const ref = useRef([]);
    const [keywords, setKeywords] = useState(keyList);

    useEffect(()=> {
        setKeywords(keyList);
    }, [])

    useEffect(()=>{
    }, [keywords]);

    const onKeywordAdd = (newKeyword) => {
        addKeyword(cookies['access-token'], {userId, url, newKeyword});
    }

    const onKeywordDelete = (keyword) => {
        debugger;
        return(
            <div>
                <Popup
                    title={"Are you sure to delete the keyword?"}
                />
            </div>
        )

        // let response = deleteKeyword(cookies['access-token'], userId, url, keyword);
        // if(response.status === SUCCESS){
        //     setKeywords(keywords.filter(e=>e.word!==keyword));
        // }
    }

    return(
        <div>
            <div className={"ui button medium"} onClick={onKeywordAdd}>
                +
            </div>
            {keyList.map((value, index) => {
                return(
                    <div className = {"ui animated button"} ref={ref=>ref[value]}>
                        <div className={"visible content"}>
                            {value.word}
                        </div>
                        <div className={"hidden content"} onClick={()=>onKeywordDelete(value.word)}>
                            delete
                            <i style={{"marginLeft":"5px"}} className={"x icon"}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default KeywordList;