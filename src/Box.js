import React from "react"

export default function Box(props){
    return (
        <button 
            className="box" 
            style={{backgroundColor: props.square.on?"#222222":"transparent"}}
            onClick={()=>props.onToggle(props.square.id)}
          >
          </button>)
    
} 