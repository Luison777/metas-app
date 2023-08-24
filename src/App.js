
import './layout/layout.css';
import './componentes/formulario.css';
import './componentes/meta.css';
import './componentes/entradaLateral.css';
import './componentes/mensaje.css';

import { useState } from 'react';
import Formulario from './componentes/formulario';
import Meta from './componentes/meta';
import EntradaLateral from './componentes/entradaLateral';
import Mensaje from './componentes/mensaje';
import Lista from './componentes/lista';

import Header from './layout/header.js';
import Aside from './layout/aside.js';
import Main from './layout/main.js';
import Footer from './layout/footer.js';

function App() {
  let estadoLocal=JSON.parse(localStorage.getItem('metas'));
  let informacion;
  estadoLocal? informacion=estadoLocal :informacion=[];

  
  return (
    <div className="App">
      <>
    <Header></Header>

    <Aside> 
    <EntradaLateral src='.\lista.png' clase={"lateral"} nombre={'Lista de Metas'} destino={''}/>
    <EntradaLateral src='.\plus.png' clase={"lateral"} nombre={'Nueva Meta'} destino={''}/>
    </Aside>

    <Main>
     <Lista></Lista>
    </Main>

    <Footer></Footer>
     </>
    </div>
  );
}

export default App;
