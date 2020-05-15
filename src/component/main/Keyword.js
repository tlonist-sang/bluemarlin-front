import React from "react";

const Keyword = (word) => {

    return(
        <div className = {"ui animated button"}>
            <div className={"visible content"}>
                {word}
            </div>
            <div className={"hidden content"} onClick={()=>{}}>
                delete
                <i style={{"marginLeft":"5px"}} className={"x icon"}/>
            </div>
        </div>
    )
}


export default Keyword;