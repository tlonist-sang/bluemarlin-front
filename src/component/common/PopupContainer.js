import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import Popup from "./Popup";

const PopupContainer = () => {
    const {type, id, title, content, contentComponent, actions, onDismiss, disableFooter} = useSelector(state=>state.popup);
    useEffect(()=>{
    }, [type]);

    return(
        <div>
            {type?
                <Popup
                    title={title}
                    content={content}
                    contentComponent={contentComponent}
                    actions={actions}
                    onDismiss={onDismiss}
                    disableFooter={disableFooter}
                />
                :null}
        </div>
    )
}

export default PopupContainer;