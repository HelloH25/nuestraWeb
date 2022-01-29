import react from 'react'
import { Route, Routes } from 'react-router';
import './App.css';
import Contactme from './pages/Contactme';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/Contacto" element={<Contactme/>}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
      </Routes>
    </div>
  );
}

export default App;
