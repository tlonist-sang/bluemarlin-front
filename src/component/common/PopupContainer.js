import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import Popup from "./Popup";

const PopupContainer = () => {
    const {type, id, title, content, actions, onDismiss} = useSelector(state=>state.popup);
    useEffect(()=>{
    }, [type]);

    return(
        <div>
            {type?
                <Popup
                    title={title}
                    content={content}
                    actions={actions}
                    onDismiss={onDismiss}
                />
                :null}
        </div>
    )
}

export default PopupContainer;