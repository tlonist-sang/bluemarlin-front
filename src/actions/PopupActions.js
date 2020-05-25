import {KEYWORD_DELETE, KEYWORD_EDIT, KEYWORD_CREATE, CLOSE_POPUP} from "../constant/constants";

export const openPopup = (type, {id, title, content, contentComponent, actions, onDismiss, disableFooter, width, height}) => {
    return {
        type: type,
        payload: {id, title, content, contentComponent, actions, onDismiss, disableFooter, width, height}
    }
}

export const closePopup = (type, id) => {
    return {
        type: CLOSE_POPUP
    }
}


