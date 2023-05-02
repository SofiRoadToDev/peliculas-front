
import './App.css';

import './components/Header/Header.css'
import  Layout from './pages/Layout'
import Detalle from './pages/Detalle'
import CardList from './pages/CardList'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
       <BrowserRouter>
       {/**Ver que el Route con el Layout tiene a las demás rutas como children */}
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="" element={<Home/>}/>
              <Route path="/peliculas/:id" element={<Detalle/>}/>
              <Route path="/generos/:nombre" element={<CardList/>}/>
            </Route>
          </Routes>
       </BrowserRouter>
      
      
    
      
      
    </>
  );
}

export default App;
