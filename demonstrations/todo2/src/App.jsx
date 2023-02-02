import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';

const BASE_URL = process.env.REACT_APP_URL
const TOKEN=process.env.REACT_APP_TOKEN
const header = {
  headers:{
      Authorization:'Bearer '+TOKEN
  }
}

function App() {
  const [todos, setTodos] = useState([])

  const getTodos = () =>{
    axios.get(`${BASE_URL}/todo`,header).then(ans=>{
      setTodos(ans.data)
    }).catch(err=>{
      console.log('err : ',err)
    })
  }
  useEffect(()=>{
    getTodos()
  },[])


  return (
    <div className="App">
      <AddTodo header={header} setTodos={setTodos}/>
      {todos.map(todo=><DisplayTodo key={todo._id} todo={todo} header={header} setTodos={setTodos} getTodos={getTodos}/>)}
    </div>
  );
}

export default App;
