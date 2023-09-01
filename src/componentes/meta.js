
import { Link } from "react-router-dom";
import { Contexto } from "../servicios/Memoria";
import { useContext } from "react";
import { actualizarMeta } from "../servicios/servicios";

function Meta({obj}){

       const {id,descripcion,frecuencia,tiempo,veces,fecha,completada,emoji}=obj;
       const porcentaje=completada*100/veces;
       const style={'width':porcentaje+'%'};
       const [estado,enviar]=useContext(Contexto);

      async function completado(){
        const copia={...estado.objetos[id]};
        let completada=parseInt(copia.completada);
        let veces=parseInt(copia.veces);
        if(completada<veces){
        copia.completada=(parseInt(copia.completada)+1).toString()}
        else{return;}
        const intId=parseInt(id);
        const metaUpdated= await actualizarMeta(copia,intId);
        enviar({tipo:'actualizar',meta:metaUpdated,id:id});
      }

    return  (
      
        <div className='contenedor' >
            <Link className='divUno'to={`/lista/${id}`} >
         
            <p className='emoji'>{emoji}</p>
            <p className='parrafoFrecuencia'>{frecuencia}<sub>/{tiempo}</sub></p>
            <p  className='descripcion'>{descripcion}</p>
            <span className="parrafoCompletado">{completada} de {veces}
              <div className='barra1'><div style={style} className='barra2'></div></div>
            </span>
          
          </Link>
          <div className="divDos">
            <button onClick={completado}>Completado</button>
          </div>
        </div>
      
      );
}

export default Meta;
