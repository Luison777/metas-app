
import './layout/layout.css';
import './componentes/css/formulario.css';
import './componentes/css/meta.css';
import './componentes/css/entradaLateral.css';
import './componentes/css/mensaje.css';
import './componentes/css/loginSignup.css'

import { Routes, Route, useNavigate, Navigate} from "react-router-dom";

import Layout from './componentes/privado/layout';
import Lista from './componentes/privado/lista';
import Formulario from './componentes/privado/formulario';
import Boton from './componentes/complementos/boton';
import LoginSign from './componentes/publico/loginsignup';
import Privado from './componentes/privado/privado';


function App() {
  
  const navegar=useNavigate();

  function registrar(){
    const signup='signup'
    navegar(`/login/:${signup}`);
  }
  
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="*" element={<Navigate to='/login'/>}></Route>
        <Route path="/login" element={<Layout privado/>}>
          <Route path='/login' element={<LoginSign text={'ACCESO'} 
            children={<>
            <Boton type={'submit'} texto={'Acceder'} className={'accederButton'} />
            <Boton type={'button'} texto={'Registrarme'} className={'registrarButton'} onClick={registrar}/>
            </>
            }/>}/> 
          <Route path='/login/:signup' element={<LoginSign text={'REGISTRARME'} 
            children={<>
            <Boton type={'submit'} texto={'Registrarme'} className={'registrarButton'} />
            </>
            }/>}/> 
        </Route>
        

        <Route path="/" element={<Layout/>}>
          <Route path='/' element={<Privado/>}>
              <Route path="lista" element={<Lista />}>
                <Route path="/lista/:id" element={<div className='modal'> <Formulario /></div>}/>
              </Route>
              <Route path="nueva" element={<Formulario className={'form'} />}>
                <Route path="/nueva" element={ <Boton type={'submit'} texto={'Crear'} className={'crearButton'}/>}/>
              </Route>    
          </Route>  
        </Route>
      </Routes>
     </>
    </div>
  );
}

export default App;
