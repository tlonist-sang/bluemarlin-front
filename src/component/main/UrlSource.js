import React, {useEffect, useState} from "react";
import KeywordList from "./KeywordList";
import Loading from "../common/Loading";

const UrlSource = ({url, urlId, keyList, isScheduling}) => {
    const [keywordFromUrl, setKeywordFromUrl] = useState(keyList);
    useEffect(()=>{
        setKeywordFromUrl(keyList);
    }, [])

    return (
        <div className={"item"}>
            <div className={"ui teal button big"}>{url}</div>
            <div className="ui horizontal divider"/>
            {(keywordFromUrl!==null && keywordFromUrl !== undefined)?
                <KeywordList
                    urlId = {urlId}
                    keyList = {keywordFromUrl}
                    setKeyList = {setKeywordFromUrl}
                    isScheduling = {isScheduling}
                />:
                <Loading/>
            }
        </div>
    )
}

export default UrlSource;