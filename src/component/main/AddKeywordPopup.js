import React, {useRef, useState} from "react";
import TextInput from "../common/TextInput";
import {validateAlphanumeric, validateText} from "../common/validateInput";
import {addKeyword} from "../../api/mainAPI";
import {useCookies} from "react-cookie";
import {closePopup} from "../../actions/PopupActions";
import {CLOSE_POPUP} from "../../constant/constants";
import {useDispatch} from "react-redux";
import {SUCCESS, FAIL, TOAST_OPTION} from "../../constant/constants";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddKeywordPopup = ({userId, urlId, keyList, setKeyList}) => {
    const keywordRef = useRef(null);
    const [cookies, setCookie] = useCookies(['access-token']);
    const [error, setError] = useState(false);
    const [dataValue, setDataValue] = useState();
    const dispatch = useDispatch();

    const validateKeyword = (e) => {
        let newKeyword = e.target.value;
        if(newKeyword !== null && newKeyword !== undefined) {
            if( newKeyword < 0 ||
                newKeyword.length > 60 ||
                !validateAlphanumeric(newKeyword)){
                setError(true);
            }else{
                setError(false);
            }
        }
        setDataValue(e.target.value);
    }

    const onKeywordAdd = async() => {
        if(!error) {
            let {status, count} = await addKeyword(cookies['access-token'], urlId, dataValue);
            if(status === SUCCESS){
                setKeyList([...keyList, dataValue]);
                dispatch(closePopup(CLOSE_POPUP));
                toast.success('successfully added!', TOAST_OPTION);
            }else{
                toast.error('failed to delete', TOAST_OPTION);
            }
        }
    }


    return (
        <div>
            <TextInput
                ref={keywordRef}
                value = {dataValue}
                style={{"marginLeft": 10}}
                placeholder={"Input keyword"}
                error = {error}
                errorMessage={'alphanumeric, 1~60'}
                onChange={validateKeyword}
            />
            <button className={"ui button medium blue"} onClick={onKeywordAdd}>
                Add
            </button>
        </div>
    )
}

export default AddKeywordPopup;