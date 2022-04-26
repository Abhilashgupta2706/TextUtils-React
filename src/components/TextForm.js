import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    };

    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    };

    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
    };

    const handleClearTextClick = () => {
        let newText = '';
        setText(newText)
    };

    const handleOnChange = (e) => {
        setText(e.target.value)
    };

    const handleCopyClick = () => {
        let textToCopy = document.getElementById('myBox')
        textToCopy.select()
        navigator.clipboard.writeText(textToCopy.value)
    }

    const myStyle = {
        maxWidth: '100%',
        wordWrap: 'break-word'
    }



    return (
        <>

            <div className={`container my-3 ${props.mode === 'dark' ? "text-light" : "text-dark"}`}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea placeholder='Enter your text here'
                        value={text} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? props.blackColorCode : "white", color: props.mode === 'dark' ? "white" : "black" }}
                        className="form-control"
                        id="myBox"
                        rows="8">

                    </textarea>
                </div>
                <button className='btn btn-secondary m-2' onClick={handleUpperCaseClick}>Uppercase</button>
                <button className='btn btn-secondary m-2' onClick={handleLowerCaseClick}>Lowercase</button>
                <button className='btn btn-secondary m-2' onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
                <button className='btn btn-secondary m-2' onClick={handleClearTextClick}>Clear</button>
                <button className='btn btn-secondary m-2' onClick={handleCopyClick}>Copy</button>
            </div>

            <hr />

            <div className={`container my-3 ${props.mode === 'dark' ? "text-light" : "text-dark"}`}>
                <h2>Text summary</h2>
                <p>Words: {text === "" ? 0 : text.split(" ").length} | Characters: {text.length}</p>
                <p>AVG Time to read: {text === "" ? 0 : 0.008 * text.split(" ").length} min</p>
                <h2>Preview:</h2>
                <p style={myStyle}>{text}</p>
            </div>


        </>
    );
}
