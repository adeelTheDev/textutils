import { useState } from "react"
import ColorPalettes from "./ColorPalettes"

const ModeHandler = ()=>{

    const [currentMode, setMode] = useState("light")

    const handleMode = ()=>{
        const HTMLRoot = document.querySelector("html")

        if(currentMode === "light"){
            HTMLRoot.classList.add("dark", "bluish")
            HTMLRoot.classList.remove("light")
            setMode("dark")
        }else{
            HTMLRoot.classList.remove("dark")
            HTMLRoot.classList.remove("bluish")
            HTMLRoot.classList.remove("redish")
            HTMLRoot.classList.remove("greenish")
            HTMLRoot.classList.add("light")
            setMode("light")
        }
    }

    return(
        <div className="d-flex align-items-center">
            {currentMode === "dark"? <ColorPalettes /> : null}
        <div className="form-check form-switch" onClick={handleMode}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        </div>
        <label className="form-check-label text-white">Enable {currentMode === "dark" ? "Light Mode" : "Dark Mode"}</label>
        </div>
        )
}
export default ModeHandler