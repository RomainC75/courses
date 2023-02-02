import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const BASE_URL=process.env.REACT_APP_URL


const AddTodo = ({header, todo, setTodos}) => {
    const [newTodo, setNewTodo] = useState({
        todo: "",
        details : "",
        isDone : false,
        imageUrl:"https://picsum.photos/id/220/200/300"
    })

    useEffect(()=>{
        if(todo){
            console.log('TODO : ', todo)
            setNewTodo(todo)
        }
    },[])

    const handleChange = (e) =>{
        setNewTodo({
            ...newTodo,
            [e.target.name]:e.target.name==='isDone' ? e.target.checked : e.target.value
        })
        console.log(newTodo)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const url = `${BASE_URL}/todo`
        console.log(header)
        if(todo){
            axios.put(url+'/'+todo._id,newTodo,header).then(ans=>{
                console.log('UPDATED :', ans.data)
                setTodos(todos=>{
                    const filtered=todos.filter(todo=>todo._id!==ans.data._id)
                    return [ans.data, ...filtered]
                })
            }).catch(error=>{
                console.log('update error : ', error)
            })
            
        }else{
            axios.post(url,newTodo,header).then(ans=>{
                console.log('POST : ', ans)
                setTodos(todos=>[ans.data, ...todos])
            }).catch(error=>{
                console.log('error : ', error)
            })
        }
    }

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <label htmlFor="todo">todo</label>
        <input type="text" name="todo" value={newTodo.todo} onChange={handleChange}/>
        <label htmlFor="details">details</label>
        <input type="text" name="details" value={newTodo.details} onChange={handleChange}/>
        <label htmlFor="imageUrl">imageUrl</label>
        <input type="text" name="imageUrl" value={newTodo.imageUrl} onChange={handleChange}/>
        <label htmlFor="isDone">isDone</label>
        <input type="checkbox" name="isDone" checked={newTodo.isDone} onChange={handleChange}/>
        <button type="submit">Submit</button>
        </form> 
    </div>
  )
}

export default AddTodo