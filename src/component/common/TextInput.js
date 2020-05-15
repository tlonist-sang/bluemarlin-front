import React from "react";

const TextInput = ({ref, value, onChange, placeholder, style, error, errorMessage}) => {
    return (
        <div className={"ui large icon input"}>
            <input
                ref={ref}
                style={style}
                type={"text"}
                placeholder={placeholder}
                onChange = {onChange}
                data-value={value}
            />
            {error?
                <div>
                    <h3 style={{"color":"red"}}>{errorMessage}</h3>
                </div>:null}
        </div>
    )
}

export default TextInput;