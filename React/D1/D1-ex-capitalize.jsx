import logo from './logo.svg';
import './App.css';

const myself = {
  firstname:'roMain',
  lastname: 'cheNARD'
}

function capitalize(str){
  return str[0].toUpperCase()+str.slice(1).toLowerCase()
}

function App() {

  return (
    <div className="App">
      <h1>Hello!</h1>
      <h2>You are : {capitalize(myself.firstname)} {capitalize(myself.lastname)}</h2>
    </div>
  );
}

export default App;
