// rfc

import React, { useState } from 'react'
export default function TextForm(props) {
    let myStyle = {
        "backgroundColor":"rgb(48 89 114)",
        "borderColor":"rgb(227 229 231)"
    }
    const [text, setText] = useState('');
    // text = "New Text"; Wrong way to change text 
    // setText("New Text"); Correct way to change text

    const handleUppercaseClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        props.showAlert("Converted to Uppercase!", "success");
        setText(newText);
    }

    const handleLowercaseClick = () => {
        let newText = text.toLocaleLowerCase();
        props.showAlert("Converted to Lowercase!", "success");
        setText(newText);
    }

    const handleClearText = () => {
        props.showAlert("Text Cleared!", "success");
        setText("");
    }
    const handleOnChange = (event) => {
        // console.log("ON Change");
        setText(event.target.value);
    }

    const handleCopyToClipboard = () => {

        props.showAlert("Text Copied!", "success");
        navigator.clipboard.writeText(text);
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='my-2'>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="myBox" rows={8} placeholder='Enter a sentence' />
                </div>
                <button disabled = {text.length === 0} className={`${props.btnChange}`} style = {props.mode === 'dark' ? myStyle: null} onClick={handleUppercaseClick}>Convert to Upper Case</button>
                <button disabled = {text.length === 0} className={`${props.btnChange}`} style = {props.mode === 'dark' ? myStyle: null} onClick={handleLowercaseClick}>Convert to Lower Case</button>
                <button disabled = {text.length === 0} className={`${props.btnChange}`}  style = {props.mode === 'dark' ? myStyle: null} onClick={handleClearText}>Clear Text</button>
                <button disabled = {text.length === 0} className={`${props.btnChange}`} style = {props.mode === 'dark' ? myStyle: null} onClick={handleCopyToClipboard}>
                    Copy
                </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <h1>Your text summary</h1>
                {/* <p>{Math.min(text.length, text.trim().split(' ').length)} words and {text.length} characters</p> */}
                {/* <p>{Math.min(text.length, 0.008 * text.trim().split(' ').length)} Minutes read</p> */}
                {/* <p>{text.trim().split(' ').filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p> */}
                {/* <p>{0.008 * text.trim().split(' ').filter((element)=>{return element.length !== 0}).length} Minutes read</p> */}
                <p>{text.trim().split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.trim().split(' ').filter((element)=>{return element.length !== 0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter a Senctence"}</p>
            </div>
        </>
    )
}
