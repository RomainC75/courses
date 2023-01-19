import React, {useState} from 'react'

import './styles/colorChange.css'

const colors = [
    'bgBlack',
    'bgYellow',
    'bgRed'
]

const ColorChange = () => {
    const [colorIndex, setColorIndex] = useState(0)

    const handleColor = () =>{
        if(colorIndex<colors.length-1){
           setColorIndex(colorIndex+1)
        }else{
            setColorIndex(0)
        }
        console.log('index : ', colorIndex)
    }

  return (
    <div>
        <div className={"square "+colors[colorIndex]}></div>
        <button onClick={()=>handleColor()}>change color</button>
    </div>
  )
}

export default ColorChange