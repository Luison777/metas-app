import { createContext, useEffect, useReducer } from "react";



const listaMock=[
    {
      id:1,
      descripcion:'Ejemplo:correr',
      frecuencia:'1',
      tiempo:'dia',
      veces:'58',
      fecha:'fffff',
      completada:'3',
      emoji:'🏃‍♂️',
     },


  ];

 
/*const metasPromise = await pedirMetas();

const estadoInicial= metasPromise? 
{
    orden: metasPromise.map(meta=>meta.id),
    objetos: metasPromise.reduce((objeto,meta)=>({...objeto,[meta.id]:meta}),{})
}:
{
    orden:[],
    objetos:{}
};*/

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
            localStorage.setItem('meta',JSON.stringify(nuevoEstado));
            return nuevoEstado;
        };

        case 'actualizar':{
            const id=accion.id;
            estado.objetos[id]={
                    ...estado.objetos[id],
                    ...accion.meta
                };
                
                const nuevoEstado={...estado};
                localStorage.setItem('meta',JSON.stringify(nuevoEstado));
               
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
            localStorage.setItem('meta',JSON.stringify(nuevoEstado));
             
               return nuevoEstado;
            };
        default: return 'nada';
        };
    }

    
    let memoria=JSON.parse(localStorage.getItem('meta'));

    const obtenerEstadoInicial = () => {
        const metasGuardadas = memoria ? memoria : {
            orden: listaMock.map(meta => meta.id),
            objetos: listaMock.reduce((objeto, meta) => ({ ...objeto, [meta.id]: meta }), {}),
          };

        return metasGuardadas;
      };
      
export const Contexto=createContext(null);
const Memoria=({children})=>{
    const [estado, enviar] = useReducer(reductor, {}, obtenerEstadoInicial);

    // Guardar en el localStorage cuando el estado cambie
    useEffect(() => {
      localStorage.setItem('meta', JSON.stringify(estado));
    }, [estado]);

    return(
        <Contexto.Provider value={[estado,enviar]}>
            {children}
        </Contexto.Provider>
    );
}

export default Memoria;