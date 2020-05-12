import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useCookies} from "react-cookie";
import {addKeyword, deleteKeyword} from "../../api/mainAPI";
import {SUCCESS, FAIL, KEYWORD_DELETE} from "../../constants";
import Popup from "../common/Popup";
import {openPopup} from "../../actions/PopupActions";

const KeywordList = ({url, keyList}) => {
    const userId = useSelector(state=>state.auth.userId);
    const [cookies, setCookie] = useCookies(['access-token']);
    const ref = useRef([]);
    const [keywords, setKeywords] = useState(keyList);
    const dispatch = useDispatch();


    useEffect(()=> {
        setKeywords(keyList);
    }, [])

    useEffect(()=>{
    }, [keywords]);

    const onKeywordAdd = (newKeyword) => {
        addKeyword(cookies['access-token'], {userId, url, newKeyword});
    }

    const onAddButtonClick = () => {

    }

    const onKeywordDelete = (keyword) => {
        debugger;
        let deleteKeyword;
        deleteKeyword.title = `Delete ${keyword}`;
        deleteKeyword.content = `Are you sure you want to delete ${keyword}?`;

        dispatch(openPopup(
            KEYWORD_DELETE, deleteKeyword
        ));
    }

    const renderKeyList = () => {
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
    }

    return(
        <div>
            <div className={"ui button medium"} onClick={onAddButtonClick}>
                +
            </div>
            {keyList!==null?renderKeyList():null}
        </div>
    )
}

export default KeywordList;