import React from "react";
import KeywordList from "./KeywordList";

const UrlSource = ({url, keyList}) => {

    return (
        <div className={"item"}>
            <div className={"ui teal button big"}>{url}</div>
            <div className="ui horizontal divider"/>
            <KeywordList
                url = {url}
                keyList = {keyList}
            />
        </div>
    )
}

export default UrlSource;