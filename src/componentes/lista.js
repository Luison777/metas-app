import { useContext } from 'react';
import Meta from './meta';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Contexto } from '../servicios/Memoria';


function Lista(){
  const [estado,enviar]=useContext(Contexto);
  
  return (
    <>
    {estado.orden.map(id=><Meta key={id} obj={estado.objetos[id]}/>)}
    <Outlet></Outlet>
    </>
  )
}

export default Lista;