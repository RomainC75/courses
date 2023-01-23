import {useState} from 'react'

const Carrousel = () => {
    const [id, setId] = useState(0)

    const handleId = (newId) =>{
        if(newId>=0){
            setId(newId)
        }
    }

  return (
    <div>
        <h2>Carrousel from 0</h2>
        <img src={`https://picsum.photos/id/${id}/200/300`} alt="" />
        <div>
            <button onClick={()=>handleId(id-1)}>-</button>
            <button onClick={()=>handleId(id+1)}>+</button>
        </div>
    </div>
  )
}

export default Carrousel