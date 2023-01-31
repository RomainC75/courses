import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Element from './Element'

const Home = () => {
    const url='https://ironbnb-m3.herokuapp.com/apartments'
    const [homes, setHomes] = useState(null)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        axios.get(url).then(ans=>{
            setTimeout(()=>{
                console.log('ans',ans.data)
                setHomes(ans.data)
                setIsLoading(false)
            },3000)
        }).catch(err=>{
            setError(true)
        })
    },[])

  return (
    <div>
        <h1>Homes</h1>
        {error && <p class="error">Error! </p>}
        {isLoading && <div className="lds-hourglass"></div>}
        {homes && homes.map((home,i)=><Element home={home}key={i+home.title}/>)}
    </div>
  )
}

export default Home