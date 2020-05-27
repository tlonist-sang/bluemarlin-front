import {combineReducers} from "redux";
import authReducer from "./authReducer";
import popupReducer from "./popupReducer";

export default combineReducers({
    auth: authReducer,
    popup: popupReducer
});