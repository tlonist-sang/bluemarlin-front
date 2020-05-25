import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useCookies} from "react-cookie";
import {addKeyword, deleteKeyword} from "../../api/mainAPI";
import {SUCCESS, FAIL, KEYWORD_DELETE, KEYWORD_CREATE} from "../../constant/constants";
import Popup from "../common/Popup";
import {openPopup} from "../../actions/PopupActions";
import {validateText} from "../common/validateInput";
import TextInput from "../common/TextInput";
import AddKeywordPopup from "../popups/AddKeywordPopup";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DeleteKeywordPopup from "../popups/DeleteKeywordPopup";

const KeywordList = ({urlId, keyList, setKeyList}) => {
    const userId = useSelector(state=>state.auth.userId);
    const [cookies, setCookie] = useCookies(['access-token']);
    const ref = useRef([]);
    const [keywords, setKeywords] = useState({});
    const [deleteResult, setDeleteResult] = useState();
    const dispatch = useDispatch();


    const onAddButtonClick = () => {
        dispatch(openPopup(
            KEYWORD_CREATE, {
                title: 'Add keyword',
                contentComponent: ()=>AddKeywordPopup({userId, urlId, keyList, setKeyList}),
                disableFooter: true
            }
        ));

    }

    const deletePopup = (keyword) => {
        dispatch(openPopup(
            KEYWORD_DELETE, {
                title: `Delete ${keyword}`,
                contentComponent: ()=>DeleteKeywordPopup(cookies['access-token'], keyword, keyList, setKeyList, urlId),
                disableFooter: true
            }
        ));
    }

    const renderKeyList = () => {
        return keyList.map((word) => {
            return(
                <div className = {"ui animated button"} style={{"margin": "0 0 3px 3px"}}>
                    <div className={"visible content"}>
                        {word}
                    </div>
                    <div className={"hidden content"} onClick={()=>deletePopup(word)}>
                        delete
                        <i style={{"marginLeft":"5px"}} className={"x icon"}/>
                    </div>
                </div>
            )
        })
    }

    return(
        <div>
            <div className={"ui button medium"} style={{"margin": "0 0 6px 3px"}} onClick={onAddButtonClick}>
                <i className="plus icon" style={{"marginRight":-3}}></i>
            </div>
            <div className={"ui button medium"} style={{"margin": "0 25px 6px 3px"}}>
                <i className="trash icon" style={{"marginRight":-3}}></i>
            </div>
            {renderKeyList()}
        </div>
    )
}

export default KeywordList;