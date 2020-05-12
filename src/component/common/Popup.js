import React from "react";
import ReactDOM from "react-dom";
import {useDispatch} from "react-redux";
import {closePopup} from "../../actions/PopupActions";


const Popup = ({title, content, actions, onDismiss}) => {
    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(closePopup)
    }

    return(
        <div>
            <div>
                title:{title}
            </div>
            <div>
                content:{content}
                <button onClick={onClose}>cancel</button>
            </div>
        </div>
    )
}

export default Popup;