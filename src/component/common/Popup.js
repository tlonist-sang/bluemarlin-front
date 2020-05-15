import React from "react";
import ReactDOM from "react-dom";
import {useDispatch} from "react-redux";
import {closePopup} from "../../actions/PopupActions";
import {CLOSE_POPUP} from "../../constants";


const Popup = ({title, content, contentComponent, actions, onDismiss, disableFooter, width, height}) => {
    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(closePopup(CLOSE_POPUP));
    }

    const onConfirm = () => {
        actions();
        dispatch(closePopup(CLOSE_POPUP));
    }

    return(
        <div className={"ui dimmer modals visible active"}>
            <div
                className={"ui standard modal visible active"}
                style={
                    {
                        "width": 700,
                        "height": 180
                    }
                }
            >
                <div>
                    <h2 className={"ui left floated header"}>{title}</h2>
                    <i
                        className={"close icon"} style={{"margin":"10px 0 0 430px"}}
                        onClick={onClose}
                    />
                </div>
                <div className="ui clearing divider"></div>
                <div>
                    <h3>{content}</h3>
                    <div>
                        {contentComponent?contentComponent():null}
                    </div>
                </div>
                <div className="ui horizontal header divider"/>
                {disableFooter?
                    null:<div style={{"margin":"10px 0 0 10px"}}>
                    <button className={"ui button medium blue"} onClick={onConfirm}>
                        confirm
                    </button>
                    <button className={"ui button medium red"} onClick={onClose}>
                        cancel
                    </button>
                </div>}
            </div>
        </div>
    )
}

export default Popup;