import React, {useEffect, useState} from "react";
import KeywordList from "./KeywordList";
import Loading from "../common/Loading";

const UrlSource = ({url, keyList}) => {
    const [keywordFromUrl, setKeywordFromUrl] = useState(keyList);
    useEffect(()=>{
        debugger;
        console.log('urlsource-keylist -> ', keyList);
        setKeywordFromUrl(keyList);
    }, [])

    // useEffect(()=>{
    //
    // }, [keywordFromUrl]);

    return (
        <div className={"item"}>
            <div className={"ui teal button big"}>{url}</div>
            <div className="ui horizontal divider"/>
            {(keywordFromUrl!==null && keywordFromUrl !== undefined)?
                <KeywordList
                    url = {url}
                    keyList = {keywordFromUrl}
                    setKeyList = {setKeywordFromUrl}
                />:
                <Loading/>
            }
        </div>
    )
}

export default UrlSource;