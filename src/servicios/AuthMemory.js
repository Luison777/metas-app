import { createContext, useReducer } from "react";


/*let memoria=JSON.parse(localStorage.getItem('meta'));
 const estadoInicial= memoria? memoria: {
    orden:[],
    objetos:{}
};*/
const estadoInicial={
    token:'',
    autorizado: false
};

  const reductor=(estado,accion)=>{
    switch(accion.tipo){
        case 'colocar':{
            const nuevoEstado={
                token:accion.token,
                autorizado:true
            };
    
            return nuevoEstado;
        };
        default:
            return;
    };
}

export const authContext=createContext(null);

const AuthMemoria=({children})=>{
   const[auth,enviarAuth]= useReducer(reductor,estadoInicial);

    return(
        <authContext.Provider value={[auth,enviarAuth]}>
            {children}
        </authContext.Provider>
    );
}

export default AuthMemoria;