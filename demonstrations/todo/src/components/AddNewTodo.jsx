import React, {useState} from 'react'

const AddNewTodo = ({postNewTodo}) => {
    const [newTodo, setNewTodo] = useState({
        todo: "",
        details : "",
        isDone : false
    })

    const handleChanges = (e) =>{
        setNewTodo({
            ...newTodo,
            [e.target.name]: e.target.name==='isDone' ? e.target.checked : e.target.value
        })
        console.log(newTodo)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        postNewTodo(newTodo)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label >todo</label>
                <input type="text" value={newTodo.todo} name="todo" onChange={handleChanges}/>
            </div>
            <div>
                <label >details</label>
                <input type="text" value={newTodo.details} name="details" onChange={handleChanges}/>
            </div>
            <div>
                <label >isDone</label>
                <input type="checkbox" checked={newTodo.isDone} name="isDone" onChange={handleChanges}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddNewTodo