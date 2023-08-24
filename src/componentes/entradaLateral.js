const EntradaLateral=({nombre,destino,clase,src})=>{
  
    return  (<button className={clase} onClick={destino}>
     <img className='tarjetaicon' src={src}></img>{nombre}
   </button>)
   }

export default EntradaLateral;