import React from 'react'
import "./ColorPalettes.css"

function ColorPalettes(props) {

    const changeColors = color =>{
        const HTMLRoot = document.querySelector('html');
        HTMLRoot.classList.remove('greenish')
        HTMLRoot.classList.remove('redish')
        HTMLRoot.classList.remove('bluish')
        HTMLRoot.classList.add(color)
    }
    
    return (
        <div className='colorPalettes d-flex'>
            <div className="color greenish" onClick={()=>{changeColors('greenish')}}></div>
            <div className="color redish" onClick={()=>{changeColors('redish')}}></div>
            <div className="color bluish" onClick={()=>{changeColors('bluish')}}></div>
        </div>
    )
}

export default ColorPalettes
