import React,{useState} from "react";


export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
}
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
}
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
}
//copy text and extra space feature we can add....
//   const handleZoomClick=()=>{
//     let newText=text.;
//     setText(newText);
// }
  const handleOnChange=(event)=>{
    // console.log("On Change!");
    setText(event.target.value);
}
  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
      {/* <button className="btn btn-primary mx-1" onClick={handleZoomClick}>Zoom</button> */}


    </div>
    <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} Characters. </p>
        <p>{0.008*text.split(" ").length} minutes take to read whole data...</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
