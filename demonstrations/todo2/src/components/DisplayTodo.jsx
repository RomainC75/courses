import axios from "axios";
import React,{useState} from "react";
import AddTodo from "./AddTodo";

const BASE_URL = process.env.REACT_APP_URL

const DisplayTodo = ({ todo, header, setTodos, getTodos }) => {
    const [displayEdit, setDisplayEdit] = useState(false)

    const deleteTodo=()=>{
        console.log('id',todo._id)
        axios.delete(BASE_URL+'/todo/'+todo._id,header).then(ans=>{
            // getTodos()
            setTodos(todos=>{
                return todos.filter(currentTodo=>currentTodo._id!==todo._id)
            }).catch(err=>{
                console.log('delete err : ', err)
            })
        }).catch()
        
    }
  return (
    <div className="todo">
      <h3>{todo.todo}</h3>
      <p>
        <span>Details : </span>
        {todo.details}
      </p>
      {todo.imageUrl && <img src={todo.imageUrl} alt="image" width={100} />}
      <div>
        <span>isDone : </span>
        {todo.isDone ? "✔️" : "❌"}
      </div>
      <button onClick={()=>deleteTodo()}>delete</button>
      <button onClick={()=>setDisplayEdit(!displayEdit)}>{displayEdit ? 'hide' : 'show'}</button>
      {displayEdit && <AddTodo header={header} todo={todo} setTodos={setTodos}/>}
    </div>
  );
};

export default DisplayTodo;
