
import './layout/layout.css';
import './componentes/formulario.css';
import './componentes/meta.css';
import './componentes/entradaLateral.css';
import './componentes/mensaje.css';

import { useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Layout from './componentes/layout';
import Lista from './componentes/lista';
import Formulario from './componentes/formulario';
import Mensaje from './componentes/mensaje';
import Boton from './componentes/boton';
import Main from './layout/main';

function App() {
 
  
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Lista />}/>
          <Route path="lista" element={<Lista />}>
            <Route path="/lista/:id" element={<div className='modal'> <Formulario /></div>}/>
          </Route>
          <Route path="nueva" element={<Formulario className={'form'} />}>
            <Route path="/nueva" element={ <Boton type={'submit'} texto={'Crear'} className={'crearButton'}/>}/>
          </Route>    
        </Route>  
      </Routes>
     </>
    </div>
  );
}

export default App;
