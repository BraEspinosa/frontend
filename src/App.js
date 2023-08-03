import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [data, setData] = useState("Fail");

  useEffect( () => {
    consulta();
  }, []);

  const consulta = () => {
    fetch('http://172.20.90.37:3001/der').then((response) => response.json()).then((data) => setData(data.estado));
  };


  return (
    <div className="App">
      <header className="App-header">        
        <p>Coming soon ...</p>
        <h1>
          DER
        </h1>
        <p>¿Where am i registered?</p>
        <i><p>{`Prueba Front-Backdata: ${data}`}</p></i>
      </header>
    </div>
  );
}

export default App;
