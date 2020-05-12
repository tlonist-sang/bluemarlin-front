import {CLOSE_POPUP, KEYWORD_CREATE, KEYWORD_DELETE, KEYWORD_EDIT} from "../constants"


const INITIAL_STATE = {
    type: null,
    id: null,
    title: null,
    content: null,
    actions: null,
    onDismiss: null
};

export default (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case KEYWORD_CREATE:
            return {...state,
                type: action.type,
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
                actions: action.payload.actions,
                onDismiss: action.payload.onDismiss
            };
        case KEYWORD_EDIT:
            return {...state,
                type: action.type,
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
                actions: action.payload.actions,
                onDismiss: action.payload.onDismiss
            };
        case KEYWORD_DELETE:
            return {...state,
                type: action.type,
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
                actions: action.payload.actions,
                onDismiss: action.payload.onDismiss
            };
        case CLOSE_POPUP:
            return {
                type: null
            }
        default:
            return state;
    }
};