import {KEYWORD_DELETE, KEYWORD_EDIT, KEYWORD_CREATE, CLOSE_POPUP} from "../constants";

export const openPopup = (type, {id, title, content, contentComponent, actions, onDismiss, disableFooter}) => {
    return {
        type: type,
        payload: {id, title, content, contentComponent, actions, onDismiss, disableFooter}
    }
}

export const closePopup = (type, id) => {
    return {
        type: CLOSE_POPUP
    }
}


