import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Footer from './components/Footer';
import FooterSwitch from './components/FooterSwitch';
import FooterContainer from './components/FooterContainer';

function App() {
  const [theme, setTheme] = useState(true)

  return (
    <div className={`App ${theme ? 'light' : 'dark'}`}>
      <h1>React - state and events</h1>
      <Counter theme={theme}/>
      {/* <Footer setTheme={setTheme}/> */}
      <FooterContainer setTheme={setTheme}/>
    </div>
  );
}

export default App;
