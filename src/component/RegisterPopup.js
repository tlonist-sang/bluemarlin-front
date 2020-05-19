import React, {useRef} from "react";
import {registerUser} from "../api/loginAPI";
import {CLOSE_POPUP, SUCCESS, TOAST_OPTION} from "../constant/constants";
import {closePopup} from "../actions/PopupActions";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {getErrorMessage} from "./common/error"

const RegisterPopup = () => {

    const dispatch = useDispatch();
    const userIdRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);

    const onRegisterUser = async () => {
        let userId = userIdRef.current.value;
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        let passwordConfirm = passwordConfirmRef.current.value;

        await registerUser(userId, email, password, passwordConfirm)
            .then(res => {
                let {status, data} = res;
                if (status === 200 || data.status === SUCCESS) {
                    dispatch(closePopup(CLOSE_POPUP));
                    toast.success('successfully registered!', TOAST_OPTION);
                }
            })
            .catch(e => {
                let {status, data} = e.response;
                let errorMessage = getErrorMessage(data.errorCode);
                toast.error(`failed to register with cause : ${errorMessage}`, TOAST_OPTION);
            });
    }
    return(
        <div className={"ui form"}>
            <h4 className={"ui dividing header"}> Register for bluemarlin! </h4>
            <div className={"field"}>
                <label>Name</label>
                <div className={"field"}>
                    <input type={"text"} ref={userIdRef} placeholder={"Your username"}/>
                </div>
            </div>
            <div className={"field"}>
                <label>Email</label>
                <input type={"text"} ref={emailRef} placeholder={"Your email address"}/>
            </div>
            <div className={"field"}>
                <label>Password</label>
                <div className={"two field"}>
                    <div className={"field"}>
                        <input type={"password"} ref={passwordRef} placeholder={"password"}/>
                    </div>
                    <div className={"field"}>
                        <input type={"password"} ref={passwordConfirmRef} placeholder={"confirm password"}/>
                    </div>
                </div>
            </div>
            <button className={"ui button big orange"} onClick={onRegisterUser}>Click to register!</button>
        </div>
    )
}

export default RegisterPopup;