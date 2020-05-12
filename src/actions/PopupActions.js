import {KEYWORD_DELETE, KEYWORD_EDIT, KEYWORD_CREATE, CLOSE_POPUP} from "../constants";

export const openPopup = (type, {id, title, content, actions, onDismiss}) => {
    return {
        type: type,
        payload: {id, title, content, actions, onDismiss}
    }
}

export const closePopup = (type, id) => {
    return {
        type: CLOSE_POPUP
    }
}


