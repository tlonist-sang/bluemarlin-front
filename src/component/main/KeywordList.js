import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useCookies} from "react-cookie";
import {addKeyword, deleteKeyword} from "../../api/mainAPI";
import {SUCCESS, FAIL, KEYWORD_DELETE} from "../../constants";
import Popup from "../common/Popup";
import {openPopup} from "../../actions/PopupActions";

const KeywordList = ({url, keyList, setKeyList}) => {
    const userId = useSelector(state=>state.auth.userId);
    const [cookies, setCookie] = useCookies(['access-token']);
    const ref = useRef([]);
    const [keywords, setKeywords] = useState({});
    const dispatch = useDispatch();

    const onKeywordAdd = (newKeyword) => {
        addKeyword(cookies['access-token'], {userId, url, newKeyword});
    }

    const onAddButtonClick = () => {

    }

    const deletePopup = (keyword) => {
        let popupObj = {};
        popupObj.title = `Delete ${keyword}`;
        popupObj.content = `Are you sure you want to delete ${keyword}?`;
        popupObj.actions = () => {
            deleteKeyword(cookies['access-token'], userId, url, keyword);
        }

        dispatch(openPopup(
            KEYWORD_DELETE, popupObj
        ));

        setKeyList(...keyList, keyList.filter(e=>e.word !== keyword));
    }

    const renderKeyList = () => {
        return keyList.map((value, index) => {
            return(
                <div className = {"ui animated button"}>
                    <div className={"visible content"}>
                        {value.word}
                    </div>
                    <div className={"hidden content"} onClick={()=>deletePopup(value.word)}>
                        delete
                        <i style={{"marginLeft":"5px"}} className={"x icon"}/>
                    </div>
                </div>
            )
        })
    }

    return(
        <div>
            <div className={"ui button medium"} onClick={onAddButtonClick}>
                +
            </div>
            {renderKeyList()}
        </div>
    )
}

export default KeywordList;