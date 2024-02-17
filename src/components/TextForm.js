import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        if (text.length == 0) {
            props.showAlert("No text to convert", "warning");
        }
        else {
            let newText = text.toUpperCase();
            setText(newText)
            props.showAlert("Converted to Uppercase", "success");
        }
    }
    const handleSpaces = () => {
        let newText = text.replace(/\s+/g, " ");
        setText(newText);
    };
    const handleLoClick = () => {
        if (text.length == 0) {
            props.showAlert("No text to convert", "warning");
        }
        else {
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert("Converted to Lowercase", "success");
        }
    }
    const handleClearClick = () => {
        if (text.length == 0) {
            props.showAlert("Nothing to clear", "warning");
        }
        else {
            let newText = "";
            setText(newText)
            props.showAlert("Text Area Cleared", "success");
        }
    }
    const handleCopy = () => {
        if (text.length == 0) {
            props.showAlert("No text to Copy", "warning");
        }
        else {
            navigator.clipboard.writeText(text);
            props.showAlert("Text copied to Clipboard", "success");
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // const [wordCount, setWordCount] = useState(0);
    const countWords = (text) => {
        // /\s+/
        const words = text.split(/\s+|[^a-zA-Z\d]+/);
        let wordCount = 0;
        words.forEach((word) => {
            if (word !== '') {
                wordCount++;
            }
        });
        return wordCount;
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2 style={{ paddingTop: "15px" }}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="7"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleClearClick} >Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} >Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleSpaces} >Remove extra spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Your text summary</h3>
                <p>{countWords(text)} words and {text.length} characters</p>
                <p>{0.008 * countWords(text)} minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in textbox to preview it here!"}</p>
            </div>
        </>
    )
}
// text.split(" ").length