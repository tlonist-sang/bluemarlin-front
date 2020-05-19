import {PASSWORD_CONFIRM_MISMATCH, ACCESS_TOKEN_EXPIRE, PASSWORD_LENGTH_ERROR, PASSWORD_NOT_SECURE, USER_ALREADY_EXISTS} from "../../constant/errorConstants";


export const getErrorMessage = (errorCode) => {
    switch(errorCode)
    {
        case PASSWORD_LENGTH_ERROR:
            return "password length is not appropriate.";
        case PASSWORD_NOT_SECURE:
            return "insecure password."
        case PASSWORD_CONFIRM_MISMATCH:
            return "passwords do not match."
        case ACCESS_TOKEN_EXPIRE:
            return "access token expired."
        case USER_ALREADY_EXISTS:
            return "user already exists."
        default:
            return "unknown error";
    }
}
