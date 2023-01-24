import React from 'react'

const Random = ({min, max}) => {
    const randomVal = ()=>{
        return Math.floor(Math.random()*(max-min+1))+min
    }
  return (
    <div className="border alignLeft">
        Random value between {min} and {max} => {randomVal()}
    </div>
  )
}

export default Random