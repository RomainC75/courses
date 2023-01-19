import React from 'react'

const Button = (props) => {
    // const {text} = props
    console.log(props)
  return (
    <button>{props.text}</button>
  )
}

export default Button