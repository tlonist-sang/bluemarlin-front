import {CLOSE_POPUP, KEYWORD_CREATE, KEYWORD_DELETE, KEYWORD_EDIT, REGISTER, USER_SETTING} from "../constant/constants"


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
                setActionResult:action.payload.setActionResult,
                onDismiss: action.payload.onDismiss,
                disableFooter: action.payload.disableFooter,
                width: action.payload.width,
                height: action.payload.height
            };
        case KEYWORD_EDIT:
            return {...state,
                type: action.type,
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
                contentComponent: action.payload.contentComponent,
                actions: action.payload.actions,
                setActionResult:action.payload.setActionResult,
                onDismiss: action.payload.onDismiss,
                disableFooter: action.payload.disableFooter,
                width: action.payload.width,
                height: action.payload.height
            };
        case KEYWORD_DELETE:
            return {...state,
                type: action.type,
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
                contentComponent: action.payload.contentComponent,
                actions: action.payload.actions,
                setActionResult:action.payload.setActionResult,
                onDismiss: action.payload.onDismiss,
                disableFooter: action.payload.disableFooter,
                width: action.payload.width,
                height: action.payload.height
            };
        case REGISTER:
            return{
                type: action.type,
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
                contentComponent: action.payload.contentComponent,
                actions: action.payload.actions,
                setActionResult:action.payload.setActionResult,
                onDismiss: action.payload.onDismiss,
                disableFooter: action.payload.disableFooter,
                width: action.payload.width,
                height: action.payload.height
            };
        case USER_SETTING:
            return{
                type: action.type,
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
                contentComponent: action.payload.contentComponent,
                actions: action.payload.actions,
                setActionResult:action.payload.setActionResult,
                onDismiss: action.payload.onDismiss,
                disableFooter: action.payload.disableFooter,
                width: action.payload.width,
                height: action.payload.height
            }
        case CLOSE_POPUP:
            return {
                type: null
            }
        default:
            return state;
    }
};