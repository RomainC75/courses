import React, {useState} from 'react'

const Todo = ({todo}) => {

  return (
    <div>
        <h2>{todo.todo}</h2>
        <p>{todo.details}</p>
        <p>{todo.isDone ? '✔️' : '❌'}</p>
    </div>
  )
}

export default Todo