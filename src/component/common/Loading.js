import React from "react";

const Loading = () => {
    return(
        <div className="ui segment">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
            </div>
            <p></p>
        </div>
    )
}

export default Loading;