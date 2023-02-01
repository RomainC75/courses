import React from 'react'

const Appartment = ({home}) => {
  console.log('appartment :' , home)
  return (
    <div>
      <h2>{home.title}</h2>
      <img src={home.img} width={100}/>
      <p>Price : {home.pricePerDay}</p>
    </div>
  )
}

export default Appartment