import { useContext } from 'react';
import Meta from './meta';
import {  Outlet } from "react-router-dom";
import { Contexto } from '../servicios/Memoria';


function Lista(){
  const [estado,]=useContext(Contexto);
  
  return (
    <>
    {estado.orden.map(id=><Meta key={id} obj={estado.objetos[id]}/>)}
    <Outlet></Outlet>
    </>
  )
}

export default Lista;