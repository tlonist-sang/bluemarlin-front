import React from "react";
import ReactDOM from "react-dom";


const Popup = ({title, content, actions, onDismiss}) => {
    return ReactDOM.createPortal(
        <div onClick={onDismiss} className={"ui dimmer modals visible active"}>
            <div onClick={(e) => e.stopPropagation()} className={"ui standard modal visible active"}>
                <div className={"header"}>{title}</div>
                <div className={"content"}>
                    {content}
                </div>
                <div className={"actions"}>
                    {actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Popup;