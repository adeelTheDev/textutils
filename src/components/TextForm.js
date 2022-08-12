import { useState } from "react"

const TextForm = props =>{

    const [text, setText] = useState("")

    const onChangeHandler = e =>{
        setText(e.target.value)
    }
    
    const upperCaseHandler = ()=>{
        setText(text.toUpperCase())
    }

    const lowerCaseHandler = ()=>{
        setText(text.toLowerCase())
    }

    const capitalizeHandler = ()=>{
        let arryOfText = text.split(" ")
        const newText = arryOfText.map(word=>{
            let firstChar = word[0].toUpperCase()
            return firstChar + word.slice(1)
        }).join(" ")
        setText(newText)
    }

    const clipboardHandler = ()=>{
        navigator.clipboard.writeText(text)
    }

    const extraSpacesHandler = ()=>{
        setText(text.split(/[ ]+/).join(" "))
    }

    const clearTextHandler = ()=>{
        setText("")
    }

    return(
        <>
            <div className="col-12">
                <h3>{props.heading}</h3>
                <div className="my-3">
                    <textarea className="form-control mb-3 bg-light textarea" onChange={onChangeHandler} value={text} placeholder="Enter Text Here..." rows="9"></textarea>
                    <button disabled={text === ""} className="btn btn-danger my-1 mx-2" onClick={clearTextHandler}>Clear All</button>
                    <button disabled={text === ""} className="btn btn-primary my-1 mx-2" onClick={upperCaseHandler}>UpperCase</button>
                    <button disabled={text === ""} className="btn btn-warning ry my-1 mx-2" onClick={lowerCaseHandler}>LowerCase</button>
                    <button disabled={text === ""} className="btn btn-success ry my-2 mx-2" onClick={capitalizeHandler}>Capitalize</button>
                    <button disabled={text === ""} className="btn btn-primary ry my-1 mx-2" onClick={clipboardHandler}>Copy Text</button>
                    <button disabled={text === ""} className="btn btn-danger ry my-1 mx-2" onClick={extraSpacesHandler}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="col-12">
                <h3>Text Summary</h3>   
                <p>
                    { text=== ""? 0 : (text.split(/\s+/).filter(word => word !== "").length)} Words<br/>
                    {(text.split("").filter(word => word !== " ").length)} Characters (without spaces) <br/>
                    {(text === "" ? 0 : text.split(" ").length)} Characters (with spaces) <br/>
                </p>
                <p>
                    Takes 
                    {(0.0033 * text.split(" ").filter(word => word!== "" ).length).toFixed(3)} 
                    minutes to read
                </p>
            </div>
            <div className="col-12">
                <h3>Preview</h3>
                <p>{(text.split(" ").filter(word => word !== "").length) >=1 ? text: "Enter Text above to preview"}</p>
            </div>
        </>
    )
}
export default TextForm