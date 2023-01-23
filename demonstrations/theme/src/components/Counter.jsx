import {useState} from 'react'
import './styles/counter.css'
const Counter = ({theme}) => {
    const [counter, setCounter] = useState(0)
    const handleCounter = (newValue) =>{
        if(newValue>=0){
            setCounter(newValue)
        }
    }
    
  return (
    <div>
        <div className="Counter">
            <h2>Counter</h2>
            <h3 className={theme ? 'underline' : ''}>You clicked {counter} times</h3>
            <div>
                <button onClick={()=>handleCounter(counter-1)}>-</button>
                <button onClick={()=>handleCounter(counter+1)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default Counter