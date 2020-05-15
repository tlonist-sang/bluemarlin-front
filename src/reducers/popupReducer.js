import {CLOSE_POPUP, KEYWORD_CREATE, KEYWORD_DELETE, KEYWORD_EDIT} from "../constants"


const INITIAL_STATE = {
    type: null,
    id: null,
    title: null,
    content: null,
    contentComponent: null,
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
                contentComponent: action.payload.contentComponent,
                actions: action.payload.actions,
                onDismiss: action.payload.onDismiss,
                disableFooter: action.payload.disableFooter
            };
        case KEYWORD_EDIT:
            return {...state,
                type: action.type,
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
                contentComponent: action.payload.contentComponent,
                actions: action.payload.actions,
                onDismiss: action.payload.onDismiss,
                disableFooter: action.payload.disableFooter
            };
        case KEYWORD_DELETE:
            return {...state,
                type: action.type,
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
                contentComponent: action.payload.contentComponent,
                actions: action.payload.actions,
                onDismiss: action.payload.onDismiss,
                disableFooter: action.payload.disableFooter
            };
        case CLOSE_POPUP:
            return {
                type: null
            }
        default:
            return state;
    }
};