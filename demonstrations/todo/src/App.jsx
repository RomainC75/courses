import axios from 'axios'
import { useState, useEffect } from 'react';
import './App.css';
import AddNewTodo from './components/AddNewTodo';
import Todo from './components/Todo';

const API_URL = "https://todo-konexio.herokuapp.com/todo"
const TOKEN = process.env.REACT_APP_TOKEN
const header = {
  headers:{
    Authorization:`Bearer ${TOKEN}`
  }
}

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    getTodos()
  },[])

  const getTodos = () =>{
    axios.get(API_URL,header
      ).then(response=>{
        console.log(response.data)
        setTodos(response.data)
      }).catch(err=>{
        console.log('err',err)
      })
  }

  const postNewTodo = (newTodo) =>{
    console.log('POST new TODO : ', newTodo)
    axios.post(API_URL,newTodo,header).then(response=>{
      console.log('POST response : ', response.data)
      setTodos(todos=>[...todos,response.data])
      // getTodos()
    }).catch(err=>{
      console.log('post error : ', err)
    })
  }

  return (
    <div className="App">
      <AddNewTodo postNewTodo={postNewTodo}/>
      {todos.map(todo=><Todo todo={todo} key={todo._id}/>)}
    </div>
  );
}

export default App;
