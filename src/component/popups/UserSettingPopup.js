import React, {useRef, useEffect, useCallback} from "react";
import {useDispatch} from "react-redux";
import {closePopup} from "../../actions/PopupActions";
import {CLOSE_POPUP, TOAST_OPTION} from "../../constant/constants";
import {getUrlSourceList, getUrlSetting, updateUrlSetting} from "../../api/mainAPI";
import {useCookies} from "react-cookie";
import {toast} from "react-toastify";

const UserSettingPopup = (urlId) => {
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(['access-token']);
    const intervalRef = useRef();
    const toggleRef = useRef();

    useEffect(()=>{
        debugger;
        getUserSettingInfo();
    }, []);

    const getUserSettingInfo = useCallback(async () => {
        let {status, datum} = await getUrlSetting(cookies['access-token'], urlId);
        if(status  === 'success'){
           intervalRef.current.value = datum.mailingInterval;
           toggleRef.current.checked = datum.keywordIntersection;
        }
    }, []);



    const onUserSettingSave = async () => {
        let interval = intervalRef.current.value;
        let useIntersection = toggleRef.current.checked;

        let response = await updateUrlSetting(cookies['access-token'], urlId, interval, useIntersection);
        if(response.status === 'success')
            toast.success('edited successfully', TOAST_OPTION);
        else
            toast.error('failed to update', TOAST_OPTION);
        await dispatch(closePopup(CLOSE_POPUP));
    }

    const onUserSettingCancel = () => {
        dispatch(closePopup(CLOSE_POPUP));
    }
    return (
        <div>
            <table className={"ui very padded table"}>
                <tbody>
                    <tr>
                        <td style={{"width":250}}>Mailing Interval : </td>
                        <td>
                            <div className={"ui input"}>
                                <input ref={intervalRef} type={"number"} placeholder={"choose between 1~24"}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{"width":250}}>Allow Keyword intersection : </td>
                        <td>
                            <div className="ui toggle checkbox">
                                <input ref={toggleRef} type="checkbox" name="public"/>
                                <label>keyword 'A' && keyword 'B' && ...</label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={"user-setting-button"}>
                <button className={"ui button big blue"} onClick={onUserSettingSave}>Save</button>
                <button className={"ui button big red"} onClick={onUserSettingCancel}>Cancel</button>
            </div>

        </div>
    )
}

export default UserSettingPopup;