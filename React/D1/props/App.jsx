import logo from './logo.svg';
import './App.css';
import DisplayName from './components/DisplayName';

function App() {
  const persons = [
    {
      firstName:'Sponge',
      lastName:'Bob'
    },
    {
      firstName:'Romain',
      lastName:'Chenard'
    },
    {
      firstName:'Phil',
      lastName:'Prono'
    }
  ]
  return (
    <div className="App">
      {
        persons.map((person)=><DisplayName person={person}/>)
      }
      {/* <DisplayName person={person}/> */}
    </div>
  );
}

export default App;
