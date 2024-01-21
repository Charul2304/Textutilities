import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= (e) =>{
        e.preventDefault();
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase","sucess")

    }
    const handleLoClick= () =>{
        
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase","sucess")

    }

    const handleClearClick= () =>{
        
        let newtext='';
        setText(newtext)

    }

    const handleCopyClick=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newtext=text.split(/[]+/);
        setText(newtext.join(" "))
    }

    const handleOnChange =(event)=>{

        setText(event.target.value);
    }
    const [text,setText]=useState('');
  return (
    <>
    <div className="container" style={{Color:props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',Color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn-btn primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn-btn primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn-btn primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn-btn primary mx-2" onClick={handleCopyClick}>Copy Text</button>
<button className="btn-btn primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>



    </div>
    <div className="container my-3" style={{Color:props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length }Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
