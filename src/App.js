import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './AppContext'; // Importa el AppProvider

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/design-system.css';
import Header from './components/Header';
import Principal from './components/Principal';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Tabla from './components/Tabla';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <AppProvider>
        <Header />
          <Routes>
            <Route path="/" Component={Principal} />
            <Route path="/busqueda" Component={Formulario} />
            <Route path="/resultado" Component={Tabla} />
          </Routes>
        <Footer />
      </AppProvider>
    </Router>

    // <div className="App">
        // {/* <Header /> */}
        // {/* <Principal /> */}
        // {/* <Formulario /> */}
        // {/* <Tabla /> */}
        // {/* <Footer /> */}
    // </div>
  );
}

export default App;
