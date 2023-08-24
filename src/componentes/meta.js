/*const completado=()=>{
  if (inicio<fin){
  inicio++;
  setInput6(almacenamiento[key]["v6"]=inicio);
  }else{setInput6(almacenamiento[key]["v6"]=fin);}
  localStorage.setItem('metas',[JSON.stringify(almacenamiento)]);
}*/
/*    
    let ancho;
    if (inicio<fin){
      ancho={ width: inicio*100/fin+'%'};
    }else(ancho={width:100+'%'})*/

function Meta({obj}){
 
       const {descripcion,frecuencia,tiempo,veces,fecha,completada,emoji}=obj;
    return  (
        <div  className='contenedor' >

        <div className="divUno">
          <p className='emoji'>{emoji}</p>
          <p className='parrafoFrecuencia'>{frecuencia}<sub>/{tiempo}</sub></p>
          <p  className='descripcion'>{descripcion}</p>
          
        </div>

        <div className="divDos">
        <p className="parrafoCompletado">{completada} de {veces}
        <div className='barra1'><div className='barra2'></div></div>
        </p>
        <button onClick={''} >Completado</button>
        </div>

        </div>
      );
}

export default Meta;
