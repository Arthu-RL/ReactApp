import "../styles/TextInputWithFocusButton.css"
import React from "react"

function TextInputWithFocusButton() {
    const inputRef = React.useRef(null);

    function onButtonClicked() {
        inputRef.current.focus();
    };

    return (
        <div className="TextInputWithFocusButtonDiv">
            <input className="TextInputWithFocus" ref={inputRef} type="text" />
            <button className="TextInputWithFocusButton" onClick={onButtonClicked}>focus input</button>
        </div>
    );
}

export default TextInputWithFocusButton;