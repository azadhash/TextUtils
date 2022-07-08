import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = ()=> {
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to upper case","Success ");
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","Success ");
     }
     const handleClear = ()=> {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","Success ");
     }

     const handleCopy = ()=> {
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied to clipboard","Success ");

     }
     const handleSpace = ()=> {
       setText(text.split(/[ ]+/).join(" "));
       props.showAlert("Extra spaces removed","Success ");

     }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
   
    
    return (
        <>
        <div>
            <h2 style={{color:`${props.mode ==='light'?'black':' white'}`}}>{props.heading} </h2>
            <div className="mb-3"  style={{color:`${props.mode ==='light'?' grey':'white'}`}}>
                <textarea className="form-control" id="myBox" value = {text}  style={{backgroundColor:`${props.mode ==='light'?'white':' grey'}`,color:`${props.mode ==='light'?'grey':'white'}`}}  onChange={handleOnChange} rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleSpace}>Delete Extra Space</button>
        </div>

        <div className="cointainer" style={{color:`${props.mode ==='light'?' grey':'white'}`}}>
            <h2>Your Text Summary</h2>
            <p> {text.split(" ").length - 1} words and {text.length} characters</p>
            <p>{(text.split(" ").length - 1) * 0.008} minutes to read your text</p>
            <h3> Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string
}

TextForm.defaultProps = {
    heading: 'enter text'
}                  