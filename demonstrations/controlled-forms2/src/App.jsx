import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [accepted, setAccepted] = useState(false)
  const [passwordLengthError, setPasswordLengthError] = useState(true)
  const handleEmail = (email) =>{

    setEmail(email)
  }

  const handlePassword = (password) =>{
    if(password.length<8){
      setPasswordLengthError(true)
    }else{
      setPasswordLengthError(false)
    }
    setPassword(password)
  }

  const handleAccepted = (isAccepted) =>{
    setAccepted(isAccepted)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    console.log(email,password,accepted)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <label htmlFor="email">mail</label>
        <input type="text" name="email" value={email} onChange={(el)=>handleEmail(el.target.value)}/>

        <label htmlFor="password">password</label>
        <input type="password" name="password" value={password} onChange={(el)=>handlePassword(el.target.value)}/>
        {passwordLengthError && <p className='error'>password length >= 8</p>}
        <label htmlFor="accepted">accepted</label>
        <input type="checkbox" name="accepted" checked={accepted} onChange={(el)=>handleAccepted(el.target.checked)}/>

        <button type="submit" disabled={passwordLengthError}>Submit</button>
      </form>
    </div>
  );
}

export default App;
