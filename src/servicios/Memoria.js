import { createContext, useReducer } from "react";
import { pedirMetas } from "./servicios";


const listaMock=[
    {
      id:'1',
      descripcion:'meta 1',
      frecuencia:'1',
      tiempo:'dia',
      veces:'58',
      fecha:'fffff',
      completada:'1',
      emoji:'🏃‍♂️',
     },
     {
      id:'2',
      descripcion:'meta 2',
      frecuencia:'1',
      tiempo:'dia',
      veces:'58',
      fecha:'fffff',
      completada:'5',
      emoji:'🏃‍♂️',
     },
     {
      id:'3',
      descripcion:'meta 3',
      frecuencia:'1',
      tiempo:'dia',
      veces:'58',
      fecha:'fffff',
      completada:'27',
      emoji:'🏃‍♂️',
     }
  ];

  //let memoria=JSON.parse(localStorage.getItem('meta'));
 /* const estadoInicial= metas? metas: {
    orden:[],
    objetos:{}
    
};*/
const metasPromise = await pedirMetas();

const estadoInicial= metasPromise? 
{
    orden: metasPromise.map(meta=>meta.id),
    objetos: metasPromise.reduce((objeto,meta)=>({...objeto,[meta.id]:meta}),{})
}:
{
    orden:[],
    objetos:{}
};

  const reductor=(estado,accion)=>{
    switch(accion.tipo){
        case 'colocar':{
            const metas=accion.metas;
            const nuevoEstado={
                orden: metas.map(meta=>meta.id),
                objetos: metas.reduce((objeto,meta)=>({...objeto,[meta.id]:meta}),{})
            };
    
            return nuevoEstado;
        };

        case 'crear':{
            const id=accion.id;
            const nuevoEstado={
                orden: [...estado.orden,id],
                objetos: {
                    ...estado.objetos,
                    [id]:accion.meta
                }
            };
            //localStorage.setItem('meta',JSON.stringify(nuevoEstado));
            return nuevoEstado;
        };

        case 'actualizar':{
            const id=accion.id;
            estado.objetos[id]={
                    ...estado.objetos[id],
                    ...accion.meta
                };
                
                const nuevoEstado={...estado};
                //localStorage.setItem('meta',JSON.stringify(nuevoEstado));
               
                return nuevoEstado;
            };

         case 'borrar':{
             const id=accion.id;
             const nuevoOrden=estado.orden.filter(item=>item !==id);
             delete estado.objetos[id];
             const nuevoEstado={
                orden: nuevoOrden,
                objetos: estado.objetos
                
             }
            // localStorage.setItem('meta',JSON.stringify(nuevoEstado));
             
               return nuevoEstado;
            };
        };
    }
//const metas=reductor(estadoInicial,{tipo:'colocar',metas: listaMock});

export const Contexto=createContext(null);
const Memoria=({children})=>{
   const[estado,enviar]= useReducer(reductor,estadoInicial);

    return(
        <Contexto.Provider value={[estado,enviar]}>
            {children}
        </Contexto.Provider>
    );
}

export default Memoria;