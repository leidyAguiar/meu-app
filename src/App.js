import './App.css';
import Letreiro from './components/aula_01/Letreiro';
import Relogio  from './components/aula_01/Relogio';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import AppContador from './components/aula_02/AppContador';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Letreiro" element={<Letreiro />} />3
    <Route path="/Relogio" element={<Relogio />} />
    <Route path="/AppContador" element={<AppContador />} />
  </Routes> 
  </BrowserRouter>
  );
}

export default App;
