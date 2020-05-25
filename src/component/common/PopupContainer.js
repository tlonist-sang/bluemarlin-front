import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import Popup from "./Popup";

const PopupContainer = () => {
    const {type, id, title, content, data, contentComponent, actions, setActionResult,  onDismiss, disableFooter, width, height} = useSelector(state=>state.popup);
    useEffect(()=>{
    }, [type]);

    return(
        <div>
            {type?
                <Popup
                    title={title}
                    content={content}
                    data={data}
                    contentComponent={contentComponent}
                    actions={actions}
                    setActionResult={setActionResult}
                    onDismiss={onDismiss}
                    disableFooter={disableFooter}
                    width={width}
                    height={height}
                />
                :null}
        </div>
    )
}

export default PopupContainer;