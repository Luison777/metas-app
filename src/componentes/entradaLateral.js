import { Routes, Route, Outlet, Link } from "react-router-dom";
const EntradaLateral=({nombre,onClick,clase,src,link})=>{
  
    return  (<Link className='noUnderline' to={link}><button className={clase} onClick={onClick}>
     <img className='tarjetaicon' src={src}></img>{nombre}
   </button></Link>)
   }

export default EntradaLateral;