import react from 'react'
import { Route, Routes } from 'react-router';
import './App.css';
import Layouts from './components/Layouts';
import Contactme from './pages/Contactme';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Layouts/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/Contacto" element={<Contactme/>}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
      </Routes>
    </div>
  );
}

export default App;
