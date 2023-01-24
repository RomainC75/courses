import React, {useState} from 'react'
import dice0 from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

const Dice = () => {
    const arr = [dice1, dice2, dice3, dice4, dice5, dice6]
    const [displayDice , setDisplayDice] = useState(dice0)

    const handleClick = ()=>{
        setDisplayDice(dice0)
        setTimeout(()=>{
            setDisplayDice(arr[Math.floor(Math.random()*6)])
        },1000)
    }

  return (
    <div>
        <img src={displayDice} style={{width:100}} onClick={()=>handleClick()}/>
    </div>
  )
}

export default Dice