import { Link } from "react-router-dom";
const EntradaLateral=({nombre,onClick,clase,src,link})=>{
  
    return  (<Link className='noUnderline' to={link}><button className={clase} onClick={onClick}>
     <img alt='esto es un emoji' className='tarjetaicon' src={src}></img>{nombre}
   </button></Link>)
   }

export default EntradaLateral;