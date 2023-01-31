import React from 'react'

const Element = ({home}) => {
  return (
    <div>
        <h3>{home.title}</h3>
        <h4>{home._id}</h4>
        <img src={home.img} alt={'home : '+home.title} width={100}/>
    </div>
  )
}

export default Element