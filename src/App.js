
import './App.css';
import Nav from './component/Nav';
import Main from './component/Main';
import React, {useState} from 'react';

function App() {

  const [dark, setDark] = useState(true);

  function darkMode() {
    setDark((prevDark) => !prevDark);
  }
  return (
    <div className="App">
      <Nav dark={dark} handleClick={darkMode} />
      <Main dark={dark}/>
    
     
    </div>
  );
}

export default App;
