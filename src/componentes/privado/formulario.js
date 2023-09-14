import { useContext } from 'react';
import {  Outlet, useNavigate, useParams} from "react-router-dom";
import Boton from '../complementos/boton'; 
import { Contexto } from '../../servicios/Memoria';
import { actualizarMeta, borrarMeta, crearMeta } from '../../servicios/servicios';

const Formulario=({className})=>{
    let opcionesFrecuencia=['dia','semana','mes','año'];
    let opcionesEmoji=['🏃‍♂️','💻','📖','🍎','💪','🛒','👩‍💻'];
    const navegar=useNavigate();
    const{id}=useParams();

    const [estado,enviar]=useContext(Contexto);
    let dflt={};

    if (id){
      dflt=estado.objetos[id];
    }else{
      dflt={
      descripcion:'ej.52 caminatas',
      frecuencia:'1',
      tiempo:'dia',
      veces:'10',
      fecha:'',
      completada:'0',
      emoji:'🏃‍♂️',     
      }
    }
   
    const {descripcion,frecuencia,tiempo,veces,fecha,completada,emoji}=dflt;
  
 function handleSubmmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());
  const formString= JSON.stringify(formJson);

      if(id){
        //este codigo actualiza la meta en la memoria
        actualizar(formJson);
      }else{
        //este codigo crea una nueva meta en la memoria
        crear(formString);
    }
  
  }
    
  async function crear(meta){

    const nuevaMeta= await crearMeta(meta);
    const id=nuevaMeta.id;
    enviar({tipo:'crear',meta:nuevaMeta,id:id});
    navegar('/lista');
  }

  async function actualizar(meta){
   
    const intId=parseInt(id);
    meta["id"]=intId;
    const metaUpdated= await actualizarMeta(meta,intId);
    enviar({tipo:'actualizar',meta:metaUpdated,id:id});
    navegar('/lista');
  }
  
  function cancelar(){
      navegar('/lista');
    }
  async function borrar(){
      const intId=parseInt(id);
      await borrarMeta(intId);
      enviar({tipo:'borrar',id:intId});
      navegar('/lista');
    }
  
    return (

      <>
      <form className={className} method="post" onSubmit={handleSubmmit}>
    
      <label>DESCRIBE TU META<input required defaultValue={descripcion} name="descripcion" type="text"/></label>

      <div className="seccionFrecuencia">
      <label className="labelFrecuencia">¿CON QUE FRECUENCIA DESEAS CUMPLIR TU META?    </label>
      <input defaultValue={frecuencia} className="inputFrecuencia" name="frecuencia"  type="number"/>
  
      <select defaultValue={tiempo} className='selectFrecuencia'name={"tiempo"} >
      {opcionesFrecuencia.map((opcion,key)=><option key={key}>{opcion}</option>)}
      </select >
      </div>

      <label>¿CUANTAS VECES DESEAS CUMPLIR ESTA META?<input defaultValue={veces} name="veces"  type="number"/></label>
      <label>¿TIENES UNA FECHA LIMITE?<input required defaultValue={fecha} name="fecha"  type="date"/></label>
      <label>¿CUANTAS VECES HAS COMPLETADO YA ESTA META?<input defaultValue={completada} name="completada"  type="number"/></label>
     
      
     <label className="labelEmoji" >ESCOGE EL ICONO PARA LA META</label>
      <select defaultValue={emoji} className='selectEmoji' name={"emoji"} >
      {opcionesEmoji.map((emoji,key)=><option key={key}>{emoji}</option>)}
      </select >
      

     <div className="footerForm">
      <Boton className={'cancelarButton'} texto={'Cancelar'} onClick={cancelar}/>
      {id? <Boton onClick={borrar} type={'button'} className={'deleteButton'} texto={'Borrar'}/>:null}
      {id? <Boton  type={'submit'} texto={'Actualizar'} className={'updateButton'}/>:null} 
      <Outlet></Outlet>
     </div>
  
      </form>
      </>
    )
    
  }
 

  export default Formulario;