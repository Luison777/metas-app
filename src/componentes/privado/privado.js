import { useContext } from "react";
import {Navigate, Outlet} from "react-router-dom";
import { authContext } from "../../servicios/AuthMemory";

function Privado (){
    const [auth]=useContext(authContext);
    
    if (auth.autorizado===false)return (<Navigate to='/login'/> )
    return <Outlet> </Outlet>;
};

export default Privado;