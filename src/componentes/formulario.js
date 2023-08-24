const Formulario=()=>{
    
    const Boton=({texto,destino,className})=>{
      
      return (<button className={className} onClick={destino} >
      {texto}
    </button>)
    }

    let opcionesFrecuencia=['dia','semana','mes','año'];
    let opcionesEmoji=['🏃‍♂️','💻','📖','🍎'];

    return (

      <>
      <form method="post" onSubmit={''}>
    
      <label>DESCRIBE TU META<input name="descripcion" type="text"/></label>

      <div className="seccionFrecuencia">
      <label className="labelFrecuencia">¿CON QUE FRECUENCIA DESEAS CUMPLIR TU META?    </label>
      <input className="inputFrecuencia" name="frecuencia"  type="number"/>
  
      <select className='selectFrecuencia'name={"tiempo"} >
      {opcionesFrecuencia.map(opcion=><option>{opcion}</option>)}
      </select >
      </div>

      <label>¿CUANTAS VECES DESEAS CUMPLIR ESTA META?<input name="veces"  type="number"/></label>
      <label>¿TIENES UNA FECHA LIMITE?<input name="fecha"  type="date"/></label>
      <label>¿CUANTAS VECES HAS COMPLETADO YA ESTA META?<input name="completada"  type="number"/></label>
     
      
     <label>ESCOGE EL ICONO PARA LA META
      <select name={"emoji"} >
      {opcionesEmoji.map(emoji=><option>{emoji}</option>)}
      </select >
      </label>

     <div className="footerForm">

      <Boton className={'crearButton'} texto={'Crear'}/>
      <Boton className={'deleteButton'} texto={'Borrar'}/>
      <Boton className={'updateButton'} texto={'Actualizar'}/>
      <Boton className={'cancelarButton'} texto={'Cancelar'}/>

     </div>
  
      </form>
      </>
    )
    
  }

  export default Formulario;