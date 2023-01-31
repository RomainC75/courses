import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0)
    const [delay, setDelay] = useState(1000)
    const [inc, setInc] = useState(1)
    const [id, setId ] = useState(null)
    
    useEffect(()=>{
        console.log('id : ', id)
    },[])

    useEffect(()=>{
        if(id){clearInterval(id)}
        const idBuff = setInterval(()=>{
            setTime(time=>{
                console.log('=>',time)
                return time+parseInt(inc)
            })
        },parseInt(delay))
        setId(idBuff)
        return ()=>{
            clearInterval(id)
        }
    },[delay, inc])


    

    const handleDelay = (e) =>{
        
        const value = parseInt(e.target.value)
        console.log(value)
        value>1000 && setDelay(value)
        
    }

  return (
    <div>
        <h1>Timer</h1>
        <h2>{time}</h2>
        <input type="number" value={delay} onChange={handleDelay}/>
        <input type="number" value={inc} onChange={(e)=>setInc(e.target.value)}/>
    </div>
  )
}

export default Timer