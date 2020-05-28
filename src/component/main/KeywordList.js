import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useCookies} from "react-cookie";
import {addKeyword, deleteKeyword, updateSchedulingStatus} from "../../api/mainAPI";
import {SUCCESS, FAIL, KEYWORD_DELETE, KEYWORD_CREATE, USER_SETTING, TOAST_OPTION} from "../../constant/constants";
import Popup from "../common/Popup";
import {openPopup} from "../../actions/PopupActions";
import {validateText} from "../common/validateInput";
import TextInput from "../common/TextInput";
import AddKeywordPopup from "../popups/AddKeywordPopup";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DeleteKeywordPopup from "../popups/DeleteKeywordPopup";
import UserSettingPopup from "../popups/UserSettingPopup";


const KeywordList = ({urlId, keyList, setKeyList, isScheduling}) => {
    const userId = useSelector(state=>state.auth.userId);
    const [cookies, setCookie] = useCookies(['access-token']);
    const ref = useRef([]);
    const [keywords, setKeywords] = useState({});
    const [deleteResult, setDeleteResult] = useState();
    const [scheduling, setScheduling] = useState(isScheduling);
    const dispatch = useDispatch();

    const onSettingClick = () => {
        dispatch(openPopup(
            USER_SETTING, {
                title: 'Settings',
                contentComponent: ()=>UserSettingPopup(urlId),
                disableFooter: true,
                width: 600,
                height: 300
            }
        ))
    }

    const onAddButtonClick = () => {
        dispatch(openPopup(
            KEYWORD_CREATE, {
                title: 'Add keyword',
                contentComponent: ()=>AddKeywordPopup({userId, urlId, keyList, setKeyList}),
                disableFooter: true
            }
        ));

    }

    const onActivateSchedulingClick = async () => {
        let {status} = await updateSchedulingStatus(cookies['access-token'], urlId, !scheduling)
        await setScheduling(!scheduling);
        if(status === 'success'){
            if(scheduling === true){
                toast.success('Schedule Stopped.', TOAST_OPTION);
            }else{
                toast.success('Schedule Started.', TOAST_OPTION);
            }
        }else{
            toast.error('update failed.', TOAST_OPTION);
        }
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
                <div className = {"ui animated button"} style={{"margin": "0 0 3px 3px"}} onClick={()=>deletePopup(word)}>
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
            <div className={"ui button medium"} style={{"margin": "0 0 6px 3px"}} onClick={onSettingClick}>
                <i className="cog icon" style={{"marginRight":-3}}></i>
            </div>
            <div className={scheduling?"ui button medium red":"ui button medium green"} style={{"margin": "0 30px 6px 3px"}} onClick={onActivateSchedulingClick}>
                {scheduling
                    ?<i className={"pause circle outline icon"} style={{"marginRight":-3}}></i>
                    :<i className={"play circle outline icon"} style={{"marginRight":-3}}></i>}
            </div>
            {renderKeyList()}
        </div>
    )
}

export default KeywordList;