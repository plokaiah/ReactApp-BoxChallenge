import React from "react"
import boxes from "./boxes";
import Box from "./Box"

function App() {
  const [square,setSquare]=React.useState(boxes)
  function onToggle(id){
    setSquare(prevSquare=>{
      return prevSquare.map( (square) => square.id === id ? {...square, on: !square.on} : square )
    })
  }
  const squareElements=square.map((square)=>
          <Box 
            square={square}
            onToggle={onToggle}
          />
  )
  return (
    <div>
      {squareElements}
    </div>
  )
}

export default App;
