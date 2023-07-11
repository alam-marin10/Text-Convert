import React,{useState} from 'react'

export default function TextFrom(props) {

  const handleOnChange = (event)=>{
    // console.log("on change");
     setText(event.target.value);
 }
 const [text,setText] = useState("");

// Upper Case
    const handleUpCase = ()=>{
       // console.log("UpperCase Was clicked");
        setText("UpperCase was clicked "+text)
        let newText = text.toLocaleUpperCase();
        setText(newText)
        props.showAlert("Convert to UpperCase","success");
    }
    
 // LowerCase 
    const handleLoweCase = ()=>{
       // console.log("UpperCase Was clicked");
        setText("UpperCase was clicked "+text)
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Convert to lowerCase","success");
    }
 // Clear Text 
    const handleClear = ()=>{
      // console.log("UpperCase Was clicked");
       setText("UpperCase was clicked "+text)
       let newText ="";
       setText(newText)
       props.showAlert("Clear to text","success");
   }
 // COpy Text 
   const handleCopy =()=>{
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Text","success");
   }
// Remove Space
   const handleRemoveSpaces =()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove Extra Spacess","success");
   }


 
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'light'}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">
   
   <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'light',
     color: props.mode==='dark'?'white':'light'}} id="myBox" rows="8"></textarea>
  </div>

   <button className="btn btn-primary mx-2 my-2" onClick={handleUpCase}>Convert To UpperCase</button>
   <button className="btn btn-primary mx-2 my-2" onClick={handleLoweCase} >Convert To LowerCase</button>
   <button className="btn btn-primary mx-2 my-2" onClick={handleClear} >Clear-Text</button>
   <button className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy-Text</button>
   <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpaces} >Remove Spaces</button>
   

    <div className='container my-3'>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0 }).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>



    </div>
    </>
  )
}
;
