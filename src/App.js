import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  const encenderApagar = () =>{
    setStateCar(!stateCar);
    setContar(contar + 1);
  }

  useEffect(()=>{
    console.log(`Total ${contar}`)
  },[contar])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={encenderApagar}>Encender/Apagado</button>
      </header>
    </div>
  );
}

export default App;
