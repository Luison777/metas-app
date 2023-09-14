import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authContext } from '../../servicios/AuthMemory';
import { acceder, registrar } from '../../servicios/Auth';
import { pedirMetas } from '../../servicios/servicios';
import { Contexto } from '../../servicios/Memoria';

function LoginSign({text,children}){
    const navegar=useNavigate();
    const{signup}=useParams();
    const [,enviarAuth]=useContext(authContext);
    const [,enviar]=useContext(Contexto);

    async function handleSubmmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
            if(signup){
                //este codigo es para registrarse en la app
                const token=await registrar(formJson);
                enviarAuth({tipo:'colocar',token:token}); 
                navegar('/lista');
            }else{
                //este codigo es para autorizar la entrada a la app
                const token=await acceder(formJson);
                const metas=await pedirMetas(token.token);
                enviar({tipo:'colocar',metas:metas})
                enviarAuth({tipo:'colocar',token:token});
                navegar('/lista');
            }
        }
    return (
        <div className="contenedorLogin">
            <div className="divLogin">
            <div className="titleLogin">{text}</div>
                <form className="formLogin" method="post" onSubmit={handleSubmmit}>
                    <label className="labelLogin">USUARIO</label>
                    <input required name='usuario' type='email' placeholder='Escribe tu email'className="inputLogin"></input>
                    <label className="labelLogin">CLAVE</label>
                    <input required name='hash' type='password'className="inputLogin"></input>
                    <div className='loginFooterForm' >{children}</div>
                </form>
            </div>
        </div>
    )
};

export default LoginSign;