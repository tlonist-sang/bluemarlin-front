import React from "react";
import {deleteKeyword} from "../../api/mainAPI";
import {closePopup} from "../../actions/PopupActions";
import {CLOSE_POPUP} from "../../constant/constants";
import {useDispatch} from "react-redux";

const DeleteKeywordPopup = (token, keyword, keyList, setKeyList, urlId) => {
    const dispatch = useDispatch();
    const onConfirm = async () => {
        let response = await deleteKeyword(token, urlId, keyword);
        if(response.status === 'success'){
            await setKeyList(keyList.filter(e => e !== keyword));
        }
        await dispatch(closePopup(CLOSE_POPUP));
    }

    const onClose = () => {
        dispatch(closePopup(CLOSE_POPUP));
    }

    return(
        <div>
          {`Are you sure you want to delete "${keyword}"?`}
            <div className="ui horizontal header divider"/>
            <div style={{"margin":"50px 0 0 10px"}}>
                <button className={"ui button medium blue"} onClick={onConfirm}>
                    confirm
                </button>
                <button className={"ui button medium red"} onClick={onClose}>
                    cancel
                </button>
            </div>
        </div>
    )
}


export default DeleteKeywordPopup;